const NoteView = function(data) {
    this.notenumber = data.number;
    this.name = data.name;
    this.row = data.row;
    this.col = data.column;
    this.inKeyOne = data.inKeyOne;
    this.keyOneTonic = data.keyOneTonic;
    this.inKeyTwo = data.inKeyTwo;
    this.keyTwoTonic = data.keyTwoTonic;
}

NoteView.prototype.render = function () {
  let divNote = document.createElement("div");
  divNote.className = `note note-${this.notenumber}`;
  if (this.inKeyOne) {
    divNote.className += " note--keyOne";
  }
  if (this.inKeyTwo) {
    divNote.className += " note--keyTwo";
  }
  let divNoteName = document.createElement("div");
  divNoteName.className = `note-name`;
  divNoteName.innerHTML = `${this.name}`;
  if (this.notenumber == this.keyOneTonic) {
    divNoteName.className += " note--keyOneTonic";
  }
  if (this.notenumber == this.keyTwoTonic) {
    divNoteName.className += " note--keyTwoTonic";
  }

  let divNoteNumber = document.createElement("div");
  divNoteNumber.className = `note-number`
  divNoteNumber.innerHTML = `${this.notenumber}`;

  divNote.appendChild(divNoteName);
  divNote.appendChild(divNoteNumber);
  return divNote;
};

module.exports = NoteView;
