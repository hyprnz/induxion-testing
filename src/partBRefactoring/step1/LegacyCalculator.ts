import {PlannedStart} from "../PlannedStart";

// Legacy Calculator calculates a planned start date from dates.
export class LegacyCalculator {

    // Calculate method returns a planned start date from dates and required days.
    // Last updated by Bob 2014-09-21 to introduce counts for second week logic.
    calculate(dates: Array<Date>, requiredDays = 1): PlannedStart {
        // Sort the dates
        dates.sort((a, b,) => a.getTime() - b.getTime());

        let plannedStart = {startTime: 0, count: 0};

        // check if dates no items then return early
        if (dates.length === 0) {
            return plannedStart;
        }

        const requiredNumberInFirstWeek = requiredDays;

        const startOfFirstWeek = dates[0].getTime();
        // add a week
        const startOfSecondWeek = startOfFirstWeek + (7 * 24 * 60 * 60 * 1000);

        const countsForFirstWeek = dates
            .filter(x => x.getTime() > startOfFirstWeek && x.getTime() < startOfFirstWeek + (7 * 24 * 60 * 60 * 1000)) // add a week
            .length;

        const countsForSecondWeek = dates
            .filter(x => x.getTime() > startOfSecondWeek && x.getTime() < startOfSecondWeek + (7 * 24 * 60 * 60 * 1000)) // add a week
            .length;

        if (countsForSecondWeek > countsForFirstWeek && countsForSecondWeek >= requiredNumberInFirstWeek) {
            plannedStart = {startTime: startOfSecondWeek, count: countsForSecondWeek};
        }

        return plannedStart;
    }
}