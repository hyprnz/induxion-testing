import {assertThat} from "mismatched";
import {isACat} from "./Cat";

describe("Cat - Example tests", () => {

    describe("isACat", () => {
        const catFamily = "Felidae"
        const catPawsCount = 4;
        it("fails when the family is wrong", () => {
            const horseFamily = "Equidae"
            assertThat(isACat(catPawsCount, true, true, horseFamily)).is(false);
        });
        it("succeeds when the family is right, when everything else is wrong", () => {
            assertThat(isACat(8, false, false, catFamily)).is(true);
        });
        it("succeeds when the family is right, regardless of casing", () => {
            assertThat(isACat(8, false, false, "fEliDaE")).is(true);
        });
        it("succeeds when no family is provided, when everything else is right", () => {
            assertThat(isACat(catPawsCount, true, true)).is(true);
        });
        it("fails when paws count is wrong", () => {
            assertThat(isACat(8, true, true)).is(false);
        });
        it("fails when cuteness is wrong", () => {
            assertThat(isACat(catPawsCount, false, true)).is(false);
        });
        it("fails when purring is wrong", () => {
            assertThat(isACat(catPawsCount, true, false)).is(false);
        });
    });
});
