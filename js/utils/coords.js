import { canvas } from "../canvas.js"

export function centerX(x) {
    return canvas.width / 2 + x
}

export function centerY(y) {
    return canvas.height / 2 - y 
}

export function deCenterX(x) {
    return  x - canvas.width / 2
}

export function deCenterY(y) {
    return canvas.height / 2 - y
}

export function distanceBetween(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

export function directionToCoordinate(x1, y1, x2, y2) {
    return Math.atan2(y2-y1, x2-x1)
}