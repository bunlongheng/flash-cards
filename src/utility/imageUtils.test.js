import { describe, expect, it } from "vitest";
import { getImage, getImageWidth, getImageHeight } from "./imageUtils";

describe("imageUtils", () => {
    it("returns a local path for local image types", () => {
        expect(getImage({ name: "Red Circle" }, "shapes")).toBe("/images/shapes/red-circle.png");
    });

    it("returns a Picsum url for non-local types", () => {
        expect(getImage({ name: "Dog" }, "animals")).toBe("https://picsum.photos/seed/Dog/300/300");
    });

    it("sizes local vs remote types", () => {
        expect(getImageWidth("shapes")).toBe("50%");
        expect(getImageWidth("animals")).toBe("100%");
        expect(getImageHeight("shapes")).toBe("auto");
        expect(getImageHeight("animals")).toBe("90%");
    });
});
