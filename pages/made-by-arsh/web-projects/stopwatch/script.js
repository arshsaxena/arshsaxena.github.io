// stopwatch

const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;

let intervalId;
let hrs = 0;
let mins = 0;
let sec = 0;

startButton.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pauseButton.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now - startTime;
        clearInterval(intervalId);
    }
});
resetButton.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    sec = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    sec = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    
    sec = pad(sec);
    mins = pad(mins);
    hrs = pad(hrs);
        
    timeDisplay.textContent = `${hrs}:${mins}:${sec}`;
    
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}