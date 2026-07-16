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

    const panel = (
        <div className="settings-panel">
            {onClose && (
                <button type="button" className="settings-close" aria-label="Close settings" onClick={onClose}>
                    &times;
                </button>
            )}
            <div className="switch-container">
                <label className="switch">
                    <input type="checkbox" checked={bgImage} onChange={handleBgImageChange} />
                    <span className="slider"></span>
                </label>
                <span className="switch-label">Image</span>
            </div>
        </div>
    );

    if (!onClose) return panel;

    return (
        <div className="settings-overlay" role="dialog" aria-modal="true" onClick={onClose}>
            <div onClick={e => e.stopPropagation()}>{panel}</div>
        </div>
    );
};

Settings.propTypes = {
    onClose: PropTypes.func,
};

export default Settings;
