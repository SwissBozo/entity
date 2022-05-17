let bug; // Declare object
function setup() {
    createCanvas(windowWidth, windowHeight);
    // Create object
    bug = new Jitter();
}
function draw() {
    background(4, 41, 64);
    bug.move();
    bug.display();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
// Jitter class
class Jitter {
    constructor(){
        // this.x = random(width);
        // this.y = random(height);
        this.x = windowWidth / 2;
        this.y = windowHeight / 2;
        this.color = 39;
        this.diameter = 100;
        this.speed = 1;
    }
    move() {
        this.x;
        this.y;
    }
    display() {
        noStroke();
        let c1 = color(219, 242, 39);
        ellipse(this.x, this.y, this.diameter + sin(frameCount / 10) * 50, this.diameter);
        fill(c1);
        let c2 = color(29, 242, 39);
        ellipse(this.x + 20, this.y + 2, this.diameter + sin(frameCount / 10) * 50, this.diameter);
        fill(c2);
    }
}

//# sourceMappingURL=index.6f1d24bb.js.map
