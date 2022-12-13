import { Main } from "../main.js";
import { Hitbox } from "../hitbox.js";

export class Ball extends Main {
    constructor(params) {
        super(params)
        this.shape = "circle"
        this.size = params.size
        this.height = this.size * 2
        this.width = this.size * 2
        this.gravity = 0.1
        this.hitbox = new Hitbox(this)
        this.yVelocity = 0
    }

    update() {
        this.calcGravity()
        this.calcCollisions()
    }

    render() {

    }
}