// eslint-disable-next-line
export const getImage = item => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles"];

    if (localImageTypes.includes(item.name)) {
        return `/images/${item.name}/${item.name.toLowerCase()}.png`;
    }

    return `https://source.unsplash.com/300x300/?${encodeURIComponent(item.name)}`;
};
