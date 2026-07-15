import { afterEach, describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Settings from "./Settings";

describe("Settings", () => {
    afterEach(() => {
        localStorage.clear();
    });

    it("toggles the bgImage flag in localStorage", () => {
        render(<Settings />);
        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(localStorage.getItem("bgImage")).toBe("true");
    });
});
