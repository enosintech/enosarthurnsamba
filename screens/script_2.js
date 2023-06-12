const dayC = document.querySelector("#days");
const hourC = document.querySelector("#hours");
const minC = document.querySelector("#mins");
const secC = document.querySelector("#seconds");
const playEl = document.getElementById("play");
const pauseEl = document.getElementById("pause");
const date = "07 December 2023";
const audio = new Audio("../assets/myjob.mp3");
const scrollEl = document.querySelectorAll(".fade-in");

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .4
}

const callbacks = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}

let obsever = new IntersectionObserver(callbacks, options);

scrollEl.forEach(element => {
    obsever.observe(element);
})

const countdownApp = () => {
    const currentDate = new Date();
    const targetDate = new Date(date);
    const totalSeconds = (targetDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor( totalSeconds/3600) % 24;
    const days = Math.floor(totalSeconds/3600/24);

    dayC.innerHTML = addZero(days);
    hourC.innerHTML = addZero(hours);
    minC.innerHTML = addZero(minutes);
    secC.innerHTML = addZero(seconds);
}

const addZero = (time) => {
    return time < 10 ? `0${time}` : time ;
}

const playSong = () => {
    audio.play();
}

const pauseSong = () => {
    audio.pause();
}

playEl.addEventListener("click", playSong);
pauseEl.addEventListener("click", pauseSong);

countdownApp();
playSong();

setInterval(countdownApp, 1000);