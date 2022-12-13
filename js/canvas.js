import { requestGameLoop } from "./render/loop.js"
import { mouseEventDetection } from "./utils/mouse.js"


export var canvas, c

export function createCanvas() {
    canvas = document.createElement('canvas')
    c = canvas.getContext('2d')
    fitCanvasToScreen()

    window.addEventListener("resize", () => {
        fitCanvasToScreen()
    })

    document.body.appendChild(canvas)
    requestGameLoop()
    mouseEventDetection()
}

export function background(color) {
    c.fillStyle = color
    c.fillRect(0, 0, canvas.width, canvas.height)
}

function fitCanvasToScreen() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    background("black")
}
