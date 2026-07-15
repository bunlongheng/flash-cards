import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Settings from "./Settings"; // Import your Settings component
import { getCategories, getTransportationTypes } from "./utility/config.js";

import "./Categories.css";

const Categories = () => {
    const categories = getCategories();
    const transportationTypesArray = getTransportationTypes();

    const greeting = process.env.REACT_APP_GREETING || "Hi!";

    const [randomItem, setRandomItem] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleSettings = () => {
        setIsModalVisible(!isModalVisible);
    };

    const getRandomItem = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * transportationTypesArray.length);
        return transportationTypesArray[randomIndex];
    }, [transportationTypesArray]);

    useEffect(() => {
        const newItem = getRandomItem();
        setRandomItem(newItem);
    }, [getRandomItem, transportationTypesArray]);

    const speak = data => {
        speechSynthesis.speak(new SpeechSynthesisUtterance(data));
    };

    return (
        <div className="categories-page bg-dark text-light">
            <div
                className="sliding-text"
                onClick={toggleSettings}
                onKeyDown={e => (e.key === "Enter" || e.key === " ") && toggleSettings()}
                role="button"
                tabIndex={0}
            >
                <span className="background-text">👋🏽 {greeting}</span>
                &nbsp;----&nbsp;
                <img src={`/images/transportations/${randomItem}.png`} alt={randomItem} height={30} />
            </div>

            {isModalVisible && <Settings onClose={toggleSettings} />}

            <div className="container">
                <div className="d-flex flex-wrap justify-content-center mt-4">
                    {categories.map((category, index) => (
                        <Link key={index} to={`/${category}`} className="link-style text-decoration-none text-light m-2" onClick={() => speak(category)}>
                            <div className="thumbnail-style border border-secondary rounded p-3">
                                <img src={`${process.env.PUBLIC_URL}/images/types/${category}.png`} alt={category} className="image-style" />
                            </div>
                            <div className="c-name mt-2">{category}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
