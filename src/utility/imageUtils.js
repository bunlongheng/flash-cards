// eslint-disable-next-line
export const getImage = (item, type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        const imageName = item.name.replace(/\s+/g, "-").toLowerCase();

        return `/images/${type}/${imageName}.png`;
    }

    return `https://source.unsplash.com/300x300/?${encodeURIComponent(item.name)}`;
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
