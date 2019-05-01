// Good ol' Farm Game

let tiles = []; // 0 - Blank, 1 - Chicken, 2 - Cow

const COLS = 5;
const ROWS = 5;
const TILE_SIZE = 100;

let playerX = 3;
let playerY = 4;

let level = [[0, 1, 0, 1, 0],
             [1, 1, 1, 0, 0],
             [0, 0, 1, 1, 0],
             [1, 0, 0, 1, 1],
             [0, 0, 1, 2, 1]];

function preload(){
  for (let c = 0; c < 3; c++){
    tiles.push(loadImage("assets/" + c + ".png"));
  }
}

function setup() {
  createCanvas(COLS * TILE_SIZE, ROWS * TILE_SIZE);
}

function renderGame(){
  for (let y = 0; y < ROWS; y++){
    for (let x = 0; x < COLS; x++){
      let index = level[y][x];
      image(tiles[index], x * TILE_SIZE, y * TILE_SIZE);
    }
  }
}

function swap(x1, y1, x2, y2){
  //Simple manipulation of the gameboard state - switch two adjacent tiles
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

// function keyPressed(){
//   if (keyCode === LEFT_ARROW){
//     swap(playerX, playerY, playerX - 1, playerY);
//     playerX --;
//   }
//   if (keyCode === RIGHT_ARROW){
//     swap(playerX, playerY, playerX + 1, playerY);
//     playerX ++;
//   }
//   if (keyCode === UP_ARROW){
//     swap(playerX, playerY, playerX, playerY - 1);
//     playerY --;
//   }
//   if (keyCode === DOWN_ARROW){
//     swap(playerX, playerY, playerX, playerY + 1);
//     playerY ++;
//   }
// }

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    if (playerX > 1){
      if (level[playerY][playerX - 1] === 0){
        swap(playerX, playerY, playerX - 1, playerY);
      }
      else if (level[playerY][playerX - 1] === 1){
        if (level[playerY][playerX - 2] === 0){
          swap(playerX - 1, playerY, playerX - 2, playerY);
          swap(playerX, playerY, playerX - 1, playerY);
          playerX --;
        }
      }
    }
  }

  if (keyCode === RIGHT_ARROW){
    if (playerX > 1){
      if (level[playerY][playerX + 1] === 0){
        swap(playerX, playerY, playerX + 1, playerY);
      }
      else if (level[playerY][playerX + 1] === 1){
        if (level[playerY][playerX + 2] === 0){
          swap(playerX + 1, playerY, playerX + 2, playerY);
          swap(playerX, playerY, playerX + 1, playerY);
          playerX ++;
        }
      }
    }
  }
}

function draw() {
  background(220);
  renderGame();
}
