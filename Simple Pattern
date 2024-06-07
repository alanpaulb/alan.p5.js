function setup() {
  createCanvas(400, 400);
  background(210);
  drawPattern();
}

function drawPattern() {
  let cols = 10;
  let rows = 5;
  let diameter = 50;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * diameter + diameter / 2;
      let y = j * diameter + diameter / 2;
      
      if ((i + j) % 2 === 0) {
        fill(255, 110, 40); // Red color
      } else {
        fill(0, 0, 25); // Blue color
      }
      
      ellipse(x, y, diameter, diameter);
    }
  }
}

function draw() {
  // Nothing needed here for now
}
