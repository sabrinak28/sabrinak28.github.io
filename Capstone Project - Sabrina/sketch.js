// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backgroundImg;

let wImg = [];
let qImg = [];
let hImg = [];
let iImg = [];
let aImg = [];
let bImg = [];
let menus = [];

let whisper;
let quill;
let hatch;
let imellia;
let ace;
let boss;

let wChoice = 0;
let qChoice = 0;
let hChoice = 0;
let iChoice = 0;
let aChoice = 0;
let bChoice = 0;

let menu;

let startAttack;
let attacking = false;

let turn = 1;
let endgame = false;


function preload(){

  backgroundImg = loadImage("assets/bg.jpg");

  for (let i = 1; i < 5; i++){
    wImg.push(loadImage("assets/Whisper" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    qImg.push(loadImage("assets/Quill" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    hImg.push(loadImage("assets/Hatch" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    iImg.push(loadImage("assets/Imellia" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    aImg.push(loadImage("assets/Ace" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    bImg.push(loadImage("assets/boss" + i + ".png"));
  }

  for (let i = 1; i < 10; i++){
    menus.push(loadImage("assets/menu" + i + ".jpg"));
  }
}

class Whisper{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.sDamage = 50;
    this.aDamage = 100;
    this.health = 200;
    this.alive = true;
  }

  display(){

    if (this.health > 0){
      image(wImg[0], this.x, this.y);
    }
    else{
      image(wImg[3], this.x, this.y);
    }
  }

  attack(){
    background(backgroundImg);
  
    quill.display();
    hatch.display();
    imellia.display();
    ace.display();
  
    boss.display();
    if (this.x < width/2.6){
      this.x += 4;
    }
    if (this.y < height/1.8){
      this.y += 4;
    }
    whisper.display();

    if (frameCount - startAttack > 120){
      image(wImg[1], this.x, this.y);
      return true;
    }
    else{
      return false;
    }

  }

  dealDamage(){
    if (wChoice === 1){
      return this.aDamage;
    }
    else{
      return this.sDamage;
    }
  }

  shoot(){
    image(wImg[2], this.x, this.y);
  }


  getDamaged(hp){
    if (this.alive){
      this.health = this.health - hp;
    }
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
    }
  }

  getGuarded(){

  }

  status(){
    if (this.health < 1){
      this.alive = false;
    }
    return this.health;
  }
}

class Quill{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.sDamage = 50;
    this.heal = 100;
    this.health = 175;
    this.alive = true;
  }

  display(){
    image(qImg[0], this.x, this.y);
  }

  getDamaged(hp){
    this.health = this.health - hp;
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
    }
  }

  getGuarded(){

  }

  status(){
    if (this.health < 1){
      this.alive = false;
    }
    return this.health;
  }
  
}

class Hatch{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.damage = 50;
    this.defend = 75;
    this.health = 300;
    this.alive = true;
  }

  display(){
    image(hImg[0], this.x, this.y);
  }
  
  getDamaged(hp){
    this.health = this.health - hp;
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
    }
  }

  getGuarded(){

  }

  status(){
    if (this.health < 1){
      this.alive = false;
    }
    return this.health;
  }

}

class Imellia{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.damage = 50;
    this.heal = 100;
    this.health = 150;
    this.alive = true;
  }

  display(){
    image(iImg[0], this.x, this.y, 0, height/6);
  }
  
  getDamaged(hp){
    this.health = this.health - hp;
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
    }
  }

  getGuarded(){

  }

  status(){
    if (this.health < 1){
      this.alive = false;
    }
    return this.health;
  }
  
}

class Ace{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.sDamage = 50;
    this.aDamage = 100;
    this.health = 250;
    this.alive = true;
  }

  display(){
    image(aImg[0], this.x, this.y);
  }

  getDamaged(hp){
    this.health = this.health - hp;
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
    }
  }

  getGuarded(){

  }

  status(){
    if (this.health < 1){
      this.alive = false;
    }
    return this.health;
  }
  
}

class Boss{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.mDamage1 = 175;
    this.mDamage2 = 125;
    this.aDamage1 = 50;
    this.aDamage1 = 25;
    this.heal = 250;
    this.health = 2000;
    this.alive = true;
  }

  display(){

    if (bChoice === 0){
      if (this.health > 0){
        image(bImg[0], this.x, this.y);
      }
      else{
        image(bImg[3], this.x, this.y);
      }
    }
  }

  getDamaged(hp){
    if (this.alive){
      this.health = this.health - hp;
    }
  }

  status(){
    if (this.health < 1){
      this.alive = false;
    }
    return this.health;
  }

}

class Menu{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
  }

  display(t){
    image(menus[t], this.x, this.y);
  }

  hText(health){
    textSize(width/50);
    fill(255);
    text(health, this.x + width/12, this.y + height/13);
  }
}

