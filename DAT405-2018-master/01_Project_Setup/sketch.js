//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(60);

  //Preferences for the text (size, and alignment)
  textSize(40);
  textAlign(CENTER);

  fill(10, 60, 9);
  rect(width/2, height/2, 50, 50);
}
//Rendering function
function draw() {
  //Erase all canvas. Set the color to dark grey
  background(180, 0, 180);
  //Set the color of the text
  fill(56, 10, 109);
  //Set the text message as the frame count
  //Position text in the middle of the screen
  text("Frame Count:  " + frameCount, width/2, height/2-20);
  //Set the text message as the frame rate (round it to an integer)
  //Position text in the middle of the screen
  text("Frame Rate:  " + Math.round(frameRate()), width/2, height/2+20);
  //Top left corner shape position and color
  fill(0, 0, 255);
  ellipse(0, 0, 100, 100);
  //Top right corner shape position and color
  fill(255, 0, 0);
  ellipse(width, 0, 100, 100);
  //Bottom right corner shape position and color
  fill(0, 255, 0);
  ellipse(0, height, 100, 100);
  //Top right corner shape position and color
  fill(255, 255, 0);
  ellipse(width, height, 100, 100);
  //Draw a line
  line(18, 18, 380, 380)
  //Draw a line
  line(380, 20, 18, 379)
  //noLoop();
}
