export const getRandomColor = () => {
    const minChannelValue = 5; // Adjust this threshold as needed
    const randomChannel = () => (Math.floor(Math.random() * (256 - minChannelValue)) + minChannelValue).toString(16).padStart(2, "0");
    const red = randomChannel();
    const green = randomChannel();
    const blue = randomChannel();
    return `#${red}${green}${blue}`;
};
