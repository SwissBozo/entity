class Shape {
    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizex = sizeX;
        this.sizey = sizeY;
        this.color = "red";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.sizex, this.sizey);
    }
}