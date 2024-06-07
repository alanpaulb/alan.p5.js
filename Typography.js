function setup() {
  createCanvas(800, 400);
  background(220);

  // Title
  textSize(64);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
  fill(0);
  text('WELCOME TO ', width / 2, height / 4);

  // Subtitle
  textSize(32);
  textFont('Arial');
  fill(50, 50, 200);
  text('BATHSPA', width / 2, height / 2);

  // Description
  textSize(16);
  textFont('Courier New');
  fill(100);
  text('UNIVERSITY', width / 2, (3 * height) / 4);
}

function draw() {
  // Nothing needed here for now
}
