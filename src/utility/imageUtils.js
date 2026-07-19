// Categories that ship their own local image set under public/images/<type>/.
// Single source of truth - referenced by getImage and the sizing helpers below.
export const LOCAL_IMAGE_TYPES = [
    "planets",
    "shapes",
    "polygons",
    "triangles",
    "construction-vehicles",
    "animals",
    "fruits",
    "birds",
    "insects",
    "vegetables",
    "desserts",
    "dinosaurs",
    "reptiles",
    "tools",
    "trucks",
    "vehicles",
    "aircrafts",
    "safari-animals",
    "farm-animals",
    "under-water",
    "foods",
    "tropical-fruits",
    "balls",
    "buses",
    "camping",
    "chemicals",
    "moons",
    "galaxy",
    "stars",
    "solar-system",
    "bathroom",
    "kitchen",
    "body-parts",
    "usa-states",
    "usa-capitals",
    "keyboard",
    "colors",
    "ABC",
    "123",
    "10s",
    "seasons",
    "directions",
    "activities",
    "adjectives",
    "emotions",
    "months",
    "days-of-week",
    "opposites",
];

// Diagram-style sets (shapes, planets, etc.) render at half width so the figure sits centered;
// photo sets fill the card. Subset of LOCAL_IMAGE_TYPES.
export const DIAGRAM_TYPES = ["planets", "shapes", "polygons", "triangles", "construction-vehicles"];

// Slug: lowercase, collapse any non-alphanumeric run (spaces, slashes, punctuation) to a single
// hyphen, and trim edges. Keeps filenames URL-safe (e.g. "Big / Small" -> "big-small").
export const toImageSlug = name =>
    name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

export const getImage = (item, type) => {
    if (LOCAL_IMAGE_TYPES.includes(type)) {
        return `/images/${type}/${toImageSlug(item.name)}.webp`;
    }
    // Fallback for any type without a local set - reliable, no API key needed.
    return `https://picsum.photos/seed/${encodeURIComponent(item.name)}/300/300`;
};

export const getImageWidth = type => (DIAGRAM_TYPES.includes(type) ? "50%" : "100%");

export const getImageHeight = type => (DIAGRAM_TYPES.includes(type) ? "auto" : "90%");
