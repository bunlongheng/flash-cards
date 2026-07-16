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
    it("renders a card per data item with a starting progress of 0", async () => {
        const { container } = renderCategory("shapes");
        expect(await screen.findByText("Circle")).toBeInTheDocument();
        expect(container.querySelector(".bottom-right").textContent).toMatch(/^0\/23$/);
    });

    it("marks a card done and advances progress on click", async () => {
        const { container } = renderCategory("shapes");
        await screen.findByText("Circle");
        const firstTile = container.querySelector(".thumbnail");

        fireEvent.click(firstTile);

        expect(firstTile).toHaveClass("disabled");
        expect(container.querySelector(".bottom-right").textContent).toMatch(/^1\/23$/);
    });

    it("selects the matching card via a letter keypress", async () => {
        const { container } = renderCategory("seasons");
        await screen.findByText("Autumn");

        fireEvent.keyDown(window, { key: "a" });

        const autumn = container.querySelector("#autumn");
        expect(autumn).toHaveClass("disabled");
        expect(container.querySelector(".bottom-right").textContent).toMatch(/^1\/4$/);
    });

    it("celebrates when every card is cleared", async () => {
        const { container } = renderCategory("seasons");
        await screen.findByText("Autumn");

        container.querySelectorAll(".thumbnail").forEach(tile => fireEvent.click(tile));

        expect(container.querySelector(".bottom-right").textContent).toMatch(/^4\/4$/);
        expect(screen.getByAltText("achievement")).toBeInTheDocument();
    });

    it("toggles the background-image mode after three taps on the title", async () => {
        localStorage.setItem("bgImage", "false");
        const { container } = renderCategory("seasons");
        await screen.findByText("Autumn");

        const title = container.querySelector(".current-page");
        fireEvent.click(title);
        fireEvent.click(title);
        fireEvent.click(title);

        expect(localStorage.getItem("bgImage")).toBe("true");
    });

    it("shows an error state for an unknown category", async () => {
        renderCategory("does-not-exist");
        expect(await screen.findByText(/could not find that category/i)).toBeInTheDocument();
    });
});
