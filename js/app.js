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
 }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    //This helps us to spwn the enemies at random locations and with random speeds
    if (this.x <= -50) {
      this.speed = Math.floor(Math.random() * 300) + 100;
    }

    //the enemies will be respawned on teh starting location
    if(this.x > 500) {
      this.x = -100;
    }

    //this is the hit detction
    if (this.x > -26 && this.x < 80 && player.x === 0 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    }
    if (this.x > 74 && this.x < 180 && player.x == 100 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    }
    if (this.x > 174 && this.x < 280 && player.x == 200 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    }
    if (this.x > 274 && this.x < 380 && player.x == 300 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    }
    if (this.x > 374 && this.x < 480 && player.x == 400 && this.y == player.y) {
      player.x = 200;
      player.y = 405;
      bugsWin++;
      scoreForBugs();
    }
 }

// Draw the enemy on the screen, required method for game
render () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 }
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
	'images/char-cat-girl.png',
  'images/char-horn-girl.png'
	];
  }
  update(dt){
    //if our chatacter makes it to the water
    if(this.y < 0){
      this.y = 405;
      this.x = 200;
      playerWins++;
      socreForPlayer();
    }
  }

  render(){
   ctx.drawImage(Resources.get(this.player[0]), this.x, this.y);

   //this is ajust a little bonus if u make it 5 times to the water the chracter will be changed
   if ( playerWins >= 5 && playerWins <= 14) {
     ctx.drawImage(Resources.get(this.player[1]), this.x, this.y);
   }

   //the caharacter will be cahnged again if u make it 15 times to the water
   if ( playerWins >= 15) {
     ctx.drawImage(Resources.get(this.player[2]), this.x, this.y);
   }
  }

  handleInput(keyPress){
    //if u press the up arrow the palyer will go up
    //the curretnt position  will be lesser by 88
    //important this is not letting the playr move off the canvas
    if (keyPress == 'up' && this.y > 0){
      this.y -=88;
    }

   //ths is the same story as the up arrow by with the down arrow and its ads 88 to the current position
    if (keyPress == 'down' && this.y < 405){
      this.y +=88;
    }

    if (keyPress == 'left' && this.x > 0){
      this.x -= 100;
    }

    if (keyPress == 'right' && this.x < 395){
      this.x += 100;
    }
 }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];

//53, 141, 229 is the locations wher teh enemis is going
//and execty this numbers are very importent because
//our player is jumping up and down by 88 so he can eventyalu meet
// with the emenies
const enemyLocation = [53, 141, 229];
const player = new MyPlayer(200, 405);
let bugsWin = 0;
let playerWins = 0;
let bugScore = document.querySelector(".bugScore");
let playerScore = document.querySelector(".playerScore");
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];

//this is updating the player score and has the win condition
function socreForPlayer(){
  playerScore.innerHTML ="Player Score " + playerWins;
  if (playerWins == 30) {
   modal.style.display = "block";
  }
}

//updates teh enemies score and has the lose condition
function scoreForBugs(){
  bugScore.innerHTML ="Bugs Score " + bugsWin;
  if (bugsWin == 10) {
    bugsWin = 0;
    palyerWins = 0;
    playerScore.innerHTML ="Player Score " + palyerWins;
    bugScore.innerHTML ="Bugs Score " + bugsWin;
  }
}

//with this we can close teh modal window and start the game agian
span.onclick = function(){
  modal.style.display = "none";
  bugsWin = 0;
  palyerWins = 0;
  playerScore.innerHTML ="Player Score " + palyerWins;
  bugScore.innerHTML ="Bugs Score " + bugsWin;
};

//now this is creating the enmemy objects and storying it in allEnemies array
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
