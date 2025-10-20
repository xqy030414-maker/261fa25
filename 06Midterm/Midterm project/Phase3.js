// Phase3.js
// House drawing function with translate(), scale(), push(), and pop().

function setup() {
  createCanvas(400, 400);
  noStroke();
  background(240);
}

function drawObject(x, y, s) {
  push();           // Save current state
  translate(x, y);  // Move to (x, y)
  scale(s);         // Scale the object

  // House body (square)
  fill(200, 150, 100);
  rect(40, 60, 70, 70);

  // Roof (triangle)
  fill(150, 100, 50);
  triangle(
    35, 60,   // left bottom
    115, 60,  // right bottom
    75, 20    // top
  );

  // Window (circle)
  fill(255);
  ellipse(60, 90, 25, 25);

  pop();            // Restore state
}

function draw() {
  background(240);

  // First house at top-left, normal scale
  drawObject(0, 0, 1);

  // Second house lower and slightly larger
  drawObject(200, 200, 1.5);

  noLoop(); // Stop continuous drawing
}

