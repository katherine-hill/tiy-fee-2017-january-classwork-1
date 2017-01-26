(function() {
    "use strict";

    const clock = {
        currentDate: null,
        hands: {
            seconds: document.querySelector('.second-hand'),
            minutes: document.querySelector('.min-hand'),
            hours: document.querySelector('.hour-hand')
        },
        interval: 1000,
        isRunning: false,
        startBtn: document.querySelector('.start'),
        stopBtn: document.querySelector('.stop'),
        timer: null,
        getDate() {
            return new Date();
        },
        rotateHands(time = this.getDate()) {
            // const time = time || this.getDate();
            const seconds = time.getSeconds();
            const minutes = time.getMinutes();
            const hours = time.getHours();

            const secondsDeg = ((seconds / 60) * 360) + 90;
            const minutesDeg = ((minutes / 60) * 360) + 90;
            const hoursDeg = ((hours / 12) * 360) + 90 + (minutes * .5);

            if (seconds === 0) {
                this.hands.seconds.style.transition = 'none';
            } else if (seconds > 0 && this.hands.seconds.style.transition === 'none') {
                this.hands.seconds.style.transition = 'transform 0.05s cubic-bezier(0.15, 2.94, 0.25, 1)';
            }

            this.hands.seconds.style.transform = `rotate(${secondsDeg}deg)`;
            this.hands.minutes.style.transform = `rotate(${minutesDeg}deg)`;
            this.hands.hours.style.transform = `rotate(${hoursDeg}deg)`;
        },
        run() {
            if (this.isRunning) return;
            this.currentDate = this.getDate();
            this.rotateHands();

            this.timer = setInterval(() => {
                this.currentDate = this.getDate();
                this.rotateHands();
            }, this.interval);

            this.isRunning = true;
        },
        stopClock() {
            clearInterval(this.timer);
            this.isRunning = false;
        },
        init() {
            this.startBtn.addEventListener('click', () => this.run());
            this.stopBtn.addEventListener('click', () => this.stopClock());
            // this.button.removeEventListener('click', this.run);
        }
    };

    clock.init();
})();
// Immediately invoked function expression (IIFE)
