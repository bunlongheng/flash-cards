import React from "react";
import PropTypes from "prop-types";
import { getImage, getImageWidth, getImageHeight } from "./utility/imageUtils.js";

// One flashcard tile. A native <button> gives focus + Enter/Space for free, and
// React.memo means clicking one card does not re-render every sibling tile.
const Thumbnail = React.memo(function Thumbnail({ item, type, bgImage, done, onSelect }) {
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

Thumbnail.propTypes = {
    item: PropTypes.shape({ name: PropTypes.string.isRequired, color: PropTypes.string }).isRequired,
    type: PropTypes.string.isRequired,
    bgImage: PropTypes.bool,
    done: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
};

export default Thumbnail;
