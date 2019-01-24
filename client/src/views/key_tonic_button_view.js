const PubSub = require("../helpers/pub_sub");

const KeyTonicButtonView = function(slot, noteNumber, noteName) {
  this.slot = slot; // 1 or 2 for key1, key2
  this.noteNumber = noteNumber;
  this.noteName = noteName;
}

KeyTonicButtonView.prototype.render = function () {
  let divButton = document.createElement("div");
  divButton.className = `keytonic-button`;
  if ([1,3,6,8,10].includes(this.noteNumber)) {
    divButton.className += " ebony";
  }
  if (this.noteNumber===-1) {
    divButton.className += " close";
  }
  divButton.innerHTML = this.noteName;
  divButton.id = `keytonic_${this.slot}_${this.noteName}`;
  divButton.innerHTML = this.noteName;
  divButton.addEventListener("click",(event) => {
    const target = event.currentTarget;
    const id = target.id;
    const tokens = id.split("_");
    const slot = tokens[1];
    const notename = tokens[2];
    PubSub.publish("tonicChange", {"slot":slot, "notename": notename});
  });
  return divButton;
};

module.exports = KeyTonicButtonView;
