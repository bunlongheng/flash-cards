import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHueColor } from "./utility/colorUtils.js";
import { playAudio } from "./utility/audioUtils.js";
import { getPageName, goHome } from "./utility/pageUtils.js";
//import { getImage } from "./utility/imageUtils.js";

import "./Category.css";

const Category = ({ type }) => {
    const [data, setData] = useState([]);
    const [clickedItemName, setClickedItemName] = useState("");
    const [clickedItems, setClickedItems] = useState([]);
    const [slideText, setSlideText] = useState("");
    const [clickCounts, setClickCounts] = useState({});

    useEffect(() => {
        const jsonData = require(`./data/${type}.json`);

        const updatedData = jsonData.map((item, index) => {
            if (!item.color) {
                item.color = getHueColor(index, jsonData.length);
            }
            return item;
        });

        setData(updatedData);
    }, [type]);

    useEffect(() => {
        playAudio(clickedItems.length, data.length, goHome);
    }, [clickedItems.length, data.length]);

    const handleClick = item => {
        setSlideText("");
        const thumbnailId = item.name.replace(/\s+/g, "-").toLowerCase();
        const clickedThumbnail = document.getElementById(`${thumbnailId}`);

        setClickedItemName(item.name);

        // Update clickCounts for this item
        setClickCounts(prevClickCounts => ({
            ...prevClickCounts,
            [item.id]: (prevClickCounts[item.id] || 0) + 1,
        }));

        if (clickCounts > 4) {
            window.open(`https://www.google.com/images?q=${encodeURIComponent(clickedItemName)}`, "_blank");
            setClickCounts(prev => ({ ...prev, [item]: 0 }));
        }

        if (!clickedThumbnail.classList.contains("disabled")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));
            clickedThumbnail.classList.add("disabled");

            setClickedItems(prev => [...prev, thumbnailId]);
            console.log(clickedItems);

            switch (clickedItems.length + 1) {
                case 1:
                    setSlideText("🎈");
                    break;
                case 5:
                    setSlideText("🪄");
                    break;
                case 10:
                    setSlideText("🎁");
                    break;
                case 15:
                    setSlideText("✨");
                    break;
                case 20:
                    setSlideText("⭐️");
                    break;
                case 25:
                    setSlideText("🎖️");
                    break;
                default:
                    setSlideText("");
                    break;
            }
        }
    };

    return (
        <div className="category-page" style={{ overflowX: "hidden" }}>
            <nav className="breadcrumbs">
                <Link to="/" className="home-link">
                    Go Home
                </Link>
                <span onClick={() => goHome()} className="breadcrumb-divider">
                    {" "}
                    &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp; &nbsp;
                </span>

                <span onClick={() => goHome()} className="current-page">
                    <img src={`/images/types/${type}.png`} alt="Icon" className="icon" width="20" /> {getPageName(type)}
                </span>

                <span className="float-right selected">
                    <a href={`https://www.google.com/images?q=${encodeURIComponent(clickedItemName)}`} target="_blank" rel="noopener noreferrer">
                        "{clickedItemName}"
                    </a>
                </span>
            </nav>

            <div className={`thumbnails-container`}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        id={`${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                        className="thumbnail"
                        onClick={() => handleClick(item)}
                        style={{
                            backgroundColor: item.color,
                            //backgroundImage: `url(${getImage(item)})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="name-initial">{item.name.charAt(0)}</div>
                        <div className={`thumbnail-details`}>
                            <h6>{item.name}</h6>
                        </div>
                    </div>
                ))}
            </div>

            {slideText && (
                <div className="slide-up">
                    <p>{slideText}</p>
                </div>
            )}

            {data.length === clickedItems.length && (
                <div className="achievement-container">
                    <img src="/images/1.gif" alt="achievement" className="achievement" />
                </div>
            )}
        </div>
    );
};

export default Category;
