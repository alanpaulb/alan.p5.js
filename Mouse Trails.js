let trails = []; // Array to store trail positions

function setup() {
  createCanvas(800, 400);
  background(220);
}

function draw() {
  background(220, 220, 220, 25); // Slightly transparent background for fading effect

  // Capture the current mouse position
  let position = createVector(mouseX, mouseY);
  trails.push(position);

  // Limit the number of trail positions stored
  if (trails.length > 50) {
    trails.shift();
  }

  // Draw the trails
  noStroke();
  fill(0, 10, 25, 10); // Semi-transparent blue color
  for (let i = 0; i < trails.length; i++) {
    let pos = trails[i];
    ellipse(pos.x, pos.y, 200, 20); // Draw circles at each trail position
  }
}
