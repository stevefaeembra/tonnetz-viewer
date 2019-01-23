const PubSub = require("../helpers/pub_sub");

const TonnetzModel = function() {
  this.notes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  this.scales = {
    "booya":[0,4,8],
    "major":[0,2,4,5,7,9,11],
    "minor":[0,2,3,5,7,8,10],
    "dorian":[0,2,3,5,7,9,10],
    "phygrian":[0,1,3,5,7,8,10],
    "lydian":[0,2,4,6,7,9,11],
    "mixolydian":[0,2,4,5,7,9,10],
    "locrian":[0,1,3,5,6,8,10],
    "minor-pentatonic":[0,3,5,7,10],
    "major-pentatonic":[0,2,4,7,9],
    "whole-tone":[0,2,4,6,8,10],
    "acoustic":[0,2,4,6,7,9,10],
    "octatonic-1":[0,2,3,5,6,8,9,11],
    "octatonic-2":[0,1,3,4,6,7,9,10],
    "ionian":[0,2,4,5,7,9,11], // same as major
    "aeolian":[0,2,3,5,7,8,10], // same as minor
  }
}

TonnetzModel.prototype.getScaleNotes = function (tonicKey, scaleName) {
  // tonic key is 0..11 for C thru B
  // scalename is index into this.scales
  const intervals = this.scales[scaleName];
  const tonicOffset = tonicKey;
  let notes = [];
  intervals.forEach((offset) => {
    notes.push((tonicOffset+offset)%12);
  })
  console.log(notes);
  return notes;
};

TonnetzModel.prototype.getNoteAt = function (row,col) {
  // return key (0-11 for C through B in semitone increments)
  // for position row, col (0,0 is top left and starts at C)
  row = 6-row;
  let horizontal = (0+(7*col))%12;
  return Math.abs((horizontal+(+4*row))%12);
};

TonnetzModel.prototype.getNoteName = function (noteNumber) {
  return this.notes[noteNumber];
};



TonnetzModel.prototype.bindEvents = function () {

};

module.exports = TonnetzModel;
