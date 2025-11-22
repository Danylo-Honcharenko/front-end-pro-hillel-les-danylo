class Timer {
    #seconds = 60;
    #minute = 0;
    #intervalId = 0;
    #timerElement = document.querySelector("#timer");
    #finishElement = document.querySelector("#finish");

    constructor(seconds) {
        this.seconds = seconds;
    }

    updateTimer = () => {
        if (this.#seconds === 0 && this.#minute > 0) this.#seconds = 60;
        this.seconds -= 1;
        this.#seconds -= 1;
        this.#minute = Math.floor(this.seconds / 60);
        if (this.#seconds === 0 && this.#minute === 0) {
            this.#finishElement.textContent = "Finish";
            clearInterval(this.#intervalId);
        }
        this.#timerElement.textContent = this.#minute.toString().padStart(2, "0") + ":" + this.#seconds.toString().padStart(2, "0");
    }

    setIntervalId = (id) => {
        this.#intervalId = id;
    }
}

const timer = new Timer(360);
const intervalId = setInterval(timer.updateTimer, 1000);
timer.setIntervalId(intervalId);