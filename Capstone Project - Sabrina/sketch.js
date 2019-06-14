// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backgroundImg;
let kImg;
let buImg;
let sBall;

let music = []; 
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
let knife;
let bullet;
let sbArray = [];
let sbAmount = 5;

let startAttack;
let attacking = false;
let defence = 0;
let defended = false;
let musicChange = true;

let turn = 1;
let endgame = false;


function preload(){

  backgroundImg = loadImage("assets/bg.jpg");
  kImg = loadImage("assets/knife.png");
  buImg = loadImage("assets/bullet.png");
  sBall = loadImage("assets/darkMagic1.png");

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

  for (let i = 1; i < 12; i++){
    menus.push(loadImage("assets/menu" + i + ".jpg"));
  }

  for (let i = 1; i < 3; i++){
    music.push(loadSound("assets/music" + i + ".mp3"));
  }
}

class Whisper{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.sDamage = 100;
    this.aDamage = 125;
    this.health = 200;
    this.alive = true;
    this.attackPhase = 1;
    this.criticalHit = 0;
  }

  display(){
    if (this.health > 0){
      image(wImg[0], this.x, this.y);
    }
    else{
      image(wImg[3], this.x, this.y + height/7);
    }
  }

  attack(){
    background(backgroundImg);
  
    quill.display();
    hatch.display();
    imellia.display();
    ace.display();
  
    boss.display();
    if (this.attackPhase === 1){
      if (this.x < width/2.6){
        this.x += 4;
      }
      if (this.y < height/1.8){
        this.y += 4;
      }
      whisper.display();

      if (frameCount - startAttack > 120){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(wImg[1], this.x, this.y);
      fill(255, 0, 0);
      text("-" + this.aDamage, width/2, height/2);
      if (frameCount - startAttack > 240){
        this.attackPhase = 3;
      }
      return false;
    }
    if (this.attackPhase === 3){
      if (this.x > width/5){
        this.x -= 4;
      }
      if (this.y > height/6.5){
        this.y -= 4;
      }
      whisper.display();

      if (frameCount - startAttack > 360){
        this.attackPhase = 1;
        return true;
      }
    }
  }

  shoot(){
    background(backgroundImg);
    quill.display();
    hatch.display();
    imellia.display();
    ace.display();
    boss.display();

    if (this.attackPhase === 1){
      //Prepare knife
      whisper.display();
      knife = new Knife(width/5, height/6.5);
      
      if (frameCount - startAttack > 2){
        this.attackPhase = 2;
      }
      return false;
    }
  
    if (this.attackPhase === 2){

      image(wImg[2], this.x, this.y);
      knife.throw();
      
      if (frameCount - startAttack > 100){
        this.criticalHit = int(random(1,4));
        print(this.criticalHit);
        this.attackPhase = 3;
      }
      return false;
    }
    if (this.attackPhase === 3){
      image(wImg[2], this.x, this.y);
      fill(255, 0, 0);
      if (this.criticalHit === 2){
        text("-" + (this.sDamage + 50), width/2, height/2);
        fill(255, 255, 0);
        text("CRITICAL HIT", width/2, height/2 - height/20);
      }
      else{
        text("-" + this.sDamage, width/2, height/2);
      }
    }
    if (frameCount - startAttack > 140){
      this.attackPhase = 1;
      return true;
    }
  }

  celebrate(){
    if (whisper.status() > 0){
      if (this.attackPhase === 1){
        if (this.y > height/20){
          this.y -= 5;
        }
        if (this.y <= height/20){
          this.attackPhase = 2;
        }
      }
      if (this.attackPhase === 2){
        if (this.y < height/6.5){
        this.y += 5;
        }
        if (this.y >= height/6.5){
          this.attackPhase = 1;
        }
      }
    }
    whisper.display();
  }

  dealDamage(){
    if (wChoice === 1){
      return this.aDamage;
    }
    else{
      if (this.criticalHit === 2){
        return this.sDamage + 50;
      }
      else{
        return this.sDamage;
      }
    }
  }

  getDamaged(hp){
    if (this.alive){
      this.health = this.health - hp;
    }
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
      if (this.health > 200){
        this.health = 200;
      }
    }
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
    this.sDamage = 100;
    this.sHeal = 75;
    this.health = 175; //175
    this.alive = true;
    this.attackPhase = 1;
  }

  display(){
    if (this.health > 0){
      image(qImg[0], this.x, this.y);
    }
    else{
      image(qImg[3], this.x, this.y + height/7);
    }
  }

  spell(){
    background(backgroundImg);
  
    whisper.display();
    hatch.display();
    imellia.display();
    ace.display();
  
    boss.display();
    if (this.attackPhase === 1){
      image(qImg[1], this.x, this.y);
      if (frameCount - startAttack > 60){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(qImg[1], this.x, this.y);
      fill(255, 0, 0);
      text("-" + this.sDamage, width/2, height/2);
    }
    if (frameCount - startAttack > 160){
      this.attackPhase = 1;
      return true;
    }
  }

  heal(){
    background(backgroundImg);
  
    whisper.display();
    hatch.display();
    imellia.display();
    ace.display();
  
    boss.display();
    if (this.attackPhase === 1){
      image(qImg[2], this.x, this.y);
      if (frameCount - startAttack > 60){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(qImg[2], this.x, this.y);
      fill(0, 255, 255);
      if (qChoice === 3){
        text("+" + this.sHeal, width/5, height/6.5);
      }
      if (qChoice === 4){
        text("+" + this.sHeal, width/25, height/4);
      }
      if (qChoice === 5){
        text("+" + this.sHeal, hatch.getLocation(1), hatch.getLocation(2));
      }
      if (qChoice === 6){
        text("+" + this.sHeal, width/25, height/2);
      }
      if (qChoice === 7){
        text("+" + this.sHeal, width/5, height/1.6);
      }
    }
    if (frameCount - startAttack > 160){
      this.attackPhase = 1;
      return true;
    }
  }

  celebrate(){
    if (quill.status() > 0){
      if (this.attackPhase === 1){
        if (this.y > height/7){
          this.y -= 5;
        }
        if (this.y <= height/7){
          this.attackPhase = 2;
        }
      }
      if (this.attackPhase === 2){
        if (this.y < height/4){
        this.y += 5;
        }
        if (this.y >= height/4){
          this.attackPhase = 1;
        }
      }
    }
    quill.display();
  }

  dealDamage(){
    return this.sDamage;
  }

  healSomeone(){
    return this.sHeal;
  }

  getDamaged(hp){
    this.health = this.health - hp;
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
      if (this.health > 175){
        this.health = 175;
      }
    }
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
    this.aDamage = 50;
    this.health = 300;
    this.alive = true;
    this.xTravel = 0;
    this.yTravel = 0;
    this.attackPhase = 1;
  }

  display(){
    if (this.health > 0){
      if (defence === 0){
        image(hImg[0], this.x, this.y);
      }
      else{
        image(hImg[2], this.x, this.y);
      }
    }
    else{
      image(hImg[3], this.x, this.y + height/7);
    }
  }

  attack(){
    background(backgroundImg);
    whisper.display();
    quill.display();
    imellia.display();
    ace.display();
    boss.display();

    if (this.attackPhase === 1){
      if (this.x < width/2.6){
        this.x += 4;
      }
      if (this.y < height/1.8){
        this.y += 4;
      }
      hatch.display();

      if (frameCount - startAttack > 120){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(hImg[1], this.x, this.y);
      fill(255, 0, 0);
      text("-" + this.aDamage, width/2, height/2);
      if (frameCount - startAttack > 240){
        this.attackPhase = 3;
      }
      return false;
    }
    if (this.attackPhase === 3){
      if (this.x > width/5){
        this.x -= 4;
      }
      if (this.y > height/2.7){
        this.y -= 4;
      }
      hatch.display();

      if (frameCount - startAttack > 360){
        this.attackPhase = 1;
        return true;
      }
    }
  }

  defend(){
    background(backgroundImg);
  
    whisper.display();
    quill.display();
    imellia.display();
    ace.display();
    boss.display();
    
    if (this.attackPhase === 1){
      if (hChoice === 3){
        this.xTravel = width/4;
        this.yTravel = height/6.5;
      }
      if (hChoice === 4){
        this.xTravel = width/10;
        this.yTravel = height/4;
      }
      if (hChoice === 5){
        this.xTravel = width/5;
        this.yTravel = height/2.7;
      }
      if (hChoice === 6){
        this.xTravel = width/10;
        this.yTravel = height/2;
      }
      if (hChoice === 7){
        this.xTravel = width/4;
        this.yTravel = height/1.6;
      }

      if (abs(this.x - this.xTravel) > 4){
        if (this.x < this.xTravel + 4){
          this.x += 4;
        }
        else{
          this.x -= 4;
        }
      }

      if (abs(this.y - this.yTravel) > 4){
        if (this.y < this.yTravel + 4){
          this.y += 4;
        }
        else{
          this.y -= 4;
        }
      }

      hatch.display();

      if (frameCount - startAttack > 120){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(hImg[2], this.x, this.y);
      if (frameCount - startAttack > 240){
        this.attackPhase = 1;
        return true;
      }
    }
  }

  celebrate(){
    if (hatch.status() > 0){
      if (this.attackPhase === 1){
        if (this.y > height/3.2){
          this.y -= 5;
        }
        if (this.y <= height/3.2){
          this.attackPhase = 2;
        }
      }
      if (this.attackPhase === 2){
        if (this.y < height/2.7){
        this.y += 5;
        }
        if (this.y >= height/2.7){
          this.attackPhase = 1;
        }
      }
    }
    hatch.display();
  }

  getLocation(c){
    if (c === 1){
      return this.x;
    }
    else{
      return this.y;
    }
  }

  dealDamage(){
    return this.aDamage;
  }

  getDamaged(hp){
    this.health = this.health - hp;
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
      if (this.health > 300){
        this.health = 300;
      }
    }
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
    this.sDamage = 50;
    this.sHeal = 100;
    this.health = 150;
    this.alive = true;
    this.attackPhase = 1;
  }

  display(){
    if (this.health > 0){
      image(iImg[0], this.x, this.y);
    }
    else{
      image(iImg[3], this.x, this.y + height/7);
    }
  }

  spell(){
    background(backgroundImg);
  
    whisper.display();
    hatch.display();
    quill.display();
    ace.display();
    boss.display();

    if (this.attackPhase === 1){
      image(iImg[1], this.x, this.y);
      if (frameCount - startAttack > 60){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(iImg[1], this.x, this.y);
      fill(255, 0, 0);
      text("-" + this.sDamage, width/2, height/2);
    }
    if (frameCount - startAttack > 160){
      this.attackPhase = 1;
      return true;
    }
  }

  heal(){
    background(backgroundImg);
    whisper.display();
    hatch.display();
    quill.display();
    ace.display();
    boss.display();

    if (this.attackPhase === 1){
      image(iImg[2], this.x, this.y);
      if (frameCount - startAttack > 60){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(iImg[2], this.x, this.y);
      fill(0, 255, 255);
      if (iChoice === 3){
        text("+" + this.sHeal, width/5, height/6.5);
      }
      if (iChoice === 4){
        text("+" + this.sHeal, width/25, height/4);
      }
      if (iChoice === 5){
        text("+" + this.sHeal, hatch.getLocation(1), hatch.getLocation(2));
      }
      if (iChoice === 6){
        text("+" + this.sHeal, width/25, height/2);
      }
      if (iChoice === 7){
        text("+" + this.sHeal, width/5, height/1.6);
      }
    }
    if (frameCount - startAttack > 160){
      this.attackPhase = 1;
      return true;
    }
  }

  celebrate(){
    if (imellia.status() > 0){
      if (this.attackPhase === 1){
        if (this.y > height/2.5){
          this.y -= 5;
        }
        if (this.y <= height/2.5){
          this.attackPhase = 2;
        }
      }
      if (this.attackPhase === 2){
        if (this.y < height/2){
        this.y += 5;
        }
        if (this.y >= height/2){
          this.attackPhase = 1;
        }
      }
    }
    imellia.display();
  }

  dealDamage(){
    return this.sDamage;
  }

  healSomeone(){
    return this.sHeal;
  }
  
  getDamaged(hp){
    this.health = this.health - hp;
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
      if (this.health > 150){
        this.health = 150;
      }
    }
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
    this.sDamage = 75;
    this.aDamage = 100;
    this.health = 250;
    this.alive = true;
    this.criticalHit = 0;
    this.attackPhase = 1;
  }

  display(){
    if (this.health > 0){
      image(aImg[0], this.x, this.y);
    }
    else{
      image(aImg[3], this.x, this.y + height/7);
    }
  }

  attack(){
    background(backgroundImg);
    quill.display();
    hatch.display();
    imellia.display();
    whisper.display();
    boss.display();

    if (this.attackPhase === 1){
      if (this.x < width/2.6){
        this.x += 4;
      }
      if (this.y > height/1.8){
        this.y -= 4;
      }
      ace.display();

      if (frameCount - startAttack > 120){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(aImg[1], this.x, this.y);
      fill(255, 0, 0);
      text("-" + this.aDamage, width/2, height/2);
      if (frameCount - startAttack > 240){
        this.attackPhase = 3;
      }
      return false;
    }
    if (this.attackPhase === 3){
      if (this.x > width/5){
        this.x -= 4;
      }
      if (this.y < height/1.6){
        this.y += 4;
      }
      ace.display();

      if (frameCount - startAttack > 360){
        this.attackPhase = 1;
        return true;
      }
    }
  }

  shoot(){
    background(backgroundImg);
    quill.display();
    hatch.display();
    imellia.display();
    whisper.display();
    boss.display();
    
    if (this.attackPhase === 1){
      //Prepare Bullet
      bullet = new Bullet(width/5, height/1.6);
      ace.display();
      if (frameCount - startAttack > 20){
        this.criticalHit = int(random(1,3));
        this.attackPhase = 2;
      }
      return false;
    }

    if (this.attackPhase === 2){
      
      image(aImg[2], this.x, this.y);
      bullet.shoot();
      
      if (frameCount - startAttack > 100){
        this.criticalHit = int(random(1,3));
        this.attackPhase = 3;
      }
      return false;
    }
    if (this.attackPhase === 3){
      image(aImg[2], this.x, this.y);
      fill(255, 0, 0);
      if (this.criticalHit === 2){
        text("-" + (this.sDamage + 50), width/2, height/2);
        fill(255, 255, 0);
        text("CRITICAL HIT", width/2, height/2 - height/20);
      }
      else{
        text("-" + this.sDamage, width/2, height/2);
      }
    }
    if (frameCount - startAttack > 140){
      this.attackPhase = 1;
      return true;
    }
  }

  celebrate(){
    if (ace.status() > 0){
      if (this.attackPhase === 1){
        if (this.y > height/1.8){
          this.y -= 5;
        }
        if (this.y <= height/1.8){
          this.attackPhase = 2;
        }
      }
      if (this.attackPhase === 2){
        if (this.y < height/1.6){
        this.y += 5;
        }
        if (this.y >= height/1.6){
          this.attackPhase = 1;
        }
      }
    }
    ace.display();
  }

  dealDamage(){
    if (aChoice === 1){
      return this.aDamage;
    }
    else{
      return this.sDamage;
    }
  }

  getDamaged(hp){
    this.health = this.health - hp;
  }
  
  getHealed(hp){
    if (this.alive){
      this.health = this.health + hp;
      if (this.health > 250){
        this.health = 250;
      }
    }
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
    this.sDamage1 = 50;
    this.sDamage2 = 25;
    this.sHeal = 250;
    this.health = 2500;
    this.alive = true;
    this.textX = width/5;
    this.textY = height/6.5;
    this.attackPhase = 1;
  }

  display(){
    if (this.health > 0){
      image(bImg[0], this.x, this.y);
    }
    else{
      image(bImg[3], this.x, this.y);
    }
  }

  attack(){
    background(backgroundImg);
    quill.display();
    hatch.display();
    imellia.display();
    ace.display();
    whisper.display();

    if (this.attackPhase === 1){
      if (bChoice === 1){
        if (this.x > width/5){
          this.x -= 4;
          this.textX = width/5;
          this.textY = height/6.5;
        }
        if (this.y > height/6.5){
          this.y -= 4;
        }
      }
      if (bChoice === 2){
        if (this.x > width/25){
          this.x -= 4;
          this.textX = width/25;
          this.textY = height/4;
        }
        if (this.y > height/4){
          this.y -= 4;
        }
      }
      if (bChoice === 3){
        if (defence < 5){
          if (this.x > hatch.getLocation(1)){
            this.x -= 4;
            this.textX = hatch.getLocation(1);
            this.textY = hatch.getLocation(2);
          }
          if (this.y > hatch.getLocation(2)){
            this.y -= 4;
          }
        }
        else{
          if (this.x > hatch.getLocation(1)){
            this.x -= 4;
            this.textX = hatch.getLocation(1);
            this.textY = hatch.getLocation(2);
          }
          if (this.y < hatch.getLocation(2)){
            this.y += 4;
          }
        }
      }

      if (bChoice === 4){
        if (this.x > width/25){
          this.x -= 4;
          this.textX = width/25;
          this.textY = height/2;
        }
        if (this.y > height/2){
          this.y -= 4;
        }
      }
      if (bChoice === 5){
        if (this.x > width/5){
          this.x -= 4;
          this.textX = width/5;
          this.textY = height/1.6;
        }
        if (this.y < height/1.6){
          this.y += 4;
        }
      }
      boss.display();

      if (frameCount - startAttack > 220){
        this.attackPhase = 2;
      }
      return false;
    }
    if (this.attackPhase === 2){
      image(bImg[2], this.x, this.y);
      fill(255, 0, 0);
      if (this.x < width/5){
        if (defended){
          text("-" + (this.mDamage2 - 100), this.textX, this.textY);
          fill(200);
          text("DEFENDED", this.textX, this.textY - height/20);
        }
        else{
          text("-" + this.mDamage2, this.textX, this.textY);
        }
      }
      else{
        if (defended){
          text("-" + (this.mDamage1 - 100), this.textX, this.textY);
          fill(200);
          text("DEFENDED", this.textX, this.textY - height/20);
        }
        else{
          text("-" + this.mDamage1, this.textX, this.textY);
        }
      }
      if (frameCount - startAttack > 320){
        this.attackPhase = 3;
      }
      return false;
    }
    if (this.attackPhase === 3){
      if (this.x < width/2){
        this.x += 4;
      }
      if (bChoice < 5){
        if (this.y < height/2){
          this.y += 4;
        }
      }
      else{
        if (this.y > height/2){
          this.y -= 4;
        }
      }

      boss.display();

      if (frameCount - startAttack > 520){
        this.attackPhase = 1;
        return true;
      }
    }
  }

  spell(){
    background(backgroundImg);
    quill.display();
    hatch.display();
    imellia.display();
    ace.display();
    whisper.display();
    print(frameCount - startAttack);

    if (this.attackPhase === 1){

      //Prepare magic
      boss.display();

      for (let i = 0; i <= sbAmount; i++){
        sbArray.push(new ShadowBall(width/2, height/2));
      }
      for (let c = 0; c < sbArray.length; c++){
        sbArray[c].resetPos();
      }

      if (frameCount - startAttack > 2){
        this.attackPhase = 2;
      }
      return false;
    }
  
    if (this.attackPhase === 2){

      image(bImg[1], this.x, this.y);
      for (let c = 0; c < sbArray.length; c++){
        sbArray[c].cast(c);
      }

      if (frameCount - startAttack > 120){
        this.attackPhase = 3;
      }
      return false;
    }
    if (this.attackPhase === 3){
      image(bImg[1], this.x, this.y);

      if (whisper.status() > 0){
        if (defence === 1){
          fill(200);
          text("DEFENDED", width/5, height/6.5 - height/20);
        }
        else{
          fill(255, 0, 0);
          text("-" + this.sDamage1, width/5, height/6.5);
        }
      }

      if (quill.status() > 0){
        if (defence === 2){
          fill(200);
          text("DEFENDED", width/25, height/4 - height/20);
        }
        else{
          fill(255, 0, 0);
          text("-" + this.sDamage2, width/25, height/4);
        }
      }

      if (hatch.status() > 0){
        if (defence === 3){
          fill(200);
          text("DEFENDED", hatch.getLocation(1), hatch.getLocation(2) - height/20);
        }
        else{
          fill(255, 0, 0);
          text("-" + this.sDamage1, hatch.getLocation(1), hatch.getLocation(1));
        }
      }

      if (imellia.status() > 0){
        if (defence === 4){
          fill(200);
          text("DEFENDED", width/25, height/2 - height/20);
        }
        else{
          fill(255, 0, 0);
          text("-" + this.sDamage2, width/25, height/2);
        }
      }

      if (ace.status() > 0){
        if (defence === 5){
          fill(200);
          text("DEFENDED", width/5, height/1.6 - height/20);
        }
        else{
          fill(255, 0, 0);
          text("-" + this.sDamage1, width/5, height/1.6);
        }
      }
    }

    if (frameCount - startAttack > 180){
      this.attackPhase = 1;
      return true;
    }
    return false;
  }

  celebrate(){
    if (this.attackPhase === 1){
      if (this.y > height/2.5){
        this.y -= 5;
      }
      if (this.y <= height/2.5){
        this.attackPhase = 2;
      }
    }
    if (this.attackPhase === 2){
      if (this.y < height/2){
      this.y += 5;
      }
      if (this.y >= height/2){
        this.attackPhase = 1;
      }
    }
    boss.display();
    fill(255, 0, 0);
    text("Ha Ha!", this.x, this.y);
  }

  dealDamageB(){
    if (bChoice > 0 && bChoice < 6){
      if (defended){
        return this.mDamage2 - 100;
      }
      else{
        return this.mDamage2;
      }
    }
    else{
      if (defended){
        return 0;
      }
      else{
        return this.sDamage2;
      }
    }
  }

  dealDamageF(){
    if (bChoice > 0 && bChoice < 6){
      if (defended){
        return this.mDamage1 - 100;
      }
      else{
        return this.mDamage1;
      }
    }
    else{
      if (defended){
        return 0;
      }
      else{
        return this.sDamage1;
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

class Knife{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.speed = 9;
  }
  throw(){
    if (this.x < width/2){
      this.x += this.speed;
      if (this.y < height/2){
        this.y += this.speed / 2;
      }
      image(kImg, this.x, this.y);
    }
  }
}

class Bullet{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.speed = 12;
  }
  shoot(){
    if (this.x < width/2){
      this.x += this.speed;
      if (this.y > height/2){
        this.y -= this.speed;
      }
      image(buImg, this.x, this.y);
    }
  }
}

class ShadowBall{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.speed = 6;
    this.movePhase = 1;
  }
  cast(n){
    
    if (this.movePhase === 1){
      if (whisper.status() > 0){
        if (n === 0){
          if (this.x > width/5){
            this.x -= this.speed;
            if (this.y > height/6.5){
              this.y -= this.speed / 2;
            }
            image(sBall, this.x, this.y);
          } 
        }
      }
      if (quill.status() > 0){
        if (n === 1){
          if (this.x > width/25){
            this.x -= this.speed * 1.5;
            if (this.y > height/4){
              this.y -= this.speed;
            }
            image(sBall, this.x, this.y);
          } 
        }
      }
      if (hatch.status() > 0){
        if (n === 2){
          if (defence < 5){
            if (this.x > hatch.getLocation(1)){
              this.x -= this.speed;
            }
            if (this.y > hatch.getLocation(2)){
              this.y -= this.speed / 2;
            }
            image(sBall, this.x, this.y);
          }
          else{
            if (this.x > hatch.getLocation(1)){
              this.x -= this.speed;
            }
            if (this.y < hatch.getLocation(2)){
              this.y += this.speed / 2;
            }
            image(sBall, this.x, this.y);
          }
        }
      }
      if (imellia.status() > 0){
        if (n === 3){
          if (this.x > width/25){
            this.x -= this.speed * 1.5;
            image(sBall, this.x, this.y);
          } 
        }
      }
      if (ace.status() > 0){
        if (n === 4){
          if (this.x > width/5){
            this.x -= this.speed;
            if (this.y < height/1.6){
              this.y += this.speed / 2;
            }
            image(sBall, this.x, this.y);
          } 
        }
      }
    }
  }
  
  resetPos(){
    this.x = width/2;
    this.y = height/2;
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

  //Whisper's turn:----------

  if (turn === 1){
    if (whisper.status() > 0){
      menu.display(0);
      menu.hText(whisper.status());
      if (wChoice !== 0){
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

  if (turn === 9){
    bChoice = int(random(1,3));
    if (bChoice === 1){
      bChoice = int(random(1, 6));
      while (true){
        if (bChoice === 5 && ace.status() > 0){
          break;
        }
        if (bChoice === 4 && imellia.status() > 0){
          break;
        }
        if (bChoice === 3 && hatch.status() > 0){
          break;
        }
        if (bChoice === 2 && quill.status() > 0){
          break;
        }
        if (bChoice === 1 && whisper.status() > 0){
          break;
        }
        bChoice = int(random(1, 6));
      }
    }
    else if (bChoice === 2){
      bChoice = 6; //Spell
    }
    else{
      bChoice = 7; //Heal
    }

    print(bChoice, ace.status(), imellia.status(), hatch.status(), quill.status(), whisper.status());
    turn++;    
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

  if (turn === 10){
    if (wChoice > 0){
      if (wChoice === 1){
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        
        if (whisper.attack()){
          boss.getDamaged(whisper.dealDamage());
          wChoice = 0;
          print(boss.status());
          turn++;
          attacking = false;
        } 
      }
      else{
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        if (whisper.shoot()){
          boss.getDamaged(whisper.dealDamage());
          wChoice = 0;
          print(boss.status());
          turn++;
          attacking = false;
        } 
      }
    }
    else{
      turn ++;
    }
  }
  if (turn === 11){
    if (qChoice > 0){
      if (qChoice === 1){
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        
        if (quill.spell()){
          boss.getDamaged(quill.dealDamage());
          qChoice = 0;
          print(boss.status());
          turn++;
          attacking = false;
        } 
      }
      else{
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        if (quill.heal()){
          if (qChoice === 3){
            whisper.getHealed(quill.healSomeone());
          }
          if (qChoice === 4){
            quill.getHealed(quill.healSomeone());
          }
          if (qChoice === 5){
            hatch.getHealed(quill.healSomeone());
          }
          if (qChoice === 5){
            imellia.getHealed(quill.healSomeone());
          }
          if (qChoice === 6){
            ace.getHealed(quill.healSomeone());
          }
          qChoice = 0;
          turn++;
          attacking = false;
        } 
      }
    }
    else{
      turn ++;
    }
  }

  if (turn === 12){
    if (hChoice > 0){
      if (hChoice === 1){
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        
        if (hatch.attack()){
          boss.getDamaged(hatch.dealDamage());
          hChoice = 0;
          print(boss.status());
          turn++;
          attacking = false;
        } 
      }
      else{
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        if (hatch.defend()){
          if (hChoice === 3){
            defence = 1;
          }
          if (hChoice === 4){
            defence = 2;
          }
          if (hChoice === 5){
            defence = 3;
          }
          if (hChoice === 6){
            defence = 4;
          }
          if (hChoice === 7){
            defence = 5;
          }
          hChoice = 0;
          turn++;
          attacking = false;
        } 
      }
    }
    else{
      turn ++;
    }
  }

  if (turn === 13){
    if (iChoice > 0){
      if (iChoice === 1){
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        
        if (imellia.spell()){
          boss.getDamaged(imellia.dealDamage());
          iChoice = 0;
          print(boss.status());
          turn++;
          attacking = false;
        } 
      }
      else{
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        if (imellia.heal()){
          if (iChoice === 3){
            whisper.getHealed(imellia.healSomeone());
            print(whisper.status());
          }
          if (iChoice === 4){
            quill.getHealed(imellia.healSomeone());
          }
          if (iChoice === 5){
            hatch.getHealed(imellia.healSomeone());
          }
          if (iChoice === 6){
            imellia.getHealed(imellia.healSomeone());
          }
          if (iChoice === 7){
            ace.getHealed(imellia.healSomeone());
          }
          iChoice = 0;
          turn++;
          attacking = false;
        } 
      }
    }
    else{
      turn ++;
    }
  }

  if (turn === 14){
    if (aChoice > 0){
      if (aChoice === 1){
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        
        if (ace.attack()){
          boss.getDamaged(ace.dealDamage());
          aChoice = 0;
          print(boss.status());
          turn++;
          attacking = false;
        } 
      }
      else{
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        if (ace.shoot()){
          boss.getDamaged(ace.dealDamage());
          aChoice = 0;
          print(boss.status());
          turn++;
          attacking = false;
        } 
      }
    }
    else{
      turn ++;
    }
  }

  if (turn === 15){
    if (bChoice > 0){
      if (bChoice > 0 && bChoice < 6){
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        for (let i = 1; i < 6; i ++){
          if (bChoice === i && defence === i){
            defended = true;
          }
        }
        if (boss.attack()){
          if (bChoice === 1){
            whisper.getDamaged(boss.dealDamageF());
          }
          if (bChoice === 2){
            quill.getDamaged(boss.dealDamageB());
          }
          if (bChoice === 3){
            hatch.getDamaged(boss.dealDamageF());
          }
          if (bChoice === 4){
            imellia.getDamaged(boss.dealDamageB());
          }
          if (bChoice === 5){
            ace.getDamaged(boss.dealDamageF());
          }
          bChoice = 0;
          defence = 0;
          turn = 1;
          defended = false;
          attacking = false;
        }
        
      }
      else if (bChoice === 6){
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        if (boss.spell()){
          //print("b");
          if (whisper.status() > 0){
            if (defence === 1){
              defended = true;
            }
            whisper.getDamaged(boss.dealDamageF());
            defended = false; 
          }

          if (quill.status() > 0){
            if (defence === 2){
              defended = true;
            }
            quill.getDamaged(boss.dealDamageB());
            defended = false;
          }

          if (hatch.status() > 0){
            if (defence === 3){
              defended = true;
            }
            hatch.getDamaged(boss.dealDamageF());
            defended = false;
          }

          if (imellia.status() > 0){
            if (defence === 4){
              defended = true;
            }
            imellia.getDamaged(boss.dealDamageB());
            defended = false;
          }

          if (ace.status() > 0){
            if (defence === 1){
              defended = true;
            }
            ace.getDamaged(boss.dealDamageF());
            defended = false;
          }
          bChoice = 0;
          defence = 0;
          turn = 1;
          attacking = false;
        }
      }
      else{
        if (attacking === false){
          attacking = true;
          startAttack = frameCount;
        }
        if (boss.heal()){
          boss.getHealed(boss.healYourself());
        }
        bChoice = 0;
        defence = 0;
        turn = 1;
        attacking = false;

      }
    }
  } 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  music[0].setVolume(0.1);
  music[0].loop();

  whisper = new Whisper(width/5, height/6.5);
  quill = new Quill(width/25, height/4);
  hatch = new Hatch(width/5, height/2.7);
  imellia = new Imellia(width/25, height/2);
  ace = new Ace(width/5, height/1.6);
  boss = new Boss(width/2, height/2);
  menu = new Menu(width/7,height/1.15);

}


function checkEnd(){
  if (whisper.status() < 1 && quill.status() < 1 && hatch.status() < 1 && imellia.status() < 1 && ace.status() < 1 || boss.status() < 1){
    endgame = true;
  }
  else{
    endgame = false;
  }
}

function endScreen(){
  if (musicChange){
    music[0].stop();
    music[1].setVolume(0.1);
    music[1].play();
    musicChange = false;
  }
  
  

  //Lose Game
  if (whisper.status() < 1 && quill.status() < 1 && hatch.status() < 1 && imellia.status() < 1 && ace.status() < 1){
    background(backgroundImg);
    whisper.display();
    quill.display();
    hatch.display();
    imellia.display();
    ace.display();

    boss.celebrate();

    menu.display(9);
  }
  else{
    background(backgroundImg);
    whisper.celebrate();
    quill.celebrate();
    hatch.celebrate();
    imellia.celebrate();
    ace.celebrate();

    boss.display();

    menu.display(10);
  }
}

function draw() {

  if (endgame === false){

    if (turn > 9){
      secondRound();
    }
    else{
      firstRound();
    }
    checkEnd();
  }
  else{
    endScreen();
  }
}
