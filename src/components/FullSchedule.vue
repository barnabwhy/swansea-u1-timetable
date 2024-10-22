<script setup lang="ts">

import { Destination, getScheduleFor, schedule, timeString } from '@/data/schedule';

</script>

<template>
    <div class="full-schedule">
        <h1>Full Schedule</h1>
        <table>
            <thead>
                <tr>
                    <th colspan="3"><h2>{{ Destination.PARK_AND_RIDE }} → {{ Destination.BAY_CAMPUS }}</h2></th>
                </tr>
                <tr>
                    <th>Time</th>
                    <th>Arrival</th>
                    <th>Destination</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in getScheduleFor(Destination.BAY_CAMPUS)">
                    <td>{{ timeString(entry.dep) }}</td>
                    <td>{{ timeString(entry.arr) }}</td>
                    <td>{{ entry.dest }}</td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th colspan="3"><h2>{{ Destination.BAY_CAMPUS }} → {{ Destination.PARK_AND_RIDE }}</h2></th>
                </tr>
                <tr>
                    <th>Time</th>
                    <th>Arrival</th>
                    <th>Destination</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in getScheduleFor(Destination.PARK_AND_RIDE)">
                    <td>{{ timeString(entry.dep) }}</td>
                    <td>{{ timeString(entry.arr) }}</td>
                    <td>{{ entry.dest }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.full-schedule {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    margin-top: 8rem;
    border-top: 4px solid white;
}

h1 {
    width: 100%;
    text-align: center;
    margin-top: 4rem;
}

h2 {
    margin: 0;
}

table {
    margin-bottom: 4rem;
    flex: 1;
}

th,
td {
    padding: 0.25rem 0.75rem;
    text-align: left;
}
td {
    white-space: nowrap;
}
</style>