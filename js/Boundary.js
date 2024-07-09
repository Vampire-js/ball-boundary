import { c } from "../main";
import { Vector2d } from "../utils";

export class Boundary {
    constructor() {
        this.start = new Vector2d(0, 0)
        this.end = new Vector2d(0, 0)
        this.slope = (this.end.y - this.start.y) / (this.end.x - this.start.x)
        this.dir = new Vector2d(0, 0)
    }
    draw() {
        c.moveTo(this.start.x, this.start.y)
        c.lineTo(this.end.x, this.end.y)
        c.strokeStyle = "white"
        c.stroke()
    }
    update() {
        this.draw()
    }
}