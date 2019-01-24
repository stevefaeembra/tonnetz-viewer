const PubSub = require("../helpers/pub_sub");
const NoteView = require("./note_view");
const Notes = require("../models/notes");
const TonnetzModel = require("../models/tonnetz_model");

const TonnetzView = function(attachment, rows, columns){
  this.element = document.querySelector(attachment);
  this.rows = rows;
  this.columns = columns;
  this.keyOne = {tonic: 0, scale: "major"};
  this.keyTwo = {tonic: -1, scale: "ionian"};
}

TonnetzView.prototype.render = function (model) {
  this.element.innerHTML = "";
  for (let y=0;y<this.rows;y++) {
    for (let x=0;x<this.columns;x++) {
      let noteNumber = model.getNoteAt(y,x);
      let noteName = model.getNoteName(noteNumber);
      let keyOne = this.keyOne;
      let keyTwo = this.keyTwo;
      let keyOneNotes = keyOne.tonic === -1 ? [] : model.getScaleNotes(keyOne.tonic, keyOne.scale);
      let keyTwoNotes = keyTwo.tonic === -1 ? [] : model.getScaleNotes(keyTwo.tonic, keyTwo.scale);

      let noteView = new NoteView(
        {
          row: y,
          column: x,
          name: noteName,
          number: noteNumber,
          inKeyOne: keyOneNotes.includes(noteNumber),
          keyOneTonic: keyOne.tonic,
          inKeyTwo: keyTwoNotes.includes(noteNumber),
          keyTwoTonic: keyTwo.tonic
        }
      );
      this.element.appendChild(noteView.render());
    }
  }
};

TonnetzView.prototype.bindEvents = function () {
  PubSub.subscribe("Start", (event) => {
    let model = event.detail.model;
    this.render(model);
  });
  PubSub.subscribe("tonicChange", (event) => {
    PubSub.signForDelivery(this,event);
    const data = event.detail;
    const slot = data.slot;
    const notename = data.notename;
    const notenumber = Notes.indexOf(notename);
    this.keyOne = {tonic: notenumber, scale: this.keyOne.scale};
    this.render(new TonnetzModel());
  })
  PubSub.subscribe("scaleChange", (event) => {
    PubSub.signForDelivery(this,event);
    const data = event.detail;
    const slot = data.slot;
    const scalename = data.scalename;
    this.keyOne = {tonic: this.keyOne.tonic, scale: scalename};
    this.render(new TonnetzModel());
  })
};

module.exports = TonnetzView;
