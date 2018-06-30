// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
 };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
 };

// Draw the enemy on the screen, required method for game
render () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class MyPlayer{
  constructor(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-car-girl.png'
  };
  update(dt){

  };

  render(){

  };

  handleInput(){

 };
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
const player = new MyPlayer(2, 2, 5);


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
