

// Example 1

// Goals:
// two lines, one square
// random positions
// random rotations
// random color scheme

function setup() {
  createCanvas(500, 500);
  // "start screen"
  background(0,0,0);
  fill(255,255,255);
  textAlign(CENTER, CENTER);
  textSize(75);
  textStyle(BOLDITALIC);
  text("CLICK ME", width/2, height/2);
}
// remember: setup() only draws once, when the sketch first loads

function draw() {
  // empty for now 
}

function mousePressed(){
  // background - pink, red, blue, and purple
  let bgColor = [random(50, 255), 0, random(200, 255)]; 
  background(bgColor);
  // outline - mostly greens and blues
  let strokeColor = [0, random(20, 255), random(20, 255)];
  stroke(strokeColor);
  strokeWeight(10);

  // square
  push();
  rectMode(CENTER); // drawing from center  
  translate(random(100,400), random(100,400)); // random positions
  rotate(random(360)); // random rotation
  // different shades, mostly light tones
  fill(random(200,255), random(200, 255), random(0, 255));
  rect(0,0, random(100,200)); // random size - added for fun
  pop();

  // line 1
  push();
  translate(random(-100,100), random(-100,100));
  push();
  translate(width/2, height/2);
  rotate(random(360));
  line(-100, 100, 100, -100);
  pop();
  pop();

  // line 2
  push();
  translate(random(-100,100), random(-100,100));
  push();
  translate(width/2, height/2);
  rotate(random(360));
  line(-100, 100, 100, -100);
  pop();
  pop();
  //investigate: what happens when you switch translate and rotate? what happens to the sketch?
}

// Note: incorporates my code from 
// https://editor.p5js.org/melodyloveless/sketches/W97DQegQh
// and https://editor.p5js.org/melodyloveless/sketches/riQJhGMiA