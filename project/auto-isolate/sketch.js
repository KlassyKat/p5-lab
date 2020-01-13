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
  image(img,0,0,width,height);
  var test = convertToHex(10,20,30);
  console.log(test);
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
      if ( y < img.height && y > 0 && x > 0 && x < img.width) {
        var indexUpLeft = ((x - 1) + (y - 1) * img.width) * 4;
        var indexUp = (x + (y - 1) * img.width) * 4;
        var indexUpRight = ((x + 1) + (y - 1) * img.width) * 4;
        var indexRight = ((x + 1) + y * img.width) * 4;
        var indexDownRight = ((x + 1) + (y + 1) * img.width) * 4;
        var indexDown = (x + (y + 1) * img.width) * 4;
        var indexDownLeft = ((x - 1) + (y + 1) * img.width) * 4;
        var indexLeft = ((x - 1) + y * img.width) * 4;

        var rUL = img.pixels[indexUpLeft+0];
        var gUL = img.pixels[indexUpLeft+1];
        var bUL = img.pixels[indexUpLeft+2];

        var rU = img.pixels[indexUp+0];
        var gU = img.pixels[indexUp+1];
        var bU = img.pixels[indexUp+2];

        var rUR = img.pixels[indexUpRight+0];
        var gUR = img.pixels[indexUpRight+1];
        var bUR = img.pixels[indexUpRight+2];

        var rR = img.pixels[indexRight+0];
        var gR = img.pixels[indexRight+1];
        var bR = img.pixels[indexRight+2];

        var rDR = img.pixels[indexDownRight+0];
        var gDR = img.pixels[indexDownRight+1];
        var bDR = img.pixels[indexDownRight+2];

        var rD = img.pixels[indexDown+0];
        var gD = img.pixels[indexDown+1];
        var bD = img.pixels[indexDown+2];

        var rDL = img.pixels[indexDownLeft+0];
        var gDL = img.pixels[indexDownLeft+1];
        var bDL = img.pixels[indexDownLeft+2];

        var rL = img.pixels[indexLeft+0];
        var gL = img.pixels[indexLeft+1];
        var bL = img.pixels[indexLeft+2];
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

function rgbToHex (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function convertToHex(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};