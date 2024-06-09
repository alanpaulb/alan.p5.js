let mic, fft;

function setup() {
  createCanvas(windowWidth, 300);
  background(0);
  
  mic = new p5.AudioIn();
  mic.start();
  
  fft = new p5.FFT();
  fft.setInput(mic);
  
  noStroke();
}

function draw() {
  background(0);
  let centerX = width / 2;
  let centerY = height / 2;
  translate(centerX, centerY);
  fill(0);
  rect(-centerX, -centerY, centerX * 2, centerY * 2);
  
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let freq = spectrum[i];
    fill(255);
    let x = cos(i * i * i + freq / 200 * cos(i) + frameCount * sin(i) / 700) * centerX;
    let y = sin(i * i + frameCount * cos(i) / 900 + freq / 200 * sin(i * 2)) * centerY;
    triangle(x, y, x + 2 + freq / 2, y + 2 + freq / 2, x + 2 + freq / 2, y);
  }
  
  for (let lineId = 0; lineId < 100; lineId++) {
    let src = random(spectrum.length);
    let dest = random(spectrum.length);
    let srcFreq = spectrum[floor(src)];
    let destFreq = spectrum[floor(dest)];
    
    stroke(0, 0, 56 + cos(lineId + frameCount / 99) * 80);
    strokeWeight(8);
    if (srcFreq > 30 && destFreq > 30) {
      let srcX = cos(src * src * src + srcFreq / 200 * cos(src) + frameCount * sin(src) / 700) * centerX;
      let srcY = sin(src * src + frameCount * cos(src) / 900 + srcFreq / 200 * sin(src * 2)) * centerY;
      let destX = cos(dest * dest * dest + destFreq / 200 * cos(dest) + frameCount * sin(dest) / 700) * centerX;
      let destY = sin(dest * dest + frameCount * cos(dest) / 900 + destFreq / 200 * sin(dest * 2)) * centerY;
      line(srcX, srcY, destX, destY);
    }
    noStroke();
  }
}
