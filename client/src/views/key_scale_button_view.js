const PubSub = require("../helpers/pub_sub");

const KeyScaleButtonView = function(slot, scaleName) {
  this.slot = slot; // 1 or 2 for key1, key2
  this.scaleName = scaleName;
}

KeyScaleButtonView.prototype.render = function () {
  let divButton = document.createElement("div");
  divButton.className = "keyscale-button";
  divButton.id = `keyscale_${this.slot}_${this.scaleName}`;
  divButton.innerHTML = this.scaleName;
  divButton.addEventListener("click",(event) => {
    const target = event.currentTarget;
    const id = target.id;
    const tokens = id.split("_");
    const slot = tokens[1];
    const scalename = tokens[2];
    PubSub.publish("scaleChange", {"slot":slot, "scalename": scalename});
  });
  return divButton;
};

module.exports = KeyScaleButtonView;
