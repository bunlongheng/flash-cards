import { getCategories, getTransportationTypes } from "./config";

describe("config", () => {
    const ORIGINAL = process.env;

    beforeEach(() => {
        process.env = { ...ORIGINAL };
    });

    afterAll(() => {
        process.env = ORIGINAL;
    });

    it("parses a comma list, trimming and dropping blanks", () => {
        process.env.REACT_APP_CATEGORIES = " shapes, planets ,,animals , ";
        expect(getCategories()).toEqual(["shapes", "planets", "animals"]);
    });

    it("returns an empty array when the var is unset", () => {
        delete process.env.REACT_APP_TRANSPORTATION_TYPES;
        expect(getTransportationTypes()).toEqual([]);
    });
});
