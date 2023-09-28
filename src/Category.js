import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Category.css";

const Category = ({ type }) => {
    const [data, setData] = useState([]);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const excludedFields = ["id", "name", "color"];

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
        if (!isSpeaking) {
            const utterance = new SpeechSynthesisUtterance(item.name);
            setIsSpeaking(true);

            utterance.onend = () => {
                setIsSpeaking(false);
            };

            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
        }
    };

    const getImage = item => {
        const localImageTypes = ["planets", "shapes", "polygons", "triangles"];

        if (localImageTypes.includes(type)) {
            return `/images/${type}/${item.name.toLowerCase()}.png`;
        }

        return `https://source.unsplash.com/300x300/?${item.name}`;
    };

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "rgba(";
        for (let i = 0; i < 3; i++) {
            const component = Math.floor(Math.random() * 256);
            color += `${component},`;
        }
        color += "0.4)"; // Set opacity to 0.6
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
            <div className="thumbnails-container">
                {data.map(item => (
                    <div key={item.id} className={`thumbnail ${isSpeaking}`} onClick={() => handleClick(item)} style={{ backgroundColor: item.color || getRandomColor() }}>
                        <img src={getImage(item)} alt={item.name} draggable="false" onDragStart={e => e.preventDefault()} onContextMenu={e => e.preventDefault()} onSelect={e => e.preventDefault()} />
                        <div className={`thumbnail-details ${isSpeaking}`}>
                            <h6>{item.name}</h6>
                            {Object.entries(item).map(([key, value]) => {
                                if (!excludedFields.includes(key)) {
                                    return <p key={key}>{/* {key}: {value} */}</p>;
                                }
                                return null;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
