let snake;
let food;
let gridSize = 20;
let score = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  snake = new Snake();
  foodLocation();
}

function draw() {
  background(220);
  snake.update();
  snake.display();
  if (snake.eat(food)) {
    score++;
    foodLocation();
  }
  fill(255, 0, 0);
  rect(food.x, food.y, gridSize, gridSize);
  textSize(16);
  fill(0);
  text('Score: ' + score, 10, 20);

  if (snake.endGame()) {
    textSize(32);
    fill(255, 0, 0);
    text('Game Over!', width / 2 - 100, height / 2);
    noLoop();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  }
}

function foodLocation() {
  let cols = floor(width / gridSize);
  let rows = floor(height / gridSize);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(gridSize);
}

class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(width / 2), floor(height / 2));
    this.xDir = 0;
    this.yDir = 0;
  }

  setDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xDir * gridSize;
    head.y += this.yDir * gridSize;
    this.body.push(head);
  }

  display() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, gridSize, gridSize);
    }
  }

  eat(pos) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x === pos.x && y === pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.body.push(head);
  }

  endGame() {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x > width - gridSize || x < 0 || y > height - gridSize || y < 0) {
      return true;
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x === x && part.y === y) {
        return true;
      }
    }
    return false;
  }
}
