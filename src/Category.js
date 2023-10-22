import React, { useState, useEffect, useHistory } from "react";
import { Link } from "react-router-dom";

import "./Category.css";

const Category = ({ type }) => {
    const [data, setData] = useState([]);
    const [clickedItemName, setClickedItemName] = useState("");
    const [slideText, setSlideText] = useState("");

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
        setSlideText("");
        const thumbnailId = item.name.replace(/\s+/g, "-").toLowerCase();
        // console.log(`Clicked thumbnailId: ${thumbnailId}`);

        setClickedItemName(item.name);

        const clickedThumbnail = document.getElementById(`${thumbnailId}`);
        if (clickedThumbnail) {
            if (!clickedThumbnail.classList.contains("disabled")) {
                speechSynthesis.speak(new SpeechSynthesisUtterance(item.name));
                clickedThumbnail.classList.add("disabled");
                // setSlideText(item.name);
                setSlideText(" 🎈 ");
            }
        }
    };

    const goHome = () => {
        window.location.href = "/";
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
        </div>
    );
};

export default Category;
