import { getHueColor } from "./colorUtils";

describe("getHueColor", () => {
    it("spreads hues evenly across the total", () => {
        expect(getHueColor(0, 4)).toBe("hsl(0, 100%, 50%)");
        expect(getHueColor(1, 4)).toBe("hsl(90, 100%, 50%)");
        expect(getHueColor(2, 4)).toBe("hsl(180, 100%, 50%)");
    });
});
