let timer = null;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let intervalId;

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function start() { // For start button
 if(!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
 }
}

function pause() { // for pause button
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {  // for reset button
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
}

function update() { // to update the display
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minute = Math.floor(elapsedTime / (1000 * 60) % 60);
    let second = Math.floor(elapsedTime / 1000 % 60);

    hours.textContent = String(hour).padStart(2, "0");
    minutes.textContent = String(minute).padStart(2, "0");
    seconds.textContent = String(second).padStart(2, "0");
}