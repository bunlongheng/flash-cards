export function getPageName(type) {
    if (type && type.includes("-")) {
        return type
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    } else if (type) {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
}

export function goHome() {
    window.location.href = "/";
}
