const PubSub = require("../helpers/pub_sub");
const Notes = require("./notes.js");
const Scales = require("./scales.js");

const TonnetzModel = function() {
  this.notes = Notes;
  this.scales = Scales;
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
