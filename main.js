let block = document.getElementById('clockBlock');

let Clock = function() {
    this.time = new Date();
    this.hours = (this.time.getHours() < 10) ? '0' + this.time.getHours() : this.time.getHours();
    this.minutes = (this.time.getMinutes() < 10) ? '0' + this.time.getMinutes() : this.time.getMinutes();
    this.seconds = (this.time.getSeconds() < 10) ? '0' + this.time.getSeconds() : this.time.getSeconds();  
}

let FullTimeClock = function(){};
let ShortTimeClock = function(){};

let Render = function(clock) {
    this.clock = clock;
    this.clock.addEventListener('click', () => this.clock.classList.toggle('isFull'));
    this.render = function() {
        let isFullTime = this.clock.classList.contains('isFull');
        if(isFullTime) {
            FullTimeClock.prototype = new Clock();
            let full = new FullTimeClock();
            this.clock.innerHTML = `${full.hours}:${full.minutes}:${full.seconds}`
        } else {
            ShortTimeClock.prototype = new Clock();
            let full = new ShortTimeClock();
            this.clock.innerHTML = `${full.hours}:${full.minutes}`
        }
    }
}

let render = new Render(block);
setInterval(() => render.render(), 250);
