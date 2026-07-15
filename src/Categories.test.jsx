import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Categories from "./Categories";

describe("Categories", () => {
    beforeEach(() => {
        vi.stubEnv("REACT_APP_CATEGORIES", "shapes,planets");
        vi.stubEnv("REACT_APP_TRANSPORTATION_TYPES", "train");
    });

    afterEach(() => {
        vi.unstubAllEnvs();
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
