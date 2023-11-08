export function playAudio(clickedItemsLength, dataLength, goHomeCallback) {
    if (clickedItemsLength > 0 && dataLength === clickedItemsLength) {
        const crow = new Audio("/sounds/crowd2.mp3");
        crow.play();

        const done = new Audio("/sounds/done.mp3");
        done.play();

        setTimeout(goHomeCallback, 5000);
    }

    const milestones = [1, 5, 10, 15, 20, 25];
    if (milestones.includes(clickedItemsLength)) {
        let audioSrc = "";
        switch (clickedItemsLength) {
            case 1:
                audioSrc = "/sounds/1.mp3";
                break;
            case 5:
                audioSrc = "/sounds/3.mp3";
                break;
            case 10:
                audioSrc = "/sounds/3.mp3";
                break;
            case 15:
                audioSrc = "/sounds/3.mp3";
                break;
            case 20:
                audioSrc = "/sounds/3.mp3";
                break;
            case 25:
                audioSrc = "/sounds/6.mp3";
                break;
            case 30:
                audioSrc = "/sounds/6.mp3";
                break;
            default:
                break;
        }

        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.volume = 0.1;
            audio.play();
        }
    }
}
