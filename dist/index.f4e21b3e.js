let bug; // Declare object
function setup() {
    createCanvas(windowWidth, windowHeight);
    // Create object
    bug = new illusion();
}
function draw() {
    background(0);
    bug.move();
    bug.display();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
// Jitter class
class illusion {
    constructor(x, y, xSpeed, ySpeed, color1, color2){
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.color1 = 255;
        this.color2 = 0;
    }
    move() {
        this.x;
        this.y;
    }
    display() {
        let c1 = color(255, 255, 255);
        let c2 = color(0, 0, 0);
        noStroke();
        // noStroke();
        // let c1 = color(219, 242, 39);
        // ellipse(this.x, this.y, this.diameter +(sin(frameCount/10)*50), this.diameter);
        // fill(c1);
        // let c2 = color(29, 242, 39);
        // ellipse(this.x+20, this.y+2, this.diameter +(sin(frameCount/10)*50), this.diameter);
        // fill(c2);
        // for(let i = 0; i < 10; i++) {
        //   circles[i] = new Circle(random(width), random(height), random(-3, 3), random(-3, 3));
        // }
        for(let i = 0; i < 1; i++){
            fill(c1);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 10), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 10), 300, 300);
            fill(c2);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 15), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 15), 275, 275);
            fill(c1);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 20), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 20), 250, 250);
            fill(c2);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 25), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 25), 225, 225);
            fill(c1);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 30), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 30), 200, 200);
            fill(c2);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 35), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 35), 175, 175);
            fill(c1);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 40), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 40), 150, 150);
            fill(c2);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 45), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 45), 125, 125);
            fill(c1);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 50), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 50), 100, 100);
            fill(c2);
            ellipse(windowWidth / 2 + sin(frameCount / (i + 50)) * (i + 55), windowHeight / 2 + sin(frameCount / (i + 50)) * (i + 55), 75, 75);
        }
    }
}

//# sourceMappingURL=index.f4e21b3e.js.map
