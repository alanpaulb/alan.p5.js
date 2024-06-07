function setup() {
  createCanvas(800, 400);
  background(220);
  drawAlien();
}

function drawAlien() {
  // Body
  fill(100, 20, 100); // Green color
  ellipse(400, 300, 10, 150); // Main body

  // Head
  ellipse(400, 200, 150, 100); // Head

  // Eyes
  fill(255); // White color
  ellipse(370, 180, 40, 60); // Left eye white part
  ellipse(430, 180, 40, 60); // Right eye white part
  
  fill(0); // Black color
  ellipse(370, 180, 20, 40); // Left eye pupil
  ellipse(430, 180, 20, 40); // Right eye pupil

  // Antennae
  stroke(10, 200, 10); // Green color
  strokeWeight(8);
  line(370, 120, 350, 80); // Left antenna
  line(430, 120, 450, 80); // Right antenna
  
  fill(100, 200, 100); // Green color
  ellipse(350, 80, 20, 20); // Left antenna tip
  ellipse(450, 80, 20, 20); // Right antenna tip

  // Mouth
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(400, 220, 80, 40, 0, PI); // Mouth

  // Arms
  stroke(100, 200, 100); // Green color
  strokeWeight(15);
  line(350, 300, 250, 250); // Left arm
  line(450, 300, 550, 250); // Right arm

  // Legs
  line(380, 375, 360, 450); // Left leg
  line(420, 375, 440, 450); // Right leg
}

function draw() {
  // Nothing needed here for now
}
