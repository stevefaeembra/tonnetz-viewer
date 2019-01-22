const PubSub = require("../helpers/pub_sub");

const TonnetzModel = function() {
  this.notes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  this.scales = {
    "major": [0,2,4,5,7,9,11],
    "minor": [0,2,3,5,7,9,11]
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
  let horizontal = (0+(7*col))%12;
  return Math.abs((horizontal+(+4*row))%12);
};

TonnetzModel.prototype.getNoteName = function (noteNumber) {
  return this.notes[noteNumber];
};



TonnetzModel.prototype.bindEvents = function () {

};

module.exports = TonnetzModel;
