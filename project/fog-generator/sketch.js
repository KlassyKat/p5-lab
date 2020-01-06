//Get image
var img;

//Flow field enviroment variables
var inc = 0.1;
var scl = 10;
var rows, cols;

//Particle variables
var particles = [];
var flowfield = [];


function preload() {
  img= loadImage('image.png');
}

function setup() {
  //Create Proper canvas size
  var resizeVar = img.width / (windowWidth + windowWidth/10);
  img.resize(img.width * resizeVar, img.height * resizeVar);
  createCanvas(img.width, img.height);

  //Create particles
  for(var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }

  //Set canvas background
  background(20);
  image(img, 0, 0);
}


function draw() {
  //Creating moving value of y axis
  var yoff = 0;
  //Draw vector field
  for (let y = 0; y < rows; y++) {
    //Creating moving value of x axis
    var xoff = 0;
    for ( let x = 0; x < cols; x++) {
      //Variable for indexing points in the array
      var index = x + y * cols;
      //Create 3 dimensional perlin noise array
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      //Create vector
      var v = p5.Vector.formAngle(angle);
      v.setMag(1);
      //Set values of flowfield
      flowfield[index] = v;
      //Iterate x; Alter inc to change magnitude of directional change
      xoff += inc;
    }
    yoff += inc;
    zoff += 0.0003;
  }

  //draw particles
  for (let i =0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}