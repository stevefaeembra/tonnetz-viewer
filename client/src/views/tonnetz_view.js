const PubSub = require("../helpers/pub_sub");
const NoteView = require("./note_view");

const TonnetzView = function(attachment, rows, columns){
  this.element = document.querySelector(attachment);
  this.rows = rows;
  this.columns = columns;
  this.keyOne = {tonic: 0, scale: "major"};
  this.keyTwo = {tonic: 2, scale: "minor"}
}

TonnetzView.prototype.render = function (model) {
  this.element.innerHTML = "";
  for (let y=0;y<this.rows;y++) {
    for (let x=0;x<this.columns;x++) {
      let noteNumber = model.getNoteAt(y,x);
      let noteName = model.getNoteName(noteNumber);
      let keyOne = this.keyOne;
      let keyTwo = this.keyTwo;
      let keyOneNotes = model.getScaleNotes(keyOne.tonic, keyOne.scale);
      let keyTwoNotes = model.getScaleNotes(keyTwo.tonic, keyTwo.scale);
      console.log(keyOneNotes);
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
  })
};

module.exports = TonnetzView;
