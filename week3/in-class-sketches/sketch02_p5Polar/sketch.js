// Intro to p5Polar 
// Review documentation for more:
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(0); // black background

  // polarLine( angle, radius, [distance] )
  // polarLine( 130, 90, 0 ); // draws one line

  // lines
  push();
  setCenter(width/2, height/2);
  strokeWeight(15);
  for (i=0; i<4; i++) {
    stroke(55+(i*70), 120,10);
    polarLine(130*i, 100, 0 );
  }
  pop();

  // ellipses/circles
  // using a callback function to target properties
  noStroke();
  setCenter(width/2, height/2);
  polarEllipses(10, 0, 0, 175, function(...args) {
    fill(args[0]*90, args[0]*23, 0, args[0]*20);
    args[1] = (args[0]*1.1); // angle
    args[2] = args[0]*5; // width
    args[3] = args[0]*5; // height
    //console.log(args[0]); // increasing list of numbers 1-10
    return args;     
  });

}
