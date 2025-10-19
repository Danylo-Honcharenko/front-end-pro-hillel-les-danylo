let ladder = {
    count: 0,
    up: function () {
        this.count += 1;
        return this;
    },
    down: function () {
        this.count -= 1;
        return this;
    },
    showStep: function () {
        return this.count;
    }
};

console.log(ladder.up().up().down().showStep());