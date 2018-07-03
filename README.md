frontend-nanodegree-arcade-game
===============================
This is a simple arcade game u need to cross the street to get to the water.
## Table of Content

* [How to load] (#howToLoad)
* [How to play] (#howToPLay)
* [About the code] (#aboutTheCode)

##How to load
You can find the game and clone or download it at https://github.com/Teodorberenyi/ArcadeGameCloneProject4.git.
When you will have a copy just simply open index.html file on your browser.


##How to play

Using the arrow key u can navigate your character throw the filed to the water.
The goal of this game is to get in to the water 30 times, as a little bonus on the 5th and 15th times your character is changing. Be careful of the bugs if they hit you why you try to cross the streets you will be reset, if they hit u 10 times you will lose all your progress and you need to start over again.

##About the code

Most part was added by Udacity they only things what I did was to convert the ES5 class Enemy to ES6 added my own MyPlayer class. Set up the enemies spawning location there speed both are calculated random. Added collision detection to the enemy. And win and lose conditions. And added two more characters to the engine.js so I can render them.

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
