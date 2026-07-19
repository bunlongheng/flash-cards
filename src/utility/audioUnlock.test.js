import { afterEach, describe, expect, it, vi } from "vitest";
import { primeAudioOnFirstGesture } from "./audioUnlock";

describe("primeAudioOnFirstGesture", () => {
    afterEach(() => vi.unstubAllGlobals());

    it("unlocks audio and speech on the first user gesture", () => {
        const play = vi.fn(() => Promise.resolve());
        vi.stubGlobal(
            "Audio",
            class {
                play() {
                    return play();
                }
            },
        );
        const resume = vi.fn();
        window.speechSynthesis = { resume };

        primeAudioOnFirstGesture();
        // nothing should fire before a gesture
        expect(play).not.toHaveBeenCalled();

        window.dispatchEvent(new window.KeyboardEvent("keydown", { key: "a" }));

        expect(play).toHaveBeenCalledTimes(1);
        expect(resume).toHaveBeenCalledTimes(1);
    });
});
