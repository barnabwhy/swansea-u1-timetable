<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Destination, DESTINATIONS, getLastDepartureBefore, getNextDeparture, oppositeOf, timeString, timeUntilDeparture } from './data/schedule';
import FullSchedule from './components/FullSchedule.vue';

let scheduleModeMem = ref(parseInt(localStorage.getItem('schedule-mode') ?? '0'));
const scheduleMode = computed({
  get() {
    return scheduleModeMem.value;
  },
  set(value) {
    scheduleModeMem.value = value;
    localStorage.setItem('schedule-mode', value.toString());
  },
});

let currentDestinationMem = ref(DESTINATIONS[parseInt(localStorage.getItem('current-destination') ?? '0')]);
const currentDestination = computed({
  get() {
    return currentDestinationMem.value;
  },
  set(value) {
    currentDestinationMem.value = value;
    localStorage.setItem('current-destination', DESTINATIONS.indexOf(value).toString());
  },
});

const currentTime = ref(new Date());

setInterval(() => {
  currentTime.value = new Date();
}, 1000);

const arriveByHours = ref(currentTime.value.getHours());
const arriveByMinutes = ref(currentTime.value.getMinutes());

const anyMoreRunning = computed(() => {
  return getNextDeparture(currentDestination.value, currentTime.value) !== null;
});

const timeUntilNext = computed(() => {
  let dep = getNextDeparture(currentDestination.value, currentTime.value);

  if (dep) {
    return timeUntilDeparture(dep);
  } else {
    return 'an unknown amount of time';
  }
});

const anyBeforeArrivalTime = computed(() => {
  return getLastDepartureBefore(currentDestination.value, { h: arriveByHours.value, m: arriveByMinutes.value }) !== null;
});

const departEarlyEnoughTime = computed(() => {
  let dep = getLastDepartureBefore(currentDestination.value, { h: arriveByHours.value, m: arriveByMinutes.value });

  if (dep) {
    return timeString(dep.dep);
  } else {
    return 'an unknown time';
  }
});

watch(arriveByHours, () => {
  if (typeof arriveByHours.value === 'string') {
    arriveByHours.value = 0;
  }

  if (arriveByHours.value < 0) {
    arriveByHours.value = 0;
  } else if (arriveByHours.value > 23) {
    arriveByHours.value = 23;
  }
});

watch(arriveByMinutes, () => {
  if (typeof arriveByMinutes.value === 'string') {
    arriveByMinutes.value = 0;
  }

  if (arriveByMinutes.value < 0) {
    arriveByMinutes.value = 0;
  } else if (arriveByMinutes.value > 59) {
    arriveByMinutes.value = 59;
  }
});

</script>

<template>
  <div class="page-container">
    <h1>U1 Timetable</h1>

    <h3>Are you at the bus stop?</h3>
    <div class="mode-select">
      <button :class="{ selected: scheduleMode == 0 }" @click="scheduleMode = 0">I'm already here</button>
      <button :class="{ selected: scheduleMode == 1 }" @click="scheduleMode = 1">I'm planning ahead</button>
    </div>

    <h3>Destination</h3>
    <div class="dest-select">
      <button :class="{ selected: currentDestination == Destination.BAY_CAMPUS }" @click="currentDestination = Destination.BAY_CAMPUS">{{ Destination.BAY_CAMPUS }}</button>
      <button :class="{ selected: currentDestination == Destination.PARK_AND_RIDE }" @click="currentDestination = Destination.PARK_AND_RIDE">{{ Destination.PARK_AND_RIDE }}</button>
    </div>

    <div v-if="scheduleMode === 0">
      <template v-if="anyMoreRunning">
        <h1 class="result">The next U1 is scheduled to leave from {{ oppositeOf(currentDestination) }} <span class="eta">{{ timeUntilNext }}</span>.</h1>
      </template>
      <template v-else>
        <h1 class="result">The U1 is no longer running to {{ currentDestination }} today.</h1>
      </template>
    </div>

    <div v-if="scheduleMode === 1">
      <h3>Arrive by</h3>
      <div class="arrive-by">
        <input type="number" class="arrive-by-hours" placeholder="Hour" min="0" max="23" pattern="\d+" inputmode="numeric" v-model="arriveByHours">
        <span>:</span>
        <input type="number" class="arrive-by-minutes" placeholder="Minute" min="0" max="59" pattern="\d+" inputmode="numeric" v-model="arriveByMinutes">
      </div>

      <template v-if="anyBeforeArrivalTime">
          <h1 class="result">The latest U1 you can catch to get to {{ currentDestination }} by {{ timeString({ h: arriveByHours ?? 0, m: arriveByMinutes ?? 0 }) }} is scheduled to leave at <span class="eta">{{ departEarlyEnoughTime }}</span>.</h1>
        </template>
        <template v-else>
          <h1 class="result">There is no scheduled arrival early enough.</h1>
        </template>
    </div>

    <FullSchedule />

    <span class="subtext">This page is designed to work without an internet connection. Your browser should save all the information it needs.</span>
    <h4>Want to improve this site? <a class="gh" href="https://github.com/barnabwhy/swansea-u1-timetable">Make a pull request on GitHub!</a></h4>
  </div>

</template>

<style scoped>
.page-container {
  display: grid;
  grid-template-rows: auto 1fr;
}

.mode-select, .dest-select, .arrive-by {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 1rem;
  justify-content: stretch;
  flex-wrap: wrap;
}
.mode-select > button, .dest-select > button {
  border-radius: 0;
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  flex: 1;
  min-width: 24rem;
}
@media only screen and (max-width: 28rem) {
  .mode-select > button, .dest-select > button {
    min-width: 100%;
    width: 100%;
  }
}

.mode-select > button.selected, .dest-select > button.selected {
  outline: 4px solid white;
}


.eta {
  font-weight: bolder;
  line-height: 1;
}

.arrive-by {
  flex-wrap: nowrap;
  align-items: center;
}

.arrive-by > span {
  font-weight: bold;
  user-select: none;
}

.arrive-by > input {
  background-color: black;
  border-radius: 0;
  color: white;
  border: none;
  padding: 1rem 2rem;
  flex: 1;
}

.result {
  margin-bottom: 0;
  margin-top: 2rem;
}

.subtext {
  color: #cccccc;
  font-size: 0.75rem;
}

.gh {
  color: white;
  font-weight: normal;
}
</style>
