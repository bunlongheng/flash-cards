// eslint-disable-next-line
export const getImage = (item, type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        const imageName = item.name.replace(/\s+/g, "-").toLowerCase();
        return `/images/${type}/${imageName}.png`;
    }

    // Use Picsum Photos - reliable and no API key needed
    return `https://picsum.photos/seed/${encodeURIComponent(item.name)}/300/300`;
};

// eslint-disable-next-line
export const getImageWidth = type => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        return `50%`;
    }
    return `100%`;
};

export const getImageHeight = type => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        return `auto`;
    }
    return `90%`;
};
