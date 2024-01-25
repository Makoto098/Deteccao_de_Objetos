var img = ""; //tá diferente
let status = "";
objects = [];

function preload() {
  img = loadImage("dog_cat.jpg"); //tá diferente
}

function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO); //tá diferente
  video.size(380, 380); //tá diferente
  video.hide();
}

function start() {
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecção de objetos";
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  //tá diferente
  //tá diferente
  //tá diferente
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}
function draw() {
  image(video, 0, 0, 380, 380);

  if (status != "") {
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status: objeto detectado";
      document.getElementById("numberOfObjects").innerHTML =
        "Quantidade de objetos detectados: " + objects.length;
      fill(r, g, b); //tá diferente
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
      noFill();
      stroke(r, g, b); //tá diferente
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}
