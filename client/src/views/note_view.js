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
  divNote.innerHTML = `${this.name}`;
  return divNote;
};

module.exports = NoteView;
