# Documentation

## Phase 2

I recreated my house sketch in p5.js using basic shapes — a rectangle for the body, a triangle for the roof, and a circle for the window.

### Phase 3

I placed my drawing code into a drawObject(x, y, s) function and used translate() and scale() to move and resize the house.
Challenge: I struggled with the rectangle’s proportions at first because the width and height looked flipped. Later I realized the house should be wider than it is tall.

#### Phase 4

I used nested for loops to tile the house across the canvas, scaling each one to fit inside its cell.
Challenge: At first the houses were misaligned or too small, but after adjusting the cellW, cellH, and scale() values, the grid looked even and correct.