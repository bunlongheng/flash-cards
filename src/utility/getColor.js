export const getColor = (item, opacity = 0.6) => {
    if (item.color) {
        const hexColor = item.color;
        let red = parseInt(hexColor.slice(1, 3), 16);
        let green = parseInt(hexColor.slice(3, 5), 16);
        let blue = parseInt(hexColor.slice(5, 7), 16);

        // Check if the color is too dark (close to black)
        if (red + green + blue < 100) {
            // If it's too dark, adjust the color
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
        }

        return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    }

    let color = "rgba(";
    let red, green, blue;

    // Generate random RGB values while avoiding black
    do {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
    } while (red + green + blue < 100); // Ensure it's not too dark

    color += `${red}, ${green}, ${blue}, ${opacity})`;
    return color;
};
