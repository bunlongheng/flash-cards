import React, { useState, useEffect } from "react";
import "./Settings.css"; // Import a CSS file for styling

const Settings = () => {
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

    return (
        <div>
            <h1>Settings</h1>
            <div className="switch-container">
                <label className="switch">
                    <input type="checkbox" checked={bgImage} onChange={handleBgImageChange} />
                    <span className="slider"></span>
                </label>
                <span className="switch-label">Load Background Image</span>
            </div>
        </div>
    );
};

export default Settings;
