// Intro to Interactivity
// Incorporating transformations (scale...rotate...translate...etc)
// Incorporate randomness
// "When I press my mouse, something will happen"

// First: let's generate a random number everytime I press my mouse

// global variables, for storing my random numbers
// initialized at top, defined within setup() --- why? bc we are using random()...needs to be within another p5.js function
let r; // changes the amount of red in background and the size of a shape
let r2; // amount of rotation

function setup() {
  createCanvas(400, 400);
  // when sketch first opens, generate random numbers
  r = random(100, 255);
  r2 = random(360);
  //console.log(r);
}

function draw() {
  background(r, 0, 0);
  rectMode(CENTER);
  strokeWeight(3);

  // first square (yellow)
  // combine rotate() with translate() and push() and pop()
  // push() and pop() isolates our transformations (rotate...translate...)
  push();
  // translate() shifts our origin (where things are drawn/oriented around)
  translate(width/2, height/2); 
  rotate(r2); // 0-360
  fill(255,255,0);
  rect(0,0, r);
  pop();

  // second square (white)
  fill(255,255,255);
  rect(300, 300, 150);
}

// when user presses mouse, generate a new random number
function mousePressed() {
  r = random(100, 255);
  r2 = random(360);
}

/*
For more information, study:
- https://docs.google.com/document/d/1pIEKKYwrDEGjKNYOve-6yeayMT8ZaW38qoUthIR4SfI/edit?tab=t.0#heading=h.9fok8y57y9l7
- https://docs.google.com/document/d/1cZSjQKUFEvIx_SggiNEJtbtijyvhf00TNkOXSPxyBx0/edit?tab=t.0#heading=h.u205jcv2y60f

Ideas for extending:
- Add more of shapes
- Change the color of the shapes
- Rotate both/all shapes
- Changes the scale/size of the shapes
*/