// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let values = [];

const ARRAY_SIZE = 1000;

function setup() {
  noCanvas();
  noLoop();
  populateArray();
}

function populateArray(){
  for (let i = ARRAY_SIZE; i > 0; i--){
    values.push(int(random(99)));
  }
}

function binarySearch(n){
  while (values.length > 1){
    let index = int(values.length/2);
    if (values[index] === n){
      return true;
    }
    else{
      if (values[index] > n){
        //get rid of larger numbers
        values.splice(n);
      }
      else{
        //get rid of smaller numbers
        values.splice(0, int(values.length/2));
      }
    }
  }
  return false;
}

function selectionSort(){
  //one character at a time, find the minimum value and swap
  for (let index = 0; index < values.length - 1; index++){
    let min = values[index];
    let minLocation = index;

    for (let checkIndex = index + 1; checkIndex < values.length; checkIndex++){
      let cur = values[checkIndex];
      if (cur < min){
        min = cur;
        minLocation = checkIndex;
      }
    }
    //Swap the item at index with the item at minLocation
    let temp = values[index];
    values[index] = values[minLocation];
    values[minLocation] = temp;
  }
}


function draw() {
  print(values);
  selectionSort();
  print(values);
  print(binarySearch(52));
}
