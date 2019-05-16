// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let v;
const GRID_SPACING = 10;

function setup() {
  createCanvas(640, 480);
  v = createCapture(VIDEO);
}

function avgPixel(pos){ // pos is index of the R for the current pixel
  return (pixels[pos] + pixels[pos + 1] + pixels[pos + 2]) / 3;
}

function setPixelColour(pos, r, g, b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function popArt(){
  for (let i = 0; i < pixels.length; i += 4){
    if (avgPixel(i) > 200){
      setPixelColour(i, 200, 255, 200);
    }
    else if (avgPixel(i) > 120){
      setPixelColour(i, 100, 250, 255);
    }
    else if (avgPixel(i) > 60){
      setPixelColour(i, 255, 255, 5);
    }
    else{
      setPixelColour(i, 60, 100, 0);
    }
  }
}

function drawCharacter(x, y, avg){
  textSize(GRID_SPACING);
  fill(255);
  noStroke();
  if (avg > 200){
    text("X", x, y);
  }
  else if(avg > 100){
    text("-", x, y);
  }
  else if(avg > 40){
    text(".", x, y);
  }
}

function pixelShapes(){
  for (let x = 0; x < v.width; x+= GRID_SPACING){
    for (let y = 0; y < v.height; y+= GRID_SPACING){
      let location = (x + y*v.width) * 4;
      let avg = avgPixel(location);

      // fill(pixels[location], pixels[location+1], pixels[location+2]);
      // ellipse(x, y, GRID_SPACING, GRID_SPACING);

      drawCharacter(x, y, avg);

    }
  }
}

function draw() {
  background(0);
  v.loadPixels();
  popArt();
  v.updatePixels();
  image(v, 0, 0);
}
