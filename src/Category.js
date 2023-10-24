import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getColor } from "./utility/getColor.js";
import { playAudioBasedOnMilestone } from "./utility/playAudioBasedOnMilestone.js";

import "./Category.css";

const Category = ({ type }) => {
    const [data, setData] = useState([]);
    const [clickedItemName, setClickedItemName] = useState("");
    const [clickedItems, setClickedItems] = useState([]);
    const [slideText, setSlideText] = useState("");
    const [clickCounts, setClickCounts] = useState({});

    useEffect(() => {
        const jsonData = require(`./data/${type}.json`);
        setData(jsonData);
    }, [type]);

    useEffect(() => {
        if (clickedItems.length > 0 && data.length === clickedItems.length) {
            const audio2 = new Audio("/sounds/crowd2.mp3");
            audio2.onloadeddata = () => {
                audio2.play();
            };

            const audio = new Audio("/sounds/done.mp3");
            audio.onloadeddata = () => {
                audio.play();
            };

            setTimeout(goHome, 5000);
        }
    }, [clickedItems.length, data.length]);

    useEffect(() => {
        playAudioBasedOnMilestone(clickedItems.length); // Call the function here
    }, [clickedItems.length]);

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
        setSlideText("");
        const thumbnailId = item.name.replace(/\s+/g, "-").toLowerCase();
        const clickedThumbnail = document.getElementById(`${thumbnailId}`);

        setClickedItemName(item.name);

        if (!clickedThumbnail.classList.contains("disabled")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));
            clickedThumbnail.classList.add("disabled");

            setClickedItems(prev => [...prev, thumbnailId]);
            console.log(clickedItems);

            // Update clickCounts for this item
            setClickCounts(prevClickCounts => ({
                ...prevClickCounts,
                [item.id]: (prevClickCounts[item.id] || 0) + 1,
            }));

            console.log(clickCounts);

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

        // if ((clickCounts[item.id] || 0) === 5) {
        //     window.open(`https://www.google.com/images?q=${encodeURIComponent(item.name)}`, "_blank");
        //     setClickCounts(prevClickCounts => ({
        //         ...prevClickCounts,
        //         [item.id]: 0,
        //     }));
        // }
    };

    //https://pixabay.com/sound-effects/search/celebration/

    const goHome = () => {
        window.location.href = "/";
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
