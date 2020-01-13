var video;
var button;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;

function setup() {
  createCanvas(1280, 960);
  background(51);
  video = createCapture(VIDEO);
  video.size(1280, 960);
  video.hide();
  // button = createButton('snap');
  // button.mousePressed(takesnap);
}

function draw() {
  var w = 1280;
  var h = 960;
  var x = 0;
  var y = 0;

  // How many cells fit in the canvas
  total = floor(width / w) * floor(height / h);

  snapshots[counter] = video.get();
  counter++;
  if (counter == total) {
    counter = 0;
  }

  for (var i = 0; i < snapshots.length; i++) {
    //tint(255, 50);
    var index = (i + frameCount*3) % snapshots.length;//multiplier seems to make glitchier as it goes higher
    image(snapshots[index], 0, 0, 1280, 960);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
  }
}