import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Categories from "./Categories";

describe("Categories", () => {
    const ORIGINAL = process.env;

    beforeEach(() => {
        process.env = { ...ORIGINAL, REACT_APP_CATEGORIES: "shapes,planets", REACT_APP_TRANSPORTATION_TYPES: "train" };
    });

    afterAll(() => {
        process.env = ORIGINAL;
    });

    it("renders one tile per configured category", () => {
        render(
            <MemoryRouter>
                <Categories />
            </MemoryRouter>
        );
        expect(screen.getByText("shapes")).toBeInTheDocument();
        expect(screen.getByText("planets")).toBeInTheDocument();
    });
});
