import {oneWeek, withinOneWeekExcludingStart} from "./DateTime";
import {assertThat} from "mismatched";

describe("DateTime", () => {
    const minDate = new Date(2018,3,20);
    const justAfterMinDate = new Date(minDate.getTime() + 1);
    const exactlyOneWeekAfterMinDate = new Date(minDate.getTime() + oneWeek);
    const moreThanOneWeekAfterMinDate = new Date(minDate.getTime() + oneWeek + 1);

    describe("oneWeek", () => {
        it("one week later", () => {
            const date1 = new Date(2018, 1, 1, 13, 1, 1, 1);
            const date2 = new Date(date1.getTime() + oneWeek);
            assertThat(date1.toUTCString()).is("Thu, 01 Feb 2018 00:01:01 GMT");
            assertThat(date2.toUTCString()).is("Thu, 08 Feb 2018 00:01:01 GMT");
        });
    });

    describe("withinOneWeekFromStart", () => {
        it("no dates", () => {
            assertThat(withinOneWeekExcludingStart([], minDate.getTime())).is([]);
        });
        it("same date", () => {
            assertThat(withinOneWeekExcludingStart([minDate], minDate.getTime())).is([]);
        });
        it("just after now", () => {
            assertThat(withinOneWeekExcludingStart([justAfterMinDate], minDate.getTime())).is([justAfterMinDate]);
        });
        it("exactly one week later", () => {
            assertThat(withinOneWeekExcludingStart([exactlyOneWeekAfterMinDate], minDate.getTime())).is([]);
        });
        it("more than one week later", () => {
            assertThat(withinOneWeekExcludingStart([moreThanOneWeekAfterMinDate], minDate.getTime())).is([]);
        });
        it("with many dates", () => {
            assertThat(withinOneWeekExcludingStart([
                minDate, justAfterMinDate, moreThanOneWeekAfterMinDate, exactlyOneWeekAfterMinDate, justAfterMinDate
            ], minDate.getTime())).is([justAfterMinDate, justAfterMinDate]);
        });
    });
});
