import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Settings.css";

// Used two ways: as the standalone /settings page (no onClose) and as a dismissable
// modal from the home screen (onClose provided -> render an overlay + close button).
const Settings = ({ onClose }) => {
    const [bgImage, setBgImage] = useState(() => {
        const storedValue = localStorage.getItem("bgImage");
        return storedValue === "true";
    });

    const handleBgImageChange = () => {
        setBgImage(prevBgImage => !prevBgImage);
    };

    useEffect(() => {
        localStorage.setItem("bgImage", bgImage.toString());
    }, [bgImage]);

    // Escape closes the modal (only when used as one).
    useEffect(() => {
        if (!onClose) return undefined;
        const onKey = e => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    const panel = (
        <div className="settings-panel">
            {onClose && (
                <button type="button" className="settings-close" aria-label="Close settings" onClick={onClose}>
                    &times;
                </button>
            )}
            {/* The label wraps both the control and its text, so it has an accessible name. */}
            <label className="switch-container">
                <span className="switch">
                    <input type="checkbox" checked={bgImage} onChange={handleBgImageChange} />
                    <span className="slider"></span>
                </span>
                <span className="switch-label">Image</span>
            </label>
        </div>
    );

    if (!onClose) return panel;

    return (
        <div className="settings-overlay" role="dialog" aria-modal="true" aria-label="Settings">
            {/* Real <button> backdrop: click or keyboard closes, with no a11y gaps. */}
            <button type="button" className="settings-backdrop" aria-label="Close settings" onClick={onClose} />
            {panel}
        </div>
    );
};

Settings.propTypes = {
    onClose: PropTypes.func,
};

export default Settings;
