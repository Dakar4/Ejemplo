import { Main } from "../main.js"
import { mouseX, mouseY } from "../../utils/mouse.js"
import { isKeyDown } from "../../utils/keyboard.js"
import { c } from "../../canvas.js"
import { getImage } from "../../render/image.js"
import { cameraX, cameraY, followCameraX, followCameraY } from "../../render/camera.js"
import { Hitbox } from "../hitbox.js"

export class Box extends Main {
    constructor(params) {
        super(params)
        this.size = params.size
        this.image = getImage("img/box.jpg")
        this.shape = "rect"
        this.hitbox = new Hitbox(this)
        this.yVelocity = 0
    }

    update() {
        this.calcGravity()
        this.calcCollisions()
    }

    render() {
        c.drawImage(this.image, followCameraX(this.x - this.size / 2), followCameraY(this.y - this.size / 2), this.size, this.size)
    }


    
}