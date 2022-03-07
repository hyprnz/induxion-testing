import {LegacyCalculator} from "./LegacyCalculator";
import {PlannedStartMaker} from "./PlannedStartMaker";
import {assertThat} from "mismatched";
import {Thespian, TMocked} from "thespian";

describe("LegacyCalculator mock example", () => {
    describe("calculate", () => {
        const date1 = new Date(2018, 0, 1);
        const date2 = new Date(2018, 0, 10);
        const date3 = new Date(2018, 0, 11);
        const dates = [date3, date1, date2];
        let thespian = new Thespian();
        let plannedStartMaker: TMocked<PlannedStartMaker>;
        let legacyCalculator: LegacyCalculator;

        beforeEach(() => {
            thespian = new Thespian();
            plannedStartMaker = thespian.mock<PlannedStartMaker>("plannedStartMaker");
            legacyCalculator = new LegacyCalculator(() => plannedStartMaker.object)
        });

        it("make", () => {
            plannedStartMaker
                .setup(x => x.make())
                .returns(() => ({startTime: 100, count: 200}));

            assertThat(legacyCalculator.calculate(dates)).is({startTime: 100, count: 200});

            thespian.verify();
        });
    });
});
