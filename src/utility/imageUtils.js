// eslint-disable-next-line
export const getImage = (item, type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        const imageName = item.name.replace(/\s+/g, "-").toLowerCase();

        //width 30%
        return `/images/${type}/${imageName}.png`;
    }

    //width 100%
    return `https://source.unsplash.com/300x300/?${encodeURIComponent(item.name)}`;
};

// eslint-disable-next-line
export const getImageWidth = (item, type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        return `30%`;
    }
    return `100%`;
};
