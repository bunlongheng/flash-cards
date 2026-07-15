import React, { useState, useEffect } from "react";
import "./Settings.css";

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
            <div className="switch-container">
                <label className="switch">
                    <input type="checkbox" checked={bgImage} onChange={handleBgImageChange} />
                    <span className="slider"></span>
                </label>
                <span className="switch-label">Image</span>
            </div>
        </div>
    );
};

export default Settings;
