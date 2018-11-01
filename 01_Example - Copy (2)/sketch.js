//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
let size = 50
function setup() {
  createCanvas(500,500);
  //noLoop();
  frameRate(10)
}

function draw() {

//Epilepsy Squares
stroke(96, 12, 124);
strokeWeight(5);

  for(let x = 0; x < 10; x++) {
    for(let i = 0; i<10; i++){
      fill(random(0), random(0), random(0));
    rect(size*x, size*i, size, size);
  }
}
  fill(0, 0, 0)
  background(96, 12, 124);
  for(let x = 0; x < 10; x++) {
    for(let i = 0; i < 10; i++) {
        fill(random(255), random(255), random(255));
    rect(size*x+12.5, size*i+12.5, size/2, size/2);
    //Console.log("X: " + x + "Y: " + y)
  }
}
  //textSize(22);
  //fill(184, 143, 214);
  //textSize(25)
  //text("Open the Developer > Javascript Console", 20, 200);
  //text("to see the nested - loop number values", 30, 300);
}
