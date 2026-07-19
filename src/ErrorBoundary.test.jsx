import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

const Boom = () => {
    throw new Error("boom");
};

describe("ErrorBoundary", () => {
    it("renders its children when nothing throws", () => {
        render(
            <ErrorBoundary>
                <div>safe content</div>
            </ErrorBoundary>,
        );
        expect(screen.getByText("safe content")).toBeInTheDocument();
    });

    it("shows a friendly fallback with a way home when a child throws", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        render(
            <ErrorBoundary>
                <Boom />
            </ErrorBoundary>,
        );
        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /go home/i })).toHaveAttribute("href", "/");
        spy.mockRestore();
    });
});
