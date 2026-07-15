import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHueColor } from "./utility/colorUtils.js";
import { playAudio } from "./utility/audioUtils.js";
import { getPageName, goHome } from "./utility/pageUtils.js";
import { getImage, getImageWidth, getImageHeight } from "./utility/imageUtils.js";

import "./Category.css";

// Vite is ESM, so category datasets are loaded via glob instead of require().
const dataModules = import.meta.glob("./data/*.json", { eager: true, import: "default" });

const Category = ({ type }) => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("loading");
    const [clickedItemName, setClickedItemName] = useState("");
    const [clickedItems, setClickedItems] = useState([]);
    const [slideText, setSlideText] = useState("");
    const [clickCount, setClickCount] = useState(0);
    const [bgImage, setBgImage] = useState(false);
    const [shakeClass, setShakeClass] = useState("");
    const [showCelebration, setShowCelebration] = useState(false);

    useEffect(() => {
        const jsonData = dataModules[`./data/${type}.json`];
        if (!jsonData) {
            setData([]);
            setStatus("error");
            return;
        }

        const updatedData = jsonData.map((item, index) => {
            if (!item.color) {
                item.color = getHueColor(index, jsonData.length);
            }
            return item;
        });

        setData(updatedData);
        setStatus("ready");

        const initialBgImageValue = localStorage.getItem("bgImage") === "true";
        setBgImage(initialBgImageValue);
    }, [type]);

    useEffect(() => {
        playAudio(clickedItems.length, data.length, goHome);
    }, [clickedItems.length, data.length]);

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key >= "a" && event.key <= "z") {
                const itemToClick = data.find(item => item.name.charAt(0).toLowerCase() === event.key);
                if (itemToClick) {
                    handleClick(itemToClick);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, clickedItems]);

    const toggleImage = () => {
        setClickCount(prevCount => prevCount + 1);

        if (clickCount <= 3) {
            setShakeClass(`shake${clickCount + 1}`);
        } else {
            setShakeClass("");
        }

        if (clickCount === 2) {
            setShowCelebration(true);

            const newV = !bgImage;
            localStorage.setItem("bgImage", newV.toString());
            setBgImage(newV);

            setTimeout(() => setShowCelebration(false), 2000);
        }
    };

    const handleClick = item => {
        const thumbnailId = item.name.replace(/\s+/g, "-").toLowerCase();
        if (clickedItems.includes(thumbnailId)) return;

        setSlideText("");
        setClickedItemName(item.name);

        const audio = new Audio("/sounds/1.mp3");
        audio.volume = 0.1;
        audio.play();

        const getRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * 5) + 1;
            return `/images/fly/${randomIndex}.png`;
        };

        speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));
        setClickedItems(prev => [...prev, thumbnailId]);

        const milestone = clickedItems.length + 1;
        if (milestone === 1) {
            setSlideText(<img src={`/images/fly/superman.png`} alt="superman" width={40} />);
            new Audio("/sounds/flying.mp3").play();
        } else if ([5, 10, 15, 20, 25].includes(milestone)) {
            setSlideText(<img src={getRandomImage()} alt="air" width={40} />);
            new Audio("/sounds/flying.mp3").play();
        } else {
            setSlideText("");
        }
    };

    return (
        <div className="category-page" style={{ overflowX: "hidden" }}>
            <nav className="breadcrumbs">
                <Link to="/" className="home-link">
                    Go Home
                </Link>
                <span
                    onClick={() => goHome()}
                    onKeyDown={e => (e.key === "Enter" || e.key === " ") && goHome()}
                    role="button"
                    tabIndex={0}
                    className="breadcrumb-divider"
                >
                    {" "}
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                </span>

                <span
                    onClick={() => toggleImage()}
                    onKeyDown={e => (e.key === "Enter" || e.key === " ") && toggleImage()}
                    role="button"
                    tabIndex={0}
                    className={`current-page ${shakeClass}`}
                >
                    <img src={`/images/types/${type}.png`} alt="Icon" className={`icon ${shakeClass}`} width="20" /> {getPageName(type)}
                </span>
            </nav>

            {status === "loading" && <div className="state-msg">Loading...</div>}
            {status === "error" && <div className="state-msg">Sorry, we could not find that category.</div>}
            {status === "ready" && data.length === 0 && <div className="state-msg">No cards here yet.</div>}

            <div className={`thumbnails-container`}>
                {data.map((item, index) => {
                    const thumbnailId = item.name.replace(/\s+/g, "-").toLowerCase();
                    const done = clickedItems.includes(thumbnailId);
                    return (
                        <div
                            key={index}
                            id={thumbnailId}
                            className={`thumbnail${done ? " disabled" : ""}`}
                            role="button"
                            tabIndex={0}
                            onClick={() => handleClick(item)}
                            onKeyDown={e => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleClick(item);
                                }
                            }}
                            style={{
                                backgroundColor: bgImage ? "white" : item.color,
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="initial">{bgImage ? "" : item.name.charAt(0).toUpperCase()}</div>

                            {bgImage ? (
                                <img
                                    src={getImage(item, type)}
                                    alt={item.name}
                                    loading="lazy"
                                    style={{ width: getImageWidth(type), height: getImageHeight(type) }}
                                />
                            ) : null}

                            <div className={`thumbnail-details`}>
                                <h6>{item.name}</h6>
                            </div>
                        </div>
                    );
                })}
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
            {/* achievement */}
            {/************* */}

            {showCelebration && (
                <div className="achievement-container">
                    <img className="achievement" src="/images/gif/5.gif" alt="Celebration" />
                </div>
            )}
            {data.length > 0 && data.length === clickedItems.length && (
                <div className="achievement-container">
                    <img src="/images/1.gif" alt="achievement" className="achievement" />
                </div>
            )}
        </div>
    );
};

export default Category;
