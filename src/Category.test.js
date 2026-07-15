import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Category from "./Category";

const renderCategory = type =>
    render(
        <MemoryRouter>
            <Category type={type} />
        </MemoryRouter>
    );

describe("Category", () => {
    it("renders a card per data item with a starting progress of 0", () => {
        const { container } = renderCategory("shapes");
        expect(screen.getByText("Circle")).toBeInTheDocument();
        expect(container.querySelector(".bottom-right").textContent).toMatch(/^0\/23$/);
    });

    it("marks a card done and advances progress on click", () => {
        const { container } = renderCategory("shapes");
        const firstTile = container.querySelector(".thumbnail");

        fireEvent.click(firstTile);

        expect(firstTile).toHaveClass("disabled");
        expect(container.querySelector(".bottom-right").textContent).toMatch(/^1\/23$/);
    });

    it("shows an error state for an unknown category", () => {
        renderCategory("does-not-exist");
        expect(screen.getByText(/could not find that category/i)).toBeInTheDocument();
    });
});
