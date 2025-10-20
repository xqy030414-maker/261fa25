function setup() {
  createCanvas(400, 400);
  noStroke();
  background(240);
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  fill(200, 150, 100);
  rect(40, 60, 70, 70);

  fill(150, 100, 50);
  triangle(35, 60, 115, 60, 75, 20);

  fill(255);
  ellipse(60, 90, 25, 25);

  pop();
}

function draw() {
  background(240);

  let cols = 10;   // number of columns
  let rows = 10;   // number of rows
  let cellW = width / cols;
  let cellH = height / rows;

  let baseSize = 150; // base drawing roughly fits in 150x150 area
  let s = min(cellW, cellH) / baseSize * 1.2; // scale to fit cells

  let drawW = baseSize * s;
  let drawH = baseSize * s;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + (cellW - drawW) / 2;
      let y = j * cellH + (cellH - drawH) / 2;
      drawObject(x, y, s);
    }
  }

  noLoop();
}

