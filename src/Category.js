import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Category.css";

const Category = ({ type }) => {
    const [data, setData] = useState([]);
    const [isThumbnailsDisabled, setIsThumbnailsDisabled] = useState(false); // Add state variable

    useEffect(() => {
        const jsonData = require(`./data/${type}.json`);
        setData(jsonData);
    }, [type]);

    const getPageName = type => {
        if (type && type.includes("-")) {
            return type
                .split("-")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        } else if (type) {
            return type.charAt(0).toUpperCase() + type.slice(1);
        }
    };

    const handleClick = item => {
        const thumbnailId = item.name.replace(/\s+/g, "-").toLowerCase();
        // console.log(`Clicked thumbnailId: ${thumbnailId}`);

        const clickedThumbnail = document.getElementById(`${thumbnailId}`);
        if (clickedThumbnail) {
            const classList = Array.from(clickedThumbnail.classList);
            console.log(`Classes of clicked element: ${classList.join(", ")}`);

            if (!clickedThumbnail.classList.contains("disabled")) {
                speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));
                clickedThumbnail.classList.add("disabled");
            }
        }
    };

    const getColor = (item, opacity = 0.6) => {
        if (item.color) {
            const hexColor = item.color;
            const red = parseInt(hexColor.slice(1, 3), 16);
            const green = parseInt(hexColor.slice(3, 5), 16);
            const blue = parseInt(hexColor.slice(5, 7), 16);
            return `rgba(${red}, ${green}, ${blue}, ${(opacity = 0.6)})`;
        }

        let color = "rgba(";
        for (let i = 0; i < 3; i++) {
            const component = Math.floor(Math.random() * 256);
            color += `${component},`;
        }
        color += `${opacity})`;
        return color;
    };

    return (
        <div className="app" style={{ overflowX: "hidden" }}>
            <Link to="/" className="home-link fixed-top">
                Go Home
            </Link>

            <h1 className="text-center mb-4" style={{ padding: "50px", margin: "50px" }}>
                {getPageName(type)}
            </h1>
            <div className={`thumbnails-container`}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        id={`${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                        className={`thumbnail`}
                        onClick={() => handleClick(item)}
                        style={{
                            backgroundColor: getColor(item),
                        }}
                    >
                        <div className="name-initial">{item.name.charAt(0)}</div>
                        <div className={`thumbnail-details`}>
                            <h6>{item.name}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
