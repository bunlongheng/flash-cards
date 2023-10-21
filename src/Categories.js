import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
    const appTypesString = process.env.REACT_APP_TYPES || "";
    const appTypesArray = appTypesString.split(",");

    const transportationTypesString = process.env.REACT_APP_TRANSPORTATION_TYPES || "";
    const transportationTypesArray = transportationTypesString.split(",");

    const [randomItem, setRandomItem] = useState("");

    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * transportationTypesArray.length);
        return transportationTypesArray[randomIndex];
    };

    useEffect(() => {
        console.log(transportationTypesArray);
        const newItem = getRandomItem();
        setRandomItem(newItem);
    }, [getRandomItem, transportationTypesArray]);

    return (
        <div className="categories-page bg-dark text-light">
            <div className="sliding-text">
                <span className="background-text">👋🏽 Hi! Norden!</span>
                &nbsp;----&nbsp;
                <img src={`/images/transportations/${randomItem}.png`} alt={randomItem} height={30} />
            </div>

            <div className="container">
                <div className="d-flex flex-wrap justify-content-center mt-4">
                    {appTypesArray.map((data, index) => (
                        <Link key={index} to={`/${data}`} className="link-style text-decoration-none text-light m-2">
                            <div className="thumbnail-style border border-secondary rounded p-3">
                                <img src={`${process.env.PUBLIC_URL}/images/types/${data}.png`} alt={data} className="image-style" />
                            </div>
                            <div className="mt-2">{data}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
