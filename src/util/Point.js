export default class Point {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size
    }

    draw(ctx, fillStatus) {
        ctx.fillStyle = "#000000"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false)      

        if(fillStatus) 
            ctx.fill()

        ctx.stroke()
    }
    
}