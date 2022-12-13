import { loop } from "../app.js"
import { background } from "../canvas.js"


export var fps;
export var deltaTime;
export var lowestFps = -1;
var sum;
var lastCalledTime;
var counter
var fpsArray = [];

export function requestGameLoop() {

    if (!lastCalledTime) {
        lastCalledTime = new Date().getTime();
        fps = 0;
    }

    deltaTime = (new Date().getTime() - lastCalledTime) / 1000;
    lastCalledTime = new Date().getTime();
    fps = Math.ceil(1 / deltaTime);

    if (counter >= 60) {
        sum = fpsArray.reduce((a, b) => { return a + b });
        average = Math.ceil(sum / fpsArray.length);
        counter = 0;
    } else {
        if (fps !== Infinity) {
            fpsArray.push(fps);
        }

        counter++;
    }

    if (lowestFps == -1 || fps < lowestFps) lowestFps = fps;
    deltaTime *= 70
    background("black")
        loop()


    requestAnimationFrame(requestGameLoop)
}