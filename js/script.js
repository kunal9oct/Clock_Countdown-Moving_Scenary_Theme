let clockHrs = document.querySelector('.clock-hours');
let clockMin = document.querySelector('.clock-minutes');
let clockSec = document.querySelector('.clock-seconds');
let countdownDays = document.querySelector('.countdown-days');
let countdownHours = document.querySelector('.countdown-hours');
let countdownMinutes = document.querySelector('.countdown-minutes');
let countdownSeconds = document.querySelector('.countdown-seconds');
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let finalDate = new Date('Dec 31, 2023 00:00:00');

let startClock = () => {
    updateTime();
    updateCountdown();
    setInterval( () => {
        updateTime();
        updateCountdown();
    }, 1000);
}

let updateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clockHrs.style.transform = `rotate(${30 * hours}deg)`;
    clockMin.style.transform = `rotate(${6 * minutes}deg)`;
    clockSec.style.transform = `rotate(${6 * seconds}deg)`;
}

let updateCountdown = () => {
    let now = new Date();
    let diff = finalDate - now;
    let diffObj = convertMilliSecToDHMS(diff);
    countdownDays.textContent = diffObj.days >=10 ? diffObj.days : '0' + diffObj.days;
    countdownHours.textContent = diffObj.hours >=10 ? diffObj.hours : '0' + diffObj.hours;
    countdownMinutes.textContent = diffObj.minutes >=10 ? diffObj.minutes : '0' + diffObj.minutes;
    countdownSeconds.textContent = diffObj.seconds >=10 ? diffObj.seconds : '0' + diffObj.seconds;
}

let convertMilliSecToDHMS = (milliSec) => {
    let days = Math.floor(milliSec / day);
    let hours = Math.floor(milliSec % day / hour);
    let minutes = Math.floor(milliSec % hour / minute);
    let seconds = Math.floor(milliSec % minute / second);

    return {days, hours, minutes, seconds};
}

startClock();