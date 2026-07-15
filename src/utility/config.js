// Central place the app reads env-driven lists, so parsing and hardening
// (trim + drop blanks) live in one spot instead of being duplicated per component.
const parseList = value =>
    (value || "")
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);

export const getCategories = () => parseList(import.meta.env.REACT_APP_CATEGORIES);

export const getTransportationTypes = () => parseList(import.meta.env.REACT_APP_TRANSPORTATION_TYPES);
