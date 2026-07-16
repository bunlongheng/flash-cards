import { afterEach, describe, expect, it, vi } from "vitest";
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

    it("renders a dismissable modal when given onClose", () => {
        const onClose = vi.fn();
        render(<Settings onClose={onClose} />);

        fireEvent.click(screen.getByLabelText(/close settings/i));

        expect(onClose).toHaveBeenCalledOnce();
    });
});
