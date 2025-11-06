import Slider from "./slider.js";

const slider = new Slider({
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    imageSelector: "#slider-image",
    control: {
        buttonNextPrevSelectorBox: "#slider-control-top",
        buttonNextSelector: ".next",
        buttonPrevSelector: ".prev",
        buttonPointsSelectorBox: "#slider-control-bottom"
    }
});

slider.actions({
    onNextImage: (action) => action.nextImage(),
    onPrevImage: (action) => action.prevImage(),
    onCreateNavigatePoints: (action) => action.createNavigatePoints()
});