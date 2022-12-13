import { centerX, centerY, deCenterX, deCenterY } from "../utils/coords.js"

export var cameraX = 0
export var cameraY = 0

export function setCamera(x, y) {
    cameraX = -x
    cameraY = y
}

export function changeCameraX(x) {
    cameraX += x
}

export function changeCameraY(y) {
    cameraY += y
}

export function followCameraX(x) {
    return x + cameraX
}

export function followCameraY(y) {
    return y + cameraY
}