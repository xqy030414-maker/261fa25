// Phase2.js
// This code draws a simple house with three shapes: rectangle, triangle, and circle.

function setup() {
  createCanvas(150, 150);
  noStroke();
  background(240);
}

function draw() {
  background(240);

  // House body (square)
  fill(200, 150, 100);
  rect(40, 60, 70, 70);

  // Roof (triangle)
  fill(150, 100, 50);
  triangle(
    35, 60,  // left bottom
    115, 60, // right bottom
	  75, 20   // top
   );

  // Window (circle)
  fill(255);
  ellipse(60, 90, 25, 25);
}
