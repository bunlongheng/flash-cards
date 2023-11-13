// eslint-disable-next-line
export const getImage = (item, type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        const imageName = item.name.replace(/\s+/g, "-").toLowerCase();
        return `/images/${type}/${imageName}.png`;
    }

    return `https://source.unsplash.com/300x300/?${encodeURIComponent(item.name)}`;
};
