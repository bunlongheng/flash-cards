import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Settings from "./Settings"; // Import your Settings component

import "./Categories.css";

const Categories = () => {
    const categoriesStr = process.env.REACT_APP_CATEGORIES || "";
    const categories = categoriesStr.split(",");

    const transportationTypesString = process.env.REACT_APP_TRANSPORTATION_TYPES || "";
    const transportationTypesArray = transportationTypesString.split(",");

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
            <div className="three-dots-button" onClick={toggleSettings}>
                &#8942;
            </div>

            <div className="sliding-text">
                <span className="background-text">👋🏽 Hi! Norden!</span>
                &nbsp;----&nbsp;
                <img src={`/images/transportations/${randomItem}.png`} alt={randomItem} height={30} />
            </div>

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

            {/* Settings modal */}
            {isModalVisible && <Settings onClose={toggleSettings} />}
        </div>
    );
};

export default Categories;
