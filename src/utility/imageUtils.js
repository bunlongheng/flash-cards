// eslint-disable-next-line
export const getImage = (item, type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles", "animals", "fruits", "birds", "insects", "vegetables", "desserts", "dinosaurs", "reptiles", "tools", "trucks", "vehicles", "aircrafts", "safari-animals", "farm-animals", "under-water", "foods", "tropical-fruits", "balls", "buses", "camping", "chemicals", "moons", "galaxy", "stars", "solar-system", "bathroom", "kitchen", "body-parts", "usa-states", "usa-capitals", "keyboard", "colors", "ABC", "123", "10s", "seasons", "directions", "activities", "adjectives", "emotions", "months", "days-of-week", "opposites"];
    if (localImageTypes.includes(type)) {
        // Slug: lowercase, collapse any non-alphanumeric run (spaces, slashes, punctuation) to a
        // single hyphen, and trim edges. Keeps filenames URL-safe (e.g. "Big / Small" -> "big-small").
        const imageName = item.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        return `/images/${type}/${imageName}.png`;
    }

    // Use Picsum Photos - reliable and no API key needed
    return `https://picsum.photos/seed/${encodeURIComponent(item.name)}/300/300`;
};

// eslint-disable-next-line
export const getImageWidth = (type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        return `50%`;
    }
    return `100%`;
};

export const getImageHeight = (type) => {
    const localImageTypes = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];
    if (localImageTypes.includes(type)) {
        return `auto`;
    }
    return `90%`;
};
