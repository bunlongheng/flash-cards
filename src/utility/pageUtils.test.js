import { getPageName } from "./pageUtils";

describe("getPageName", () => {
    it("title-cases hyphenated slugs", () => {
        expect(getPageName("gogo-dinos")).toBe("Gogo Dinos");
    });

    it("capitalizes a single word", () => {
        expect(getPageName("animals")).toBe("Animals");
    });

    it("returns undefined for empty input", () => {
        expect(getPageName("")).toBeUndefined();
    });
});
