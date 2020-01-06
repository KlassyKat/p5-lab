var img;
function preload() {
  img = loadImage('image.png');
}

function setup() {
  createCanvas(windowWidth - windowWidth/10, windowHeight - windowHeight/10);
  let resizeVar = img.width / canvas.width;
  img.resize(img.width / resizeVar, img.height / resizeVar);
  background(51);
  img.loadPixels();
  for(let x = 0; x <= img.width; x++) {
    for(let y = 0; y <= img.height; y++) {
      var index = (x + y * img.width) * 4;
      // var index = (img.width - x + 1 + (y * img.width)) * 4;
      let r = img.pixels[index+0];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      // let a = img.pixels[index+3];
      noStroke();
      fill(color(r,g,b));
      // rectMode(CENTER);
      rect(x,y,1,1);
    }
  }
}

function draw() {

}



//FOUNDATION
// var img;

// function preload() {
//   img = loadImage('image.png');
// }

// function setup() {
//   createCanvas(windowWidth - windowWidth/10, windowHeight - windowHeight/10);
//   let resizeVar = img.width / canvas.width;
//   img.resize(img.width / resizeVar, img.height / resizeVar);
//   img.loadPixels();
//   for(let x = 0; x <= img.width; x++) {
//     for(let y = 0; y <= img.height; y++) {
//       var index = (x + y * img.width) * 4;
//       let r = img.pixels[index+0];
//       let g = img.pixels[index+1];
//       let b = img.pixels[index+2];
//       // let a = img.pixels[index+3];
//       img.set(x, y, color(r, g, b));
//     }
//   }
//   img.updatePixels();
// }

// function draw() {
//   background(51);
//   image(img, 0, 0);
// }


