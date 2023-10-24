import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Category.css";

const Category = ({ type }) => {
    const [data, setData] = useState([]);
    const [clickedItemName, setClickedItemName] = useState("");
    const [clickedItems, setClickedItems] = useState([]);
    const [slideText, setSlideText] = useState("");

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
        const milestones = [1, 5, 10, 15, 20, 25];
        if (milestones.includes(clickedItems.length)) {
            let audioSrc = "";
            switch (clickedItems.length) {
                case 1:
                    audioSrc = "/sounds/1.mp3";
                    break;
                case 5:
                    audioSrc = "/sounds/2.mp3";
                    break;
                case 10:
                    audioSrc = "/sounds/3.mp3";
                    break;
                case 15:
                    audioSrc = "/sounds/4.mp3";
                    break;
                case 20:
                    audioSrc = "/sounds/5.mp3";
                    break;
                case 25:
                    audioSrc = "/sounds/6.mp3";
                    break;
                default:
                    break;
            }

            if (audioSrc) {
                const audio = new Audio(audioSrc);
                audio.play();
            }
        }
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

            switch (clickedItems.length + 1) {
                case 1:
                    setSlideText("🎈");
                    break;
                case 5:
                    setSlideText("♥️");
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

    //https://pixabay.com/sound-effects/search/celebration/

    const goHome = () => {
        window.location.href = "/";
    };

    const getColor = (item, opacity = 0.6) => {
        if (item.color) {
            const hexColor = item.color;
            let red = parseInt(hexColor.slice(1, 3), 16);
            let green = parseInt(hexColor.slice(3, 5), 16);
            let blue = parseInt(hexColor.slice(5, 7), 16);

            // Check if the color is too dark (close to black)
            if (red + green + blue < 100) {
                // If it's too dark, adjust the color
                red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
            }

            return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        }

        let color = "rgba(";
        let red, green, blue;

        // Generate random RGB values while avoiding black
        do {
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
        } while (red + green + blue < 100); // Ensure it's not too dark

        color += `${red}, ${green}, ${blue}, ${opacity})`;
        return color;
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
