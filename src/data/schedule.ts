export enum Destination {
    PARK_AND_RIDE = "Park & Ride",
    BAY_CAMPUS = "Bay Campus",
};

export const DESTINATIONS = [Destination.BAY_CAMPUS, Destination.PARK_AND_RIDE];

interface Time {
    h: number;
    m: number;
};

interface ScheduleEntry {
    dest: Destination;
    dep: Time;
    arr: Time;
}

export const schedule: ScheduleEntry[] = [
    // PARK & RIDE -> BAY CAMPUS

    // Early morning
    { dep: { h: 7, m: 40 }, arr: { h: 7, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 7, m: 55 }, arr: { h: 8, m: 2 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 8, m: 10 }, arr: { h: 8, m: 17 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 8, m: 25 }, arr: { h: 8, m: 32 }, dest: Destination.BAY_CAMPUS },

    // Every hour
    { dep: { h: 8, m: 40 }, arr: { h: 8, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 8, m: 55 }, arr: { h: 9, m: 2 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 9, m: 10 }, arr: { h: 9, m: 17 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 9, m: 25 }, arr: { h: 9, m: 32 }, dest: Destination.BAY_CAMPUS },

    { dep: { h: 9, m: 40 }, arr: { h: 9, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 9, m: 55 }, arr: { h: 10, m: 2 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 10, m: 10 }, arr: { h: 10, m: 17 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 10, m: 25 }, arr: { h: 10, m: 32 }, dest: Destination.BAY_CAMPUS },

    { dep: { h: 10, m: 40 }, arr: { h: 10, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 10, m: 55 }, arr: { h: 11, m: 2 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 11, m: 10 }, arr: { h: 11, m: 17 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 11, m: 25 }, arr: { h: 11, m: 32 }, dest: Destination.BAY_CAMPUS },

    { dep: { h: 11, m: 40 }, arr: { h: 11, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 11, m: 55 }, arr: { h: 12, m: 2 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 12, m: 10 }, arr: { h: 12, m: 17 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 12, m: 25 }, arr: { h: 12, m: 32 }, dest: Destination.BAY_CAMPUS },

    // Every 30 minutes later in the day
    { dep: { h: 11, m: 40 }, arr: { h: 11, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 12, m: 10 }, arr: { h: 12, m: 17 }, dest: Destination.BAY_CAMPUS },

    { dep: { h: 12, m: 40 }, arr: { h: 12, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 13, m: 10 }, arr: { h: 13, m: 17 }, dest: Destination.BAY_CAMPUS },

    { dep: { h: 13, m: 40 }, arr: { h: 13, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 14, m: 10 }, arr: { h: 14, m: 17 }, dest: Destination.BAY_CAMPUS },

    { dep: { h: 14, m: 40 }, arr: { h: 14, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 15, m: 10 }, arr: { h: 15, m: 17 }, dest: Destination.BAY_CAMPUS },

    // Every 15 minutes again at the end of the day
    { dep: { h: 15, m: 40 }, arr: { h: 15, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 15, m: 55 }, arr: { h: 16, m: 2 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 16, m: 10 }, arr: { h: 16, m: 17 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 16, m: 25 }, arr: { h: 16, m: 32 }, dest: Destination.BAY_CAMPUS },

    { dep: { h: 16, m: 40 }, arr: { h: 16, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 16, m: 55 }, arr: { h: 17, m: 2 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 17, m: 10 }, arr: { h: 17, m: 17 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 17, m: 25 }, arr: { h: 17, m: 32 }, dest: Destination.BAY_CAMPUS },

    { dep: { h: 17, m: 40 }, arr: { h: 17, m: 47 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 17, m: 55 }, arr: { h: 18, m: 2 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 18, m: 10 }, arr: { h: 18, m: 17 }, dest: Destination.BAY_CAMPUS },
    { dep: { h: 18, m: 25 }, arr: { h: 18, m: 32 }, dest: Destination.BAY_CAMPUS },

    // Last of the day
    { dep: { h: 18, m: 40 }, arr: { h: 18, m: 47 }, dest: Destination.BAY_CAMPUS },


    // BAY CAMPUS -> PARK & RIDE

    // Early morning
    { dep: { h: 7, m: 48 }, arr: { h: 7, m: 54 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 8, m: 3 }, arr: { h: 8, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 8, m: 18 }, arr: { h: 8, m: 24 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 8, m: 33 }, arr: { h: 8, m: 39 }, dest: Destination.PARK_AND_RIDE },

    // Every hour
    { dep: { h: 8, m: 48 }, arr: { h: 8, m: 54 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 9, m: 3 }, arr: { h: 9, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 9, m: 18 }, arr: { h: 9, m: 24 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 9, m: 33 }, arr: { h: 9, m: 39 }, dest: Destination.PARK_AND_RIDE },

    { dep: { h: 9, m: 48 }, arr: { h: 9, m: 54 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 10, m: 3 }, arr: { h: 10, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 10, m: 18 }, arr: { h: 10, m: 24 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 10, m: 33 }, arr: { h: 10, m: 39 }, dest: Destination.PARK_AND_RIDE },

    { dep: { h: 10, m: 48 }, arr: { h: 10, m: 54 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 11, m: 3 }, arr: { h: 11, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 11, m: 18 }, arr: { h: 11, m: 24 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 11, m: 33 }, arr: { h: 11, m: 39 }, dest: Destination.PARK_AND_RIDE },

    { dep: { h: 11, m: 48 }, arr: { h: 11, m: 54 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 12, m: 3 }, arr: { h: 12, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 12, m: 18 }, arr: { h: 12, m: 24 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 12, m: 33 }, arr: { h: 12, m: 39 }, dest: Destination.PARK_AND_RIDE },

    // Every 30 minutes later in the day
    { dep: { h: 12, m: 3 }, arr: { h: 12, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 12, m: 33 }, arr: { h: 12, m: 39 }, dest: Destination.PARK_AND_RIDE },

    { dep: { h: 13, m: 3 }, arr: { h: 13, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 13, m: 33 }, arr: { h: 13, m: 39 }, dest: Destination.PARK_AND_RIDE },

    { dep: { h: 14, m: 3 }, arr: { h: 14, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 14, m: 33 }, arr: { h: 14, m: 39 }, dest: Destination.PARK_AND_RIDE },

    { dep: { h: 15, m: 3 }, arr: { h: 15, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 15, m: 33 }, arr: { h: 15, m: 39 }, dest: Destination.PARK_AND_RIDE },

    // Every 15 minutes again at the end of the day
    { dep: { h: 15, m: 48 }, arr: { h: 15, m: 54 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 16, m: 3 }, arr: { h: 16, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 16, m: 18 }, arr: { h: 16, m: 24 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 16, m: 33 }, arr: { h: 16, m: 39 }, dest: Destination.PARK_AND_RIDE },

    { dep: { h: 16, m: 48 }, arr: { h: 16, m: 54 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 17, m: 3 }, arr: { h: 17, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 17, m: 18 }, arr: { h: 17, m: 24 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 17, m: 33 }, arr: { h: 17, m: 39 }, dest: Destination.PARK_AND_RIDE },

    { dep: { h: 17, m: 48 }, arr: { h: 17, m: 54 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 18, m: 3 }, arr: { h: 18, m: 9 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 18, m: 18 }, arr: { h: 18, m: 24 }, dest: Destination.PARK_AND_RIDE },
    { dep: { h: 18, m: 33 }, arr: { h: 18, m: 39 }, dest: Destination.PARK_AND_RIDE },

    // Last of the day
    { dep: { h: 18, m: 48 }, arr: { h: 18, m: 54 }, dest: Destination.PARK_AND_RIDE },
];

