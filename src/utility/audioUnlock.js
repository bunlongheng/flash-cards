// Unlock audio + speech on the first user gesture so later programmatic sounds
// (milestone chimes, the completion fanfare) are not muted by browser autoplay policy.
let unlocked = false;

export function primeAudioOnFirstGesture() {
    if (unlocked || typeof window === "undefined") return;

    const unlock = () => {
        if (unlocked) return;
        unlocked = true;
        try {
            const a = new Audio();
            a.muted = true;
            const p = a.play();
            if (p && p.catch) p.catch(() => {});
        } catch {
            /* ignore - best-effort unlock */
        }
        try {
            window.speechSynthesis && window.speechSynthesis.resume();
        } catch {
            /* ignore */
        }
        window.removeEventListener("pointerdown", unlock);
        window.removeEventListener("keydown", unlock);
    };

    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
}
