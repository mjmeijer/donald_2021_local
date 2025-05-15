//
// (c) Copyright 2021-2025 Maarten Meijer / Amsterdam University of Applied Science
//
// game.js
//
//  a game is representen by an array of values
//
//

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Game(levels) {
  this.levels = levels;
  this.values = [];
  for(i = 0; i < levels; i++) {
    this.values.push(getRandomInt(4));
  }
}

Game.prototype.getValue = function(level) {
  return this.values[level];
}

Game.prototype.toString = function(level) {
  return '' + this.values;
}
