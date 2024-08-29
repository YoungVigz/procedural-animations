import { HEIGHT, WIDTH } from "../config.js"
import ConstrainDistance from "./constrainDistance.js"

export default class PointChain {
    constructor(points) {
        this.points = points
        this.calculateDistance()
    }

    calculateDistance() {
        let x = (WIDTH/2) - (this.points[0].size/2)
        let y = (HEIGHT/2) - (this.points[0].size/2)

        this.points.forEach(point => {
            point.x = x
            point.y = y

            this.points.distance = (x + 30) + (point.size/2) 
            x = this.points.distance
        })
    }

    constrainPoints(x, y) {
        this.points[0].x = x
        this.points[0].y = y

        for(let i = 1; i < this.points.length; i++) {
            let nextConstrain = ConstrainDistance({x: this.points[i].x, y: this.points[i].y}, 
                                                  {x: this.points[i-1].x, y: this.points[i-1].y}, 
                                                  30 + (this.points[i].size/2) + (this.points[i-1].size/2))
            this.points[i].x = nextConstrain.x
            this.points[i].y = nextConstrain.y
        }
    }

    draw(ctx) {
        ctx.fillStyle = "#000000"

        this.points.forEach(point => {
            ctx.beginPath()
            ctx.arc(point.x, point.y, point.size, 0, 2 * Math.PI, false)      
            ctx.fill()
            ctx.stroke()  
        })
    }
}