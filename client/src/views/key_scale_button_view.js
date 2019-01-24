const KeyScaleButtonView = function(slot, scaleName) {
  this.slot = slot; // 1 or 2 for key1, key2
  this.scaleName = scaleName;
}

KeyScaleButtonView.prototype.render = function () {
  let divButton = document.createElement("div");
  divButton.className = "keyscale-button";
  divButton.innerHTML = this.scaleName;
  return divButton;
};

module.exports = KeyScaleButtonView;
