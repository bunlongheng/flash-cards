import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Thumbnail from "./Thumbnail";

const item = { name: "Circle", color: "hsl(0, 100%, 50%)" };

describe("Thumbnail", () => {
    it("renders the item name and calls onSelect when clicked", () => {
        const onSelect = vi.fn();
        render(<Thumbnail item={item} type="shapes" bgImage={false} done={false} onSelect={onSelect} />);

        fireEvent.click(screen.getByRole("button"));

        expect(screen.getByText("Circle")).toBeInTheDocument();
        expect(onSelect).toHaveBeenCalledWith(item);
    });

    it("marks the tile disabled when done", () => {
        render(<Thumbnail item={item} type="shapes" bgImage={false} done={true} onSelect={() => {}} />);
        expect(screen.getByRole("button")).toHaveClass("disabled");
    });
});
