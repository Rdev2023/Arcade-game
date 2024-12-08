// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.width = 101;
  this.height = 83;
};

var Gem = function() {

  // get image and random position for first invoke code
  this.sprite = 'images/Gem-Blue.png';
  this.x = Math.floor(Math.random()*5)*101+20;
  this.y = Math.floor(Math.random()*3+1)*83+25;

// parameter that show state of gem - grabbed or not by player
  collected = false;
  //method for obtain new random location for new gem in field
  this.reposition = function() {
    this.x = Math.floor(Math.random()*5)*101+20;
    this.y = Math.floor(Math.random()*3+1)*83+25;
  };
};

//boundry of field to restrict move for player
var grassBorder = 408;
var waterBorder = 83;
var leftBorder = 0;
var rightBorder = 505;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if (this.x>500){
      this.x = -100;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Draw gem in field
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y,70,100);
};
// Now write your own player class
// This class requires an update(), render() andchar-princess-girl
// a handleInput() method.

var Player = function(){
  this.x = 200;
  this.y = 325;
  this.speed = 100;
  this.width = 101;
  this.height = 83;
  this.sprite = 'images/char-princess-girl.png';
  this.handleInput = function(key){
    // action events pressed keyboards keys
    switch(key){
      case "up":
                   this.y-=83;

           break;
      case "down":if (this.y<grassBorder){
                   this.y+=83;
                }
           break;
      case "left":if (this.x>leftBorder){
                   this.x-=101;
                }
            break;
      case "right":if (this.x<rightBorder-105){
                    this.x+=101;
                }
           break;
    }

  }
};

Player.prototype.update = function(dt){

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(0,75,100);
var enemy2 = new Enemy(50,150,150);
var enemy3 = new Enemy(100,230,100);
var allEnemies = [enemy1,enemy2,enemy3];

var player = new Player();

//Instantiate gem object
var gem = new Gem();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
