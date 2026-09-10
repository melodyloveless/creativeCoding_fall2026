/// My First Drawing
/// For more on drawing/basics, review: https://docs.google.com/document/d/1r352w4h9XX7a417j7inq-P-9x2I4cjT0idrGr0o9QXI/edit?tab=t.0#heading=h.4z06biks8g3k

function setup() {
  createCanvas(500, 500);
  // This is a comment - text behind the slashes (//) are ignored
  // background(255,0,255);
}

function draw() {
background(255,0,255);
// sizes of shapes
 let s1 = 130; // white
 let s2 = 200; // yellow
 // below is an array (list of values)
 let s3 = [240, 100];
 console.log(s3);
 
  // white circle
  fill(255,255,255);
  ellipse(350, 350, s1);
  // yellow circle
  fill(255,255,0);
  ellipse(250, 250, s2);
  // green rectangle
  rectMode(CENTER);
  fill(0,255,0);
  rect(250,150, s3[0], s3[1]);
  // adding text
  textSize(100);
  fill(0,0,255);
  textAlign(CENTER);
  // using system variables width and height
  // position of text is relative to canvas size (adaptable)
  let greeting = "hello world";
  text(greeting, width/2, height/2);
}