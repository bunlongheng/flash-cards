import { afterEach, describe, expect, it, vi } from "vitest";
import { getCategories, getTransportationTypes } from "./config";

afterEach(() => {
    vi.unstubAllEnvs();
});

describe("config", () => {
    it("parses a comma list, trimming and dropping blanks", () => {
        vi.stubEnv("REACT_APP_CATEGORIES", " shapes, planets ,,animals , ");
        expect(getCategories()).toEqual(["shapes", "planets", "animals"]);
    });

    it("returns an empty array when the var is unset", () => {
        vi.stubEnv("REACT_APP_TRANSPORTATION_TYPES", "");
        expect(getTransportationTypes()).toEqual([]);
    });
});
