import { Main } from "../main.js";
import { mouseX, mouseY } from "../../utils/mouse.js"
import { isKeyDown, keys } from "../../utils/keyboard.js";
import { c } from "../../canvas.js";
import { followCameraX, followCameraY } from "../../render/camera.js";
import { centerX, centerY } from "../../utils/coords.js";
import { getImage } from "../../render/image.js";
import { Hitbox } from "../hitbox.js";
import { deltaTime } from "../../render/loop.js";

export class Player extends Main {
    constructor(params) {
            super(params)

            // Define hitbox
            this.shape = "rect"
            this.hitbox = new Hitbox(this)
            this.image = getImage("img/milink.png")
            
            // Custom object properties
            this.doubleJump = true
            this.jumping = false
            this.doubleJumpAllowed = true


            this.jumpPower = 45;
    }

    update() {

        
        if (this.yVelocity == 0 && this.jumping) {
            this.jumping = false
            this.doubleJump = true
        }

        if (this.jumping && this.doubleJump && isKeyDown(" ") && this.doubleJumpAllowed) {
            this.yVelocity = this.jumpPower
            this.doubleJump = false
        }

        // Jump
        if (isKeyDown(" ") && this.yVelocity == 0 && !this.jumping) {
            this.yVelocity = this.jumpPower
            this.jumping = true
            this.doubleJumpAllowed = false
        }

        if (this.jumping && !isKeyDown(" ")) {
            this.doubleJumpAllowed = true
        }




        // X movement
        if (isKeyDown("a")) this.xVelocity -= 2.8
        if (isKeyDown("d")) this.xVelocity += 2.8


        this.xVelocity *= this.friction



        // document.getElementById("xvel").innerText = parseFloat(this.xVelocity.toFixed(4))
        // document.getElementById("yvel").innerText = parseFloat(this.yVelocity.toFixed(4))
        // document.getElementById("double").innerText = this.doubleJump

        if(Math.abs(this.xVelocity) > 30) {
            this.xVelocity = 30 * (Math.abs(this.xVelocity) / this.xVelocity)
        }
        this.changeX(this.xVelocity * deltaTime)

        this.calcGravity()
        this.calcCollisions()
    }

    render() {
        c.drawImage(this.image, followCameraX(centerX(this.getX()) - this.width / 2), followCameraY(centerY(this.getY()) - this.height / 2), this.width, this.height)
    }
}
