// Enemies our player must avoid
class MyEnemy {
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
    this.x += this.speed * dt;

    if (this.x <= -50) {
      this.speed = Math.floor(Math.random() * 300) + 100;
    } ;
    if(this.x > 500) {
      this.x = -100;
    };
    if (this.x > -26 && this.x < 80 && player.x == 0 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    };
    if (this.x > 74 && this.x < 180 && player.x == 100 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    };
    if (this.x > 174 && this.x < 280 && player.x == 200 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    };
    if (this.x > 274 && this.x < 380 && player.x == 300 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    };
    if (this.x > 374 && this.x < 480 && player.x == 400 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    };
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
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.player = [
	'images/char-boy.png',
	'images/char-cat-girl.png'
	];
  };
  update(dt){
    if(this.y < 0){
      this.y = 405;
      this.x = 200;
      playerWins++;
      socreForPlayer()
    }

  };

  render(){
   ctx.drawImage(Resources.get(this.player[0]), this.x, this.y);
  };

  handleInput(keyPress){
    if (keyPress == 'up' && this.y > 0){
      this.y -=88;
    };

    if (keyPress == 'down' && this.y < 405){
      this.y +=88;
    };

    if (keyPress == 'left' && this.x > 0){
      this.x -= 100;
    };

    if (keyPress == 'right' && this.x < 395){
      this.x += 100;
    };
 };
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
const enemyLocation = [53, 141, 229];
const player = new MyPlayer(200, 405);
let bugsWin = 0;
let playerWins = 0;
let bugScore = document.querySelector(".bugScore");
let playerScore = document.querySelector(".playerScore");

function socreForPlayer(){
  playerScore.innerHTML = playerWins + " Player Score";
};

function scoreForBugs(){
  bugScore.innerHTML = bugsWin + " Bugs Score";
};

enemyLocation.forEach(locY => {
	enemy = new MyEnemy(-100, locY, 0);
	allEnemies.push(enemy);
});

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
