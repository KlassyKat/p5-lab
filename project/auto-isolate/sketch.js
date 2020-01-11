var video;
var button;
var img;
var img2;
var varience = 2;

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
      var index = (x + y * img.width) * 4;
      // var index = (img.width - x + 1 + (y * img.width)) * 4;
      let r = img.pixels[index+0];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      let r2 = img2.pixels[index+0];
      let g2 = img2.pixels[index+1];
      let b2 = img2.pixels[index+2];

      noStroke();
      rectMode(CENTER);
      fill(r2,g2,b2);
      if(((r < (r2 - varience)) && (r > (r2 + varience))) && ((g < (g2 - varience)) && (g > (g2 + varience))) || ((b < (b2 - varience)) || (b > (b2 + varience)))) {
        rect(x,y,1,1);
      }else {
        fill(0,0,255)
        rect(x,y,1,1);
      }
    }
  }
}