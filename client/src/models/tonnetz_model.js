const PubSub = require("../helpers/pub_sub");

const TonnetzModel = function() {
  this.grid = [];
}

TonnetzModel.prototype.getNoteAt = function (row,col) {
  // return key (0-11 for C through B in semitone increments)
  // for position row, col (0,0 is top left and starts at C)
  let horizontal = (0+(7*col))%12;
  return Math.abs((horizontal+(+4*row))%12);
};

TonnetzModel.prototype.getNoteName = function (noteNumber) {
  return ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'][noteNumber];
};

TonnetzModel.prototype.bindEvents = function () {

};

module.exports = TonnetzModel;
