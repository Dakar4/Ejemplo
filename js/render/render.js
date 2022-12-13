import { c, canvas } from "../canvas.js"
import { followCameraX, followCameraY } from "./camera.js"

export var prototypes = []


export function createPrototype(prototype) {
    prototypes.push(prototype)
}

export function renderPrototypes() {
    for (let i = 0; i < prototypes.length; i++) {
        prototypes[i].update()
        prototypes[i].render()
        prototypes[i].hitbox.render()
    }
    c.strokeStyle = "blue"
    c.strokeRect(followCameraX(0), followCameraY(0), canvas.width, canvas.height)
}