const PubSub = require("../helpers/pub_sub");
const NoteView = require("./note_view");

const TonnetzView = function(attachment, rows, columns){
  this.element = document.querySelector(attachment);
  this.rows = rows;
  this.columns = columns;
}

TonnetzView.prototype.render = function (model) {
  this.element.innerHTML = "";
  for (let y=0;y<this.rows;y++) {
    for (let x=0;x<this.columns;x++) {
      let noteNumber = model.getNoteAt(y,x);
      let noteName = model.getNoteName(noteNumber);
      let noteView = new NoteView(
        {
          row: y,
          column: x,
          name: noteName,
          number: noteNumber
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
