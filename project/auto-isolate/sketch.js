var video;
var button;
var img;
var img2;
var varience = 10;

function setup() {
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(640, 480);
  createCanvas(video.width, video.height);
  background(0,0,255);
  button = createButton('Go!');
  button.mousePressed(drawNew)
  video.mousePressed(takeSnapshot);
  img = video.get();
}

function takeSnapshot() {
  img = video.get();
  image(img,0,0,width,height)
}

function drawNew() {
  clear();
  img2 = video.get();
  img.loadPixels();
  img2.loadPixels();
  for(let x = 0; x <= img.width; x++) {
    for(let y = 0; y <= img.height; y++) {
      //Get a pixel and all surrounding pixels
      var index = (x + y * img.width) * 4;
      if (y > 0 && x > 0) {
        var indexUpLeft = ((x - 1) + (y - 1) * img.width) * 4;
      }
      if (y > 0) {
        var indexUp = (x + (y - 1) * img.width) * 4;
      }
      if (y > 0) {
        var indexUpRight = ((x + 1) + (y - 1) * img.width) * 4;
      }
      if (x < img.width) {
        var indexRight = ((x + 1) + y * img.width) * 4;
      }
      if (x < img.width && y < img.height) {
        var indexDownRight = ((x + 1) + (y + 1) * img.width) * 4;
      }
      if (y < img.height) {
        var indexDown = (x + (y + 1) * img.width) * 4;
      }
      if (x > 0 && y < img.height) {
        var indexDownLeft = ((x - 1) + (y + 1) * img.width) * 4;
      }
      // var index = (img.width - x + 1 + (y * img.width)) * 4;
      let r = img.pixels[index+0];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      let r2 = img2.pixels[index+0];
      let g2 = img2.pixels[index+1];
      let b2 = img2.pixels[index+2];
      var bright = (r+g+b)/3;
      var bright2 = (r2+g2+b2)/3;
      noStroke();
      rectMode(CENTER);
      fill(r2,g2,b2);
      if(((bright < (bright2 - varience)) || (bright > (bright2 + varience)))) {
      // if(((r < (r2 - varience)) || (r > (r2 + varience)))) {
        rect(x,y,1,1);
      }
    }
  }
}