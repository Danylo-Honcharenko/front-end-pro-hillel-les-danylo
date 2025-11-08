export default function Slider(config) {
    this.index = 0;
    this.sliderImages = document.querySelector(config.imageSelector);
    this.buttonNextPrevSelectorBox = document.querySelector(config.control.buttonNextPrevSelectorBox);
    this.nextButton = document.querySelector(config.control.buttonNextSelector);
    this.prevButton = document.querySelector(config.control.buttonPrevSelector);
    this.buttonPointsSelectorBox = document.querySelector(config.control.buttonPointsSelectorBox);

    this.nextImage = () => {
        if (this.index <= config.images.length - 2) {
            this.index++;
            this.sliderImages.src = `images/${config.images[this.index]}`;
            this.changeButtonState(this.index);
        }
    }

    this.prevImage = () => {
        if (this.index >= 1) {
            this.index--;
            this.sliderImages.src = `images/${config.images[this.index]}`;
            this.changeButtonState(this.index);
        }
    }

    this.createNavigatePoints = () => {
        for (let i = 0; i < config.images.length; i++) {
            const div = document.createElement("div");
            div.setAttribute("data-image-index", `${i}`);
            div.classList.add("pointControl");
            this.buttonPointsSelectorBox.appendChild(div);
        }
    }

    this.changeButtonState = (index) => {
        if (index === config.images.length - 1 && this.prevButton.disabled) {
            this.nextButton.disabled = true;
            this.prevButton.disabled = false;
        }

        if (index === 0 && this.nextButton.disabled) {
            this.prevButton.disabled = true;
            this.nextButton.disabled = false;
        }

        if (index !== config.images.length - 1 && index !== 0) {
            this.prevButton.disabled = false;
            this.nextButton.disabled = false;
        }

        if (index === config.images.length - 1) this.nextButton.disabled = true;
        if (index === 0) this.prevButton.disabled = true;
    }

    this.actions = (actions) => {
        this.buttonNextPrevSelectorBox.addEventListener('click', (event) => {
            if (event.target.classList.contains("next")) {
                actions.onNextImage(this);
            }
            if (event.target.classList.contains("prev")) {
                actions.onPrevImage(this);
            }
        });
        actions.onCreateNavigatePoints(this);
        this.buttonPointsSelectorBox.addEventListener('click', (event) => {
            if (event.target.classList.contains("pointControl")) {
                this.index = Number(event.target.dataset.imageIndex);
                this.sliderImages.src = `images/${config.images[this.index]}`;
                this.changeButtonState(this.index);
            }
        });
    }
}