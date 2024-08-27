import Scene from "./Scene.js";
import { WIDTH, HEIGHT } from "../config.js";
import Point from "../util/Point.js";
import ConstrainDistance from "../util/constrainDistance.js";

const p = new Point(WIDTH / 2 - 5, HEIGHT / 2 - 5, 10)
const pAround = new Point(WIDTH / 2 - 5, HEIGHT / 2 - 5, 75)

export default class SimpleConstrainScene extends Scene{
    constructor(ctx) {
        super(ctx)
        mouseTracking()
    }

    draw() {
        this.ctx.fillStyle = "#FFFFFF"
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT)
        p.draw(this.ctx, true) 
        pAround.draw(this.ctx, false)
    }
}

function tellPos(e) {
    const rect = canvas.getBoundingClientRect();
    pAround.x = e.clientX - rect.left;
    pAround.y = e.clientY - rect.top;

    let constrainedPos = ConstrainDistance({ x: p.x, y: p.y }, { x: pAround.x, y: pAround.y }, pAround.size);

    p.x = constrainedPos.x;
    p.y = constrainedPos.y;
}

const mouseTracking = () => canvas.addEventListener('mousemove', tellPos, false);
