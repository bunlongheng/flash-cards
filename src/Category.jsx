import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { getHueColor } from "./utility/colorUtils.js";
import { playAudio } from "./utility/audioUtils.js";
import { getPageName, goHome } from "./utility/pageUtils.js";
import Thumbnail from "./Thumbnail.jsx";

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

    // Keep a live ref of clicked items so handleSelect can stay a stable
    // callback (needed for Thumbnail's React.memo) while still reading current state.
    const clickedRef = useRef([]);
    useEffect(() => {
        clickedRef.current = clickedItems;
    }, [clickedItems]);

    const handleSelect = useCallback(item => {
        const thumbnailId = item.name.replace(/\s+/g, "-").toLowerCase();
        if (clickedRef.current.includes(thumbnailId)) return;

        setSlideText("");
        setClickedItemName(item.name);

        const audio = new Audio("/sounds/1.mp3");
        audio.volume = 0.1;
        audio.play();

        const getRandomImage = () => `/images/fly/${Math.floor(Math.random() * 5) + 1}.png`;

        speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));

        const milestone = clickedRef.current.length + 1;
        if (milestone === 1) {
            setSlideText(<img src={`/images/fly/superman.png`} alt="superman" width={40} />);
            new Audio("/sounds/flying.mp3").play();
        } else if ([5, 10, 15, 20, 25].includes(milestone)) {
            setSlideText(<img src={getRandomImage()} alt="air" width={40} />);
            new Audio("/sounds/flying.mp3").play();
        } else {
            setSlideText("");
        }

        setClickedItems(prev => (prev.includes(thumbnailId) ? prev : [...prev, thumbnailId]));
    }, []);

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key >= "a" && event.key <= "z") {
                const itemToClick = data.find(item => item.name.charAt(0).toLowerCase() === event.key);
                if (itemToClick) {
                    handleSelect(itemToClick);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [data, handleSelect]);

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

    return (
        <div className="category-page" style={{ overflowX: "hidden" }}>
            <nav className="breadcrumbs">
                <Link to="/" className="home-link">
                    Go Home
                </Link>
                <button type="button" onClick={() => goHome()} className="breadcrumb-divider">
                    {" "}
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                </button>

                <button type="button" onClick={() => toggleImage()} className={`current-page ${shakeClass}`}>
                    <img src={`/images/types/${type}.png`} alt="Icon" className={`icon ${shakeClass}`} width="20" /> {getPageName(type)}
                </button>
            </nav>

            {status === "loading" && <div className="state-msg">Loading...</div>}
            {status === "error" && <div className="state-msg">Sorry, we could not find that category.</div>}
            {status === "ready" && data.length === 0 && <div className="state-msg">No cards here yet.</div>}

            <div className={`thumbnails-container`}>
                {data.map((item, index) => (
                    <Thumbnail
                        key={index}
                        item={item}
                        type={type}
                        bgImage={bgImage}
                        done={clickedItems.includes(item.name.replace(/\s+/g, "-").toLowerCase())}
                        onSelect={handleSelect}
                    />
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
