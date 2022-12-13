import { centerX, centerY, deCenterX, deCenterY } from "../utils/coords.js"
import { prototypes } from "../render/render.js"
import { deltaTime } from "../render/loop.js"

// Main branch of objects && entities
export class Main {
    constructor(params = {x: 0, y: 0, gravity: 0.8, friction: 0.9, bounciness: 1.5}) {

        // Define initial position
        this.goTo(params.x, params.y)

        // Define movement phisics
        this.gravity = params.gravity   // 0.8 by default
        this.friction = params.friction // 0.9 by default
        this.yVelocity = 0
        this.xVelocity = 0

        // Define dimensions
        this.width = params.width
        this.height = params.height

        // Id for the object
        this.id = params.id   
    }

    /**
     * Functions to update the object
     */
    calcGravity() {

      
        this.yVelocity -= this.gravity * deltaTime
        this.changeY(this.yVelocity * deltaTime)
       
    }

    calcCollisions() {
        if (this.hitbox.touchingEdge("bottom")) {
            this.yVelocity -= this.yVelocity

            while(this.hitbox.touchingEdge("bottom")) {
                this.changeY(1)
            }

            while(!this.hitbox.touchingEdge("bottom")) {
                this.changeY(-0.1)
            }
        }

        if (this.hitbox.touchingEdge("left") || this.hitbox.touchingEdge("right")) {
            this.changeX(-this.xVelocity * deltaTime)
            this.xVelocity = 0;

        }
    }


    /**
     * Basic movement functions
     */
    goTo(x, y) {
        this.x = centerX(x)
        this.y = centerY(y)
    }

    getX() {
        return deCenterX(this.x)
    }

    getY() {
        return deCenterY(this.y)
    }

    changeX(x) {
        this.goTo(this.getX() + x, this.getY())
    }

    changeY(y) {
        this.goTo(this.getX(), this.getY() + y)
    }
}


// Object selector
export function $(id) {
    let proto
    prototypes.forEach(prototype => {
        if (prototype.id == id) {
            return proto = prototype
        }
    })

    return proto
}