import React from "react";
import { getImage, getImageWidth, getImageHeight } from "./utility/imageUtils.js";

// One flashcard tile. A native <button> gives focus + Enter/Space for free, and
// React.memo means clicking one card does not re-render every sibling tile.
const Thumbnail = React.memo(({ item, type, bgImage, done, onSelect }) => {
    const id = item.name.replace(/\s+/g, "-").toLowerCase();
    return (
        <button
            type="button"
            id={id}
            className={`thumbnail${done ? " disabled" : ""}`}
            onClick={() => onSelect(item)}
            style={{ backgroundColor: bgImage ? "white" : item.color, backgroundSize: "cover" }}
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

            <div className="thumbnail-details">
                <h6>{item.name}</h6>
            </div>
        </button>
    );
});

export default Thumbnail;
