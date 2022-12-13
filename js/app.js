import { canvas, c, createCanvas } from "./canvas.js"
import { mouseX, mouseY } from "./utils/mouse.js"
import { Player } from "./classes/entities/player.js"
import { Box } from "./classes/objects/box.js"
import { Ball } from "./classes/objects/ball.js"
import { createPrototype, renderPrototypes } from "./render/render.js"
import { changeCameraX, setCamera } from "./render/camera.js"
import { isKeyDown, keys } from "./utils/keyboard.js"
import { $ } from "./classes/main.js"
import { deltaTime } from "./render/loop.js"



createCanvas()


createPrototype(new Player({
    x: -700,
    y: 200,
    gravity: 2,
    friction: 0.925,
    width: 190,
    height: 200,
    id: "zelda"
}))


createPrototype(new Box({
    x: 0,
    y: 0,
    size: 100,
    gravity: 0.8,
    id: "box"
}))


var maxY = 200
var offsetY = 0
var scrollVel = 8

export function loop() {


    if (Math.abs(offsetY) > maxY) {
        offsetY = maxY / (Math.abs(offsetY) / offsetY)
    }

    if (!isKeyDown("w") && !isKeyDown("s") && offsetY != 0) {
        offsetY = offsetY - scrollVel / (Math.abs(offsetY) / offsetY) * deltaTime
    }   

    if (isKeyDown("w")) {
        offsetY = offsetY + scrollVel * deltaTime
    }

    if (isKeyDown("s")) {
        offsetY = offsetY - scrollVel * deltaTime
    }


    if (Math.abs(offsetY) < 10 && !isKeyDown("w") && !isKeyDown("s")) offsetY = 0

    // if (Math.abs(maxY - offsetY) < 15 && isKeyDown("w")) offsetY = (Math.abs(offsetY) / offsetY) * maxY

    // if (Math.abs(maxY - offsetY) < 15 && isKeyDown("s")) offsetY = (Math.abs(offsetY) / offsetY) * maxY


    // while (Math.abs(offsetY) > maxY) {
    //     offsetY += offsetY / Math.abs(offsetY)
    // }

    if ($("zelda") != undefined) setCamera(mouseX/22 + $("zelda").x - canvas.width / 2, (offsetY + mouseY/22) + canvas.height / 2 - $("zelda").y)

    renderPrototypes()

}