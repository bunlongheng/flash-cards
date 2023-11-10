// eslint-disable-next-line
export const getImage = (item, type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];

    console.log(item.name.toLowerCase());

    if (localImageTypes.includes(type)) {
        // Replace spaces with hyphens and lowercase the item name for the image file path
        const imageName = item.name.replace(/\s+/g, "-").toLowerCase();
        return `/images/${type}/${imageName}.png`;
    }

    return `https://source.unsplash.com/300x300/?${encodeURIComponent(item.name)}`;
};
