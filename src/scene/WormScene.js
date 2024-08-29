import Scene from "./Scene.js"
import { WIDTH, HEIGHT } from "../config.js"
import PointChain from "../util/PointChain.js"
import Point from "../util/Point.js"

const movePoints = [{x:20, y: 30}, {x:40, y: 500}, {x:700, y: 350}, {x:800, y: 600}, {x:20, y: 30}]
let i = 0

export default class WormScene extends Scene {
    constructor(ctx) {
        super(ctx)
        this.mainPoint = new Point(0, 0, 10)
        this.points = new PointChain([this.mainPoint, new Point(0, 0, 15), new Point(0, 0, 10), new Point(0, 0, 10), new Point(0, 0, 10)])
    }

    draw() {
        this.ctx.fillStyle = "#FFFFFF"
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT)

        this.points.draw(this.ctx)

        if(this.mainPoint.x == movePoints[i].x && this.mainPoint.y == movePoints[i].y) {
            i++
        }

        if(this.mainPoint.x < movePoints[i].x) {
            this.mainPoint.x++
        } else if(this.mainPoint.x > movePoints[i].x) {
            this.mainPoint.x--
        } 
        
        if(this.mainPoint.y < movePoints[i].y) {
            this.mainPoint.y++
        } else if(this.mainPoint.y > movePoints[i].y) {
            this.mainPoint.y--
        }

        this.points.constrainPoints(this.mainPoint.x, this.mainPoint.y)
    }
}
