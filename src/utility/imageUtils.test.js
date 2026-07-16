import { describe, expect, it } from "vitest";
import { getImage, getImageWidth, getImageHeight, toImageSlug } from "./imageUtils";

describe("imageUtils", () => {
    it("returns a local webp path for local image types", () => {
        expect(getImage({ name: "Red Circle" }, "shapes")).toBe("/images/shapes/red-circle.webp");
    });

    it("slugs punctuation and slashes safely", () => {
        expect(toImageSlug("Big / Small")).toBe("big-small");
        expect(toImageSlug("X-Ray Tetra")).toBe("x-ray-tetra");
    });

    it("returns a Picsum url for non-local types", () => {
        expect(getImage({ name: "Happy" }, "unknown-type")).toBe("https://picsum.photos/seed/Happy/300/300");
    });

    it("sizes local vs remote types", () => {
        expect(getImageWidth("shapes")).toBe("50%");
        expect(getImageWidth("animals")).toBe("100%");
        expect(getImageHeight("shapes")).toBe("auto");
        expect(getImageHeight("animals")).toBe("90%");
    });
});
