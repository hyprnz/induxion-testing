import {LegacyCalculator} from "./LegacyCalculator";
import {assertThat} from "mismatched";

describe("LegacyCalculator integration", () => {
    describe("calculate", () => {
        it("empty", () => {
            assertThat(new LegacyCalculator().calculate([])).is({startTime: 0, count: 0});
        });
        it("with one date", () => {
            assertThat(new LegacyCalculator().calculate([new Date()])).is({startTime: 0, count: 0});
        });
        it("with many dates", () => {
            assertThat(new LegacyCalculator().calculate([
                new Date(2018, 0, 1),
                new Date(2018, 0, 2),
                new Date(2018, 0, 10),
                new Date(2018, 0, 11),
                new Date(2018, 0, 12),
            ])).is({startTime: 1515322800000, count: 3});
        });
    });
});
