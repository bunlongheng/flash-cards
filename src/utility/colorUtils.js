export const getHueColor = (index, total) => {
    const step = 360 / total;
    const hue = index * step;
    return `hsl(${hue}, 100%, 50%)`;
};
