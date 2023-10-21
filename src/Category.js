import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Category.css";

const Category = ({ type }) => {
    const [data, setData] = useState([]);

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
        speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));
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
            <div className="thumbnails-container" style={{ display: "flex", flexWrap: "wrap" }}>
                {data.map(item => (
                    <div
                        key={item.id}
                        className="thumbnail"
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
