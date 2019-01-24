const KeyTonicButtonView = function(slot, noteNumber, noteName) {
  this.slot = slot; // 1 or 2 for key1, key2
  this.noteNumber = noteNumber;
  this.noteName = noteName;
}

KeyTonicButtonView.prototype.render = function () {
  let divButton = document.createElement("div");
  divButton.className = "keytonic-button";
  divButton.innerHTML = this.noteName;
  return divButton;
};

module.exports = KeyTonicButtonView;
