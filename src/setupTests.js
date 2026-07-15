// jest-dom adds matchers like toBeInTheDocument / toHaveClass.
import "@testing-library/jest-dom";

// jsdom ships no Web Speech API and no real media playback; stub them so
// components that speak or play sounds can render under test.
global.SpeechSynthesisUtterance = class {};
global.speechSynthesis = { speak: () => {} };
window.HTMLMediaElement.prototype.play = () => Promise.resolve();
