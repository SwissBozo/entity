// import"static/json/entity.json";

// Declare object
let illusions = [];
// let effects = [];
let positions;
let anim, anim2, anim3, anim4, anim5, anim6;
let song;

// DISABLE RIGHT CLICK
// document.addEventListener('contextmenu', event => event.preventDefault());

function preload() {
  song = loadSound('sound/horror.wav');
}

function sended() {
  console.log('Send');
  send("Entities/" + window.uid, { anim: anim })
  alert("Merci, votre entité à été sauvegardée et envoyée sur le serveur.")
  console.log('Sended');
}

function windowResized() {
  if (windowWidth < 550) {
    size = 10;
  } else {
    size = 100;
  }
}

// LOAD JSON FILE
// FETCH JSON
let reglages;
fetch("../../static/json/entity.json")
  .then(data => data.json())
  .then((json) => {
    console.log(json);

    reglages = json;
    const keys = Object.keys(json["Entities"]);

    keys.forEach((user) => {
      const params = json[("Entities")][user];

    });
  });

// SETUP
function setup() {

  song.loop();

  // CANVAS
  createCanvas(windowWidth, windowHeight);

  // POST 5 EFFECTS
  addEffects(
    noiseDisplacement(),
    celShade(30, 0, 0.9, 0.03),
    godrays({ samplerNum: -1, lightPos: nMouse(), density: 0.5 }),
    channel(-1, op(pos(), "+", op(get2Comp(fColor(), "rg"), "*", op(nMouse(), "-", 0.5))))
  );


  setTimeout(() => {
    anim = new Animation(windowWidth / 2, windowHeight / 3, reglages[("Entities")]["x99OVBZOfcbMYYgB7UuS4tGAkem2"]);

    //DAT.GUI

    const gui = new dat.GUI();
    const ill = gui.addFolder("Entité ↕");
    ill.add(anim, "r", 5, 15);
    ill.add(anim, "angle", 0, 360);
    ill.add(anim, "speedX", 0, 5);
    ill.add(anim, "speedY", 0, 5);
    ill.add(anim, "detail", 0, 15);
    ill.add(anim, "strokeWeight", 0, 5);

    //OPEN FOLDER
    ill.open();

    // P5 BUTTON
    button = createButton('Envoyer votre entité');
    button.position(0, 0);
    button.mousePressed(sended);
  },

    1000);

}

// DRAW

function draw() {
  background(0);
  if (anim) anim.draw(windowWidth / 2, windowHeight / 2);
}

// WINDOW RESIZE

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}