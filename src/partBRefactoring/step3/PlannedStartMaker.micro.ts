import {oneWeek} from "./DateTime";
import {PlannedStartMaker} from "./PlannedStartMaker";
import {assertThat} from "mismatched";

describe("PlannedStartMaker", () => {
    const minDate = new Date(2018, 5, 11);
    const justAfterNow = new Date(minDate.getTime() + 1);
    const moreThanOneWeekAfter = new Date(minDate.getTime() + oneWeek + 1);

    describe("make", () => {
        it("empty", () => {
            const plannedStartMaker = new PlannedStartMaker([], 0);

            assertThat(plannedStartMaker.make()).is({startTime: 0, count: 0});
        });
        it("with one valid date in second week", () => {
            const plannedStartMaker = new PlannedStartMaker([minDate, moreThanOneWeekAfter], 0);

            assertThat(plannedStartMaker.make()).is({startTime: minDate.getTime() + oneWeek, count: 1});
        });
    });

    describe("count", () => {
        it("empty", () => {
            const plannedStartMaker = new PlannedStartMaker([], 1);

            assertThat(plannedStartMaker.count()).is(0);
        });
        it("with one valid date in second week", () => {
            const plannedStartMaker = new PlannedStartMaker([minDate, moreThanOneWeekAfter], 0);

            assertThat(plannedStartMaker.count(0)).is(0);
            assertThat(plannedStartMaker.count(1)).is(1);
        });
        it("with one valid date in first and second week", () => {
            const plannedStartMaker = new PlannedStartMaker([minDate, justAfterNow, moreThanOneWeekAfter], 0);

            assertThat(plannedStartMaker.count(0)).is(1);
            assertThat(plannedStartMaker.count(1)).is(1);
        });
    });

});