export function getNextDeparture(dest: Destination, now: Date): ScheduleEntry | null {
    const nowTime = { h: now.getHours(), m: now.getMinutes() };

    // Find the next departure
    for (let i = 0; i < schedule.length; i++) {
        const entry = schedule[i];

        if (entry.dest !== dest)
            continue;

        if (entry.dep.h > nowTime.h || (entry.dep.h === nowTime.h && entry.dep.m >= nowTime.m)) {
            return entry;
        }
    }

    // If we get here, there are no more departures today
    return null;
}

export function timeUntilDeparture(entry: ScheduleEntry): string {
    let totalMinutes = (entry.dep.h - new Date().getHours()) * 60 + (entry.dep.m - new Date().getMinutes());

    if (totalMinutes <= 0) {
        return "now";
    }

    if (totalMinutes < 60) {
        return `in ${totalMinutes} minute${totalMinutes != 1 ? 's' : ''}`;
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `in ${hours} hour${hours != 1 ? 's' : ''} and ${minutes} minute${minutes != 1 ? 's' : ''}`;
}

export function oppositeOf(dest: Destination): Destination {
    if (dest === Destination.PARK_AND_RIDE) {
        return Destination.BAY_CAMPUS;
    } else {
        return Destination.PARK_AND_RIDE;
    }
}

export function getScheduleFor(dest: Destination): ScheduleEntry[] {
    return schedule.filter(entry => entry.dest === dest);
}

export function timeString(time: Time): string {
    return `${time.h}:${time.m < 10 ? "0" : ""}${time.m}`;
}


export function getLastDepartureBefore(dest: Destination, arriveBy: Time): ScheduleEntry | null {
    // Find the last departure
    for (let i = schedule.length - 1; i >= 0; i--) {
        const entry = schedule[i];

        if (entry.dest !== dest)
            continue;

        if (entry.arr.h < arriveBy.h || (entry.arr.h === arriveBy.h && entry.arr.m <= arriveBy.m)) {
            return entry;
        }
    }

    // If we get here, there are no departures before the given time
    return null;
}