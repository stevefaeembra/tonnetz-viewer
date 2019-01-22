const NoteView = function(data) {
    this.notenumber = data.number;
    this.name = data.name;
    this.row = data.row;
    this.col = data.column;
    //debugger;
}

NoteView.prototype.render = function () {
  let divNote = document.createElement("div");
  divNote.className = `note note-${this.notenumber}`;

  let divNoteName = document.createElement("div");
  divNoteName.className = `note-name`;
  divNoteName.innerHTML = `${this.name}`;

  let divNoteNumber = document.createElement("div");
  divNoteNumber.className = `note-number`
  divNoteNumber.innerHTML = `${this.notenumber}`;

  divNote.appendChild(divNoteName);
  divNote.appendChild(divNoteNumber);
  return divNote;
};

module.exports = NoteView;
