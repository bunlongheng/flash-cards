import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { playAudio } from "./audioUtils";

describe("playAudio", () => {
    let plays;

    beforeEach(() => {
        plays = [];
        vi.useFakeTimers();
        vi.stubGlobal(
            "Audio",
            class {
                constructor(src) {
                    this.src = src;
                    this.volume = 1;
                }
                play() {
                    plays.push(this.src);
                    return Promise.resolve();
                }
            },
        );
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.unstubAllGlobals();
    });

    it("returns home after completion, on a 5s delay", () => {
        const goHome = vi.fn();
        playAudio(5, 5, goHome);
        expect(goHome).not.toHaveBeenCalled();
        vi.advanceTimersByTime(5000);
        expect(goHome).toHaveBeenCalledOnce();
    });

    it("plays a milestone sound at 5 without finishing", () => {
        const goHome = vi.fn();
        playAudio(5, 26, goHome);
        expect(plays.some(s => s.includes("/sounds/3.mp3"))).toBe(true);
        vi.advanceTimersByTime(5000);
        expect(goHome).not.toHaveBeenCalled();
    });

    it("stays silent on a non-milestone, non-complete count", () => {
        const goHome = vi.fn();
        playAudio(3, 26, goHome);
        expect(plays).toEqual([]);
        expect(goHome).not.toHaveBeenCalled();
    });
});
