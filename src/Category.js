import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHueColor } from "./utility/colorUtils.js";
import { playAudio } from "./utility/audioUtils.js";
import { getPageName, goHome } from "./utility/pageUtils.js";
import { getImage, getImageWidth, getImageHeight } from "./utility/imageUtils.js";

import "./Category.css";

const Category = ({ type }) => {
    const [data, setData] = useState([]);
    const [clickedItemName, setClickedItemName] = useState("");
    const [clickedItems, setClickedItems] = useState([]);
    const [slideText, setSlideText] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [displayTextKey, setDisplayTextKey] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const [bgImage, setBgImage] = useState(false);
    const [shakeClass, setShakeClass] = useState("");
    const [showCelebration, setShowCelebration] = useState(false);

    useEffect(() => {
        const jsonData = require(`./data/${type}.json`);

        const updatedData = jsonData.map((item, index) => {
            if (!item.color) {
                item.color = getHueColor(index, jsonData.length);
            }
            return item;
        });

        setData(updatedData);

        const initialBgImageValue = localStorage.getItem("bgImage") === "true";
        setBgImage(initialBgImageValue);
    }, [type]);

    useEffect(() => {
        playAudio(clickedItems.length, data.length, goHome);
    }, [clickedItems.length, data.length]);

    const toggleImage = () => {
        setClickCount(prevCount => prevCount + 1);

        if (clickCount <= 3) {
            setShakeClass(`shake${clickCount + 1}`);
        } else {
            setShakeClass("");
        }

        console.log("Click Count:", clickCount);

        if (clickCount === 2) {
            setShowCelebration(true);

            const currentV = localStorage.getItem("bgImage") === "true";
            const newV = !currentV;
            localStorage.setItem("bgImage", newV.toString());

            setTimeout(() => {
                setShowCelebration(false);
                window.location.reload();
            }, 2000);
        }
    };

    const handleClick = item => {
        setSlideText("");

        const thumbnailId = item.name.replace(/\s+/g, "-").toLowerCase();
        const clickedThumbnail = document.getElementById(`${thumbnailId}`);

        const audio = new Audio("/sounds/1.mp3");
        audio.volume = 0.1;
        audio.play();

        setClickedItemName(item.name);

        const getRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * 5) + 1;
            return `/images/fly/${randomIndex}.png`;
        };

        if (!clickedThumbnail.classList.contains("disabled")) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));
            clickedThumbnail.classList.add("disabled");

            setClickedItems(prev => [...prev, thumbnailId]);
            console.log(clickedItems);

            switch (clickedItems.length + 1) {
                case 1:
                    setSlideText(<img src={`/images/fly/superman.png`} alt="superman" width={40} />);
                    new Audio("/sounds/flying.mp3").play();
                    break;
                case 5:
                    setSlideText(<img src={getRandomImage()} alt="air" width={40} />);
                    new Audio("/sounds/flying.mp3").play();
                    break;
                case 10:
                    setSlideText(<img src={getRandomImage()} alt="air" width={40} />);
                    new Audio("/sounds/flying.mp3").play();
                    break;
                case 15:
                    setSlideText(<img src={getRandomImage()} alt="air" width={40} />);
                    new Audio("/sounds/flying.mp3").play();
                    break;
                case 20:
                    setSlideText(<img src={getRandomImage()} alt="air" width={40} />);
                    new Audio("/sounds/flying.mp3").play();
                    break;
                case 25:
                    setSlideText(<img src={getRandomImage()} alt="air" width={40} />);
                    new Audio("/sounds/flying.mp3").play();
                    break;
                default:
                    setSlideText("");
                    break;
            }

            setDisplayText(item.name);
            setDisplayTextKey(prevKey => prevKey + 1);
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
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                </span>

                <span onClick={() => toggleImage()} className={`current-page ${shakeClass}`}>
                    <img src={`/images/types/${type}.png`} alt="Icon" className={`icon ${shakeClass}`} width="20" /> {getPageName(type)}
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
                            backgroundColor: bgImage ? "white" : item.color,
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="initial">{bgImage ? "" : item.name.charAt(0).toUpperCase()}</div>

                        {bgImage ? <img src={getImage(item, type)} alt="img" style={{ width: getImageWidth(type), height: getImageHeight(type) }} /> : null}

                        <div className={`thumbnail-details`}>
                            <h6>{item.name}</h6>
                        </div>
                    </div>
                ))}
            </div>

            {/**************** */}
            {/*   slideText    */}
            {/**************** */}

            {slideText && (
                <div className="slide-up">
                    <p>{slideText}</p>
                </div>
            )}

            <span className={`selected bottom-left`}>
                <a href={`https://www.google.com/images?q=${encodeURIComponent(clickedItemName)}`} target="_blank" rel="noopener noreferrer">
                    "{clickedItemName}"
                </a>
            </span>

            {/************* */}
            {/*   length    */}
            {/************* */}

            <span className="bottom-right">
                {clickedItems.length}/{data.length}
            </span>

            {/************* */}
            {/* displayText */}
            {/************* */}

            {displayText && (
                <div key={displayTextKey} className="display-text">
                    {/* <p>{displayText}</p> */}
                </div>
            )}

            {/************* */}
            {/* achievement */}
            {/************* */}

            {showCelebration && (
                <div className="achievement-container">
                    <img className="achievement" src="/images/gif/5.gif" alt="Celebration" />
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
