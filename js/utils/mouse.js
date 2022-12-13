import { deCenterX, deCenterY } from "./coords.js"

export var mouseX = 0
export var mouseY = 0

export function mouseEventDetection() {
    window.addEventListener("mousemove", e => {
        mouseX = deCenterX(e.clientX)
        mouseY = deCenterY(e.clientY)
    })
}