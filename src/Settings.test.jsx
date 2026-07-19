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

    it("renders a dismissable modal (close button and Escape) when given onClose", () => {
        const onClose = vi.fn();
        render(<Settings onClose={onClose} />);

        expect(screen.getByRole("dialog")).toBeInTheDocument();
        // the close button (the visible x) is the last "close settings" control
        const closers = screen.getAllByLabelText(/close settings/i);
        fireEvent.click(closers[closers.length - 1]);
        expect(onClose).toHaveBeenCalledTimes(1);

        // Escape also closes
        fireEvent.keyDown(window, { key: "Escape" });
        expect(onClose).toHaveBeenCalledTimes(2);
    });
});
