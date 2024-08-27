import Scene from "./Scene.js"
import { WIDTH, HEIGHT } from "../config.js"
import Point from "../util/Point.js"
import ConstrainDistance from "../util/constrainDistance.js"

const ps = [new Point(WIDTH / 2 - 5, HEIGHT / 2 - 5, 10), new Point(WIDTH / 2 + 30, HEIGHT / 2 - 5, 10), new Point(WIDTH / 2 + 65, HEIGHT / 2 - 5, 10) , new Point(WIDTH / 2 + 100, HEIGHT / 2 - 5, 10)]

export default class SimpleConstrainScene extends Scene{
    constructor(ctx) {
        super(ctx)
        mouseTracking()
    }

    draw() {
        this.ctx.fillStyle = "#FFFFFF"
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT)

        ps.forEach(p => {
            p.draw(this.ctx, true) 
        })

        for(let i = 0; i < ps.length - 1; i++) {
            this.ctx.beginPath(); 
            this.ctx.moveTo(ps[i].x, ps[i].y);  
            this.ctx.lineTo(ps[i+1].x, ps[i+1].y)
            this.ctx.stroke(); 
        }
    }
}

function tellPos(e) {
    const rect = canvas.getBoundingClientRect()
    
    ps[0].x = e.clientX - rect.left
    ps[0].y = e.clientY - rect.top

    for(let i = 1; i < ps.length; i++) {
        let nextConstrain = ConstrainDistance({x: ps[i].x, y: ps[i].y}, {x: ps[i-1].x, y: ps[i-1].y}, ps[i].size + 35)
        ps[i].x = nextConstrain.x
        ps[i].y = nextConstrain.y
    }
}

const mouseTracking = () => canvas.addEventListener('mousemove', tellPos, false)
