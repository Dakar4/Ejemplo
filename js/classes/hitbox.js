import { canvas, c } from '../canvas.js';
import { followCameraX, followCameraY } from '../render/camera.js';

export class Hitbox {
    constructor(object) {
        this.parentObject = object

        if (object.size !== undefined) {
            this.parentObject.width = object.size
            this.parentObject.height = object.size
        }
    }

    render() {
        if (this.parentObject.shape == "rect") {
            c.strokeStyle = "red"
            c.lineWidth = 2
            c.strokeRect(followCameraX(this.parentObject.x - this.parentObject.width / 2), followCameraY(this.parentObject.y - this.parentObject.height / 2), this.parentObject.width, this.parentObject.height)
        }

        if (this.parentObject.shape == "circle") {
            c.strokeStyle = "red"
            c.lineWidth = 2
            c.beginPath()
            c.arc(followCameraX(this.parentObject.x), followCameraY(this.parentObject.y), this.parentObject.width / 2, 0, 2 * Math.PI)
            c.stroke()
        }
    }

    touchingEdge(e) {
        var x = this.parentObject.x - this.parentObject.width / 2
        var y = this.parentObject.y - this.parentObject.height / 2
        var w = this.parentObject.width
        var h = this.parentObject.height

        if (e === undefined) return(x < 0 || x + w > canvas.width || y < 0 || y+h > canvas.height) 

        if (e === "top") return y < 0
        if (e === "left") return x < 0
        if (e === "right") return x + w > canvas.width
        if (e === "bottom") return y + h > canvas.height
    }

    touchingObject(object, side) {

        if (side == "top") {
            return this.parentObject.y + this.parentObject.height / 2 > object.y - object.height / 2
        }
        if (side == "left") {
            return this.parentObject.x + this.parentObject.width / 2 > object.x - object.width / 2
        }
        if (side == "right") {
            return this.parentObject.x - this.parentObject.width / 2 < object.x + object.width / 2
        }
        if (side == "bottom") {
            return this.parentObject.y - this.parentObject.height / 2 < object.y + object.height / 2
        }
        
        return this.parentObject.x - this.parentObject.width / 2 < object.x + object.width / 2 && this.parentObject.x + this.parentObject.width / 2 > object.x - object.width / 2 && this.parentObject.y - this.parentObject.height / 2 < object.y + object.height / 2 && this.parentObject.y + this.parentObject.height / 2 > object.y - object.height / 2
    }
}