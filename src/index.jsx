import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App";
import { primeAudioOnFirstGesture } from "./utility/audioUnlock.js";
import "./index.css";

primeAudioOnFirstGesture();

// Registers the service worker so the app (and cached flashcard images) keep
// working with wifi/data off after the first online load.
registerSW({ immediate: true });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
