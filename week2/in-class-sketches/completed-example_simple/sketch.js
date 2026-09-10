

// Completed example

// Goals:
// Switch positions - three choices
// Change scale
// Sometimes rotate
// Change color pallettes

function setup() {
  createCanvas(500, 500);
  // generate drawing when project first opens
  generateDrawing();
}

function draw() {
  // empty for now 
}

function mousePressed(){
  generateDrawing();
}


function generateDrawing() {
// random properities

// random color palletes
// how is it randomized? there are more options than shapes and we incorporate random numbers
let colors = [[84, 222, 253],[255, 251, 250, random(50,255)], [0, 189, 157], [139, 215, 210], [73, 198, 229], [0,0,0,random(50, 255)], [0, random(189, 222), 250, random(20, 255)], [255, 105, 180, random(150, 255)], [255, 255, 0, random(100, 255)]];
let randomColors = shuffle(colors);

// random positions - pick from a list (3 options)
let positions = [[width*0.3, height*0.3], [width*0.7, height*0.3], [width*0.3, height*0.7]];
let shuffledPositions = shuffle(positions);

// random scale
let maxSize = 250;
let sizes = [0.25, 0.33, 0.5, 0.75, 1];
let shuffledSizes = shuffle(sizes);

// draw
background(randomColors[0]);
strokeWeight(10);
stroke(randomColors[1]);
noFill();

// rectangle
push();
rectMode(CENTER);
translate(shuffledPositions[0][0], shuffledPositions[0][1]);
scale(shuffledSizes[0]);

// sometimes rotate
// using probability...print p1 to console for more details
let p1 = random(); 
if (p1 > 0.7) {
  rotate(random(360));
  } else {
  rotate(0);
}
fill(randomColors[2]);
rect(0,0, maxSize);
pop();

// ellipse/circle
push();
ellipseMode(CENTER);
translate(shuffledPositions[1][0], shuffledPositions[1][1]);
scale(shuffledSizes[1]);
// can't see rotation for ellipse so I skipped
fill(randomColors[3]);
ellipse(0, 0, maxSize);
pop();

// triangle
push();
translate(shuffledPositions[2][0], shuffledPositions[2][1]);
scale(shuffledSizes[2]);

//sometimes rotate
let p2 = random(); // probability print p to console for more details
if (p2 > 0.7) {
  rotate(random(360));
} else {
  rotate(0);
}
let x1 = 0;
let y1 = 0-maxSize/2;
let x2 = 0-maxSize/2;
let y2 = maxSize-(maxSize/2);
let x3 = maxSize/2;
let y3 = maxSize-(maxSize/2);
fill(randomColors[4]);
triangle(x1, y1, x2, y2, x3, y3);
pop();

}


