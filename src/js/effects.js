
// class Effects {
//     constructor(x, y, params) {
//         this.x = x;
//         this.y = y;
//         this.r = 10;
//         this.angle = 10;
//         this.speedX = 5;
//         this.speedY = 5;
//         this.detail = params.anim.detail;
//         this.strokeWeight = 0;
//         this.yolo1 = 50;
//         this.yolo2 = 40;
//         this.yolo3 = 30;
//         this.yolo4 = 20;
//         this.rays = -1;
//     }
//     draw() {

//         const effects = []
//         for (let i = 10; i > 0; i--) {
//             illusions.push(new Illusion(this.x, this.y, this.r * i, i))
//         }

//         illusions.forEach((illusion) => {
//             illusion.angle = this.angle;
//             illusion.speedX = this.speedX;
//             illusion.speedY = this.speedY;
//             illusion.detail = this.detail;
//             illusion.strokeWeight = this.strokeWeight;
//             illusion.yolo1 = this.yolo1;
//             illusion.yolo2 = this.yolo2;
//             illusion.yolo3 = this.yolo3;
//             illusion.yolo4 = this.yolo4;
//             illusion.rays = this.rays;
//             illusion.move();
//             illusion.display();

//         })
//     }
// }


// class Illusion {
//     constructor(x, y, r, id) {
//         this.x = x;
//         this.y = y;
//         this.r = r;
//         this.id = id;
//         this.detail = 10;
//         this.speedX = 5;
//         this.speedY = 5;
//         this.angle = 10;
//         this.strokeWeight = 0;
//         this.yolo1 = 50;
//         this.yolo2 = 40;
//         this.yolo3 = 30;
//         this.yolo4 = 20;
//         this.rays = -1;
//     }

//     move() {
//         this.x;
//         this.y;
//     }

//     display() {
//         let c1 = color(255, 255, 255);
//         let c2 = color(0, 0, 0);
//         //let c3 = color();
//         //noStroke();

//         // Grayscale integer value
//         strokeWeight(this.strokeWeight);
//         stroke(0);

//         this.r += Math.cos(this.id * this.angle * Math.PI / 180) * 50;

//         fill(c1);
//         //rotate(PI / 200);
//         ellipse(this.x + (sin(frameCount / (this.yolo1)) * (this.speedX)), this.y + (sin(frameCount / (this.speedY)) * (10)), this.r * 2, this.detail * 10);
//         fill(c2);
//         ellipse(this.x + (sin(frameCount / (this.yolo2)) * (this.speedX)), this.y + (sin(frameCount / (this.speedY)) * (10)), this.r * 2 - 10, this.detail * 10);
//         fill(c1);
//         ellipse(this.x + (sin(frameCount / (this.yolo3)) * (this.speedX)), this.y + (sin(frameCount / (this.speedY)) * (10)), this.r * 2 - 20, this.detail * 10);
//         fill(c2);
//         ellipse(this.x + (sin(frameCount / (this.yolo4)) * (this.speedX)), this.y + (sin(frameCount / (this.speedY)) * (10)), this.r * 2 - 30, this.detail * 10);
//     }
// }