function firstRound(){

  background(backgroundImg);
  whisper.display();
  quill.display();
  hatch.display();
  imellia.display();
  ace.display();

  boss.display();


  if(whisper.status() + quill.status() + hatch.status() + imellia.status() + ace.status() > 0){

    //Whisper's turn:----------

    if (turn === 1){
      if (whisper.status() > 0){
        menu.display(0);
        menu.hText(whisper.status());
        if (wChoice !== 0){
          print(wChoice);
          turn ++;
        }
      }
      else{
        turn ++;
      }
    }

    //-------------------------

    //Quill's turn:------------------

    if (turn === 2){
      if (quill.status() > 0){
        menu.display(1);
        menu.hText(quill.status());
        if (qChoice !== 0){
          if (qChoice === 2){
            turn ++;
          }
          else{
            turn += 2;
          }
        }
      }
      else{
        turn += 2;
      }
    }

    if (turn === 3){
      menu.display(2);
      menu.hText(quill.status());
      if (qChoice !== 2){
        turn ++;
      }
    }

    //-------------------------------

    //Hatch's turn:------------------

    if (turn === 4){
      if (hatch.status() > 0){
        menu.display(3);
        menu.hText(hatch.status());
        if (hChoice !== 0){
          if (hChoice === 2){
            turn ++;
          }
          else{
            turn += 2;
          }
        }
      }
      else{
        turn += 2;
      }
    }

    if (turn === 5){
      menu.display(4);
      menu.hText(hatch.status());
      if (hChoice !== 2){
        turn ++;
      }
    }

    //--------------------------------

    //Imellia's turn:-----------------

    if (turn === 6){
      if (imellia.status() > 0){
        menu.display(5);
        menu.hText(imellia.status());
        if (iChoice !== 0){
          if (iChoice === 2){
            turn ++;
          }
          else{
            turn += 2;
          }
        }
      }
      else{
        turn += 2;
      }
    }

    if (turn === 7){
      menu.display(6);
      menu.hText(imellia.status());
      if (iChoice !== 2){
        turn ++;
      }
    }

    //-------------------------------------

    //Ace's Turn:----------------------

    if (turn === 8){
      if (ace.status() > 0){
        menu.display(7);
        menu.hText(ace.status());
        if (aChoice !== 0){
          turn ++;
        }
      }
      else{
        turn ++;
      }
    }

    //---------------------------------

  }
}

function keyPressed(){
  if (turn === 1){
    if (key === "1"){
      wChoice = 1;
    }
    if (key === "2"){
      wChoice = 2;
    }
  }

  if (turn === 2){
    if (key === "1"){
      qChoice = 1;
    }
    if (key === "2"){
      qChoice = 2;
      print(qChoice);
    }
  }

  if (turn === 3){
    if (key === "1"){
      qChoice = 3;
    }
    if (key === "2"){
      qChoice = 4;
    }
    if (key === "3"){
      qChoice = 5;
    }
    if (key === "4"){
      qChoice = 6;
    }
    if (key === "5"){
      qChoice = 7;
    }
  }

  if (turn === 4){
    if (key === "1"){
      hChoice = 1;
    }
    if (key === "2"){
      hChoice = 2;
    }
  }

  if (turn === 5){
    if (key === "1"){
      hChoice = 3;
    }
    if (key === "2"){
      hChoice = 4;
    }
    if (key === "3"){
      hChoice = 5;
    }
    if (key === "4"){
      hChoice = 6;
    }
    if (key === "5"){
      hChoice = 7;
    }
  }

  if (turn === 6){
    if (key === "1"){
      iChoice = 1;
    }
    if (key === "2"){
      iChoice = 2;
    }
  }

  if (turn === 7){
    if (key === "1"){
      iChoice = 3;
    }
    if (key === "2"){
      iChoice = 4;
    }
    if (key === "3"){
      iChoice = 5;
    }
    if (key === "4"){
      iChoice = 6;
    }
    if (key === "5"){
      iChoice = 7;
    }
  }

  if (turn === 8){
    if (key === "1"){
      aChoice = 1;
    }
    if (key === "2"){
      aChoice = 2;
    }
  }
}

function secondRound(){

  background(backgroundImg);
  
  whisper.display();
  quill.display();
  hatch.display();
  imellia.display();
  ace.display();

  boss.display();

  menu.display(8);

  if (wChoice > 0){
    if (wChoice === 1){
      if (attacking === false){
        attacking = true;
        startAttack = frameCount;
      }
      
      if (whisper.attack()){
        boss.getDamaged(100);
        wChoice = 0;
        print(boss.status());
      } 
    }

    else{
      whisper.shoot();
    }
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  whisper = new Whisper(width/7.5, height/6.5);
  quill = new Quill(width/25, height/4);
  hatch = new Hatch(width/7.5, height/2.7);
  imellia = new Imellia(width/25, height/2);
  ace = new Ace(width/7.5, height/1.6);

  boss = new Boss(width/2, height/2);

  menu = new Menu(width/7,height/1.15);

}

function draw() {


  if (endgame === false){

    if (turn === 9){
      secondRound();
    }
    else{
      firstRound();
    }
  }
}
