export const CatFamily = "felidae"

export function isACat(pawsCount: number, cute: boolean, purrs: boolean, family?: string): boolean {
    if (family) {
        return family.toLowerCase() === CatFamily;
    }

    const catPawCount = 4;

    return pawsCount === catPawCount && cute && purrs;
}
