var video;
var button;
var img;
var counter = 0;
var vScale = 4;
var total;

function setup() {
  pixelDensity(1);
  createCanvas(640, 480);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.mousePressed(takeSnapshot);
  img = video.get();
}

function takeSnapshot() {
  img = video.get();
}

function draw() {
  // image(snapshots[0], 0, 0, 640, 480);
  img.loadPixels();
  // image(img,0,0,640,480)
  for(let x = 0; x <= img.width; x++) {
    for(let y = 0; y <= img.height; y++) {
      var index = (x + y * img.width) * 4;
      // var index = (img.width - x + 1 + (y * img.width)) * 4;
      let r = img.pixels[index+0];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      noStroke();
      fill(color(r,g,b));
      // rectMode(CENTER);
      rect(x,y,1,1);
    }
  }
}