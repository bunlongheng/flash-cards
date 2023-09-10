import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MainPage.css";

const MainPage = ({ type }) => {
    const [data, setData] = useState([]);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const excludedFields = ["id", "name", "color"];

    const types = process.env.REACT_APP_TYPES.split(",");

    useEffect(() => {
        const jsonData = require(`./data/${types[currentIndex]}.json`);
        setData(jsonData);
    }, [currentIndex]);

    const getPageName = () => {
        return types[currentIndex].charAt(0).toUpperCase() + types[currentIndex].slice(1);
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

        if (localImageTypes.includes(types[currentIndex])) {
            return `/images/${item.name.toLowerCase()}.png`;
        }

        return `https://source.unsplash.com/300x300/?${item.name}`;
    };

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + types.length) % types.length);
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % types.length);
    };

    const prevType = types[(currentIndex - 1 + types.length) % types.length];
    const nextType = types[(currentIndex + 1) % types.length];

    return (
        <div className="app" style={{ overflowX: "hidden" }}>
            <div className="navigation-buttons">
                <Link to="/" className="home-link">
                    Home
                </Link>
                <Link onClick={handlePrevClick}>Previous</Link>
                <Link onClick={handleNextClick}>Next</Link>
            </div>

            <h1 className="text-center mb-4" style={{ padding: "50px", margin: "50px" }}>
                {getPageName()}
            </h1>
            <div className="thumbnails-container">
                {data.map(item => (
                    <div key={item.id} className={`thumbnail ${isSpeaking}`} onClick={() => handleClick(item)}>
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

export default MainPage;
