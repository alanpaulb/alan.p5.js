function setup() {
  createCanvas(800, 400);
  background(220);
  drawTruck();
}

function drawTruck() {
  // Truck body
  fill(240, 740, 0); // Red color
  rect(150, 200, 300, 100); // Main body
  rect(400, 150, 100, 150); // Cabin

  // Windows
  fill(0, 150, 255); // Blue color
  rect(410, 160, 80, 50); // Front window

  // Wheels
  fill(0); // Black color
  ellipse(200, 320, 80, 80); // Rear wheel
  ellipse(400, 320, 80, 80); // Front wheel
  
  // Details
  fill(255); // White color
  rect(160, 250, 50, 30); // Rear door
  fill(0); // Black color
  rect(420, 220, 60, 20); // Front grill
  
  // Headlights
  fill(200, 200, 0); // Yellow color
  ellipse(490, 200, 20, 20); // Right headlight
  ellipse(490, 240, 20, 20); // Left headlight
}

function draw() {
  // Nothing needed here for now
}
