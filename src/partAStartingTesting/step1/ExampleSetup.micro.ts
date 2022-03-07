import {assertThat} from "mismatched";
import {areaOfRectangle} from "./ExampleSetup";

describe("ExampleSetup", () => {

    describe("areaOfRectangle", () => {
        it("works with positive integers", () => {
            assertThat(areaOfRectangle(2, 3)).is(6);
        });
    });
});
