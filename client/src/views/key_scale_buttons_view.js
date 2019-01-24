const PubSub = require("../helpers/pub_sub");
const Notes = require("../models/notes.js");
const Scales = require("../models/scales.js");
const KeyScaleButtonView = require("./key_scale_button_view");

const KeyScaleButtonsView = function(slot, attachment) {
  this.slot = slot; // 1 or 2 for key1, key2
  this.element = document.querySelector(attachment);
}

KeyScaleButtonsView.prototype.render = function () {
  this.element.innerHTML = "";
  for (var i=0; i<Object.keys(Scales).length; i++) {
    const keyButton = new KeyScaleButtonView(this.slot, Object.keys(Scales)[i]);
    this.element.appendChild(keyButton.render());
  }
};

KeyScaleButtonsView.prototype.bindEvents = function () {
  PubSub.subscribe("Start", (event) => {
    this.render();
  })
};

module.exports = KeyScaleButtonsView;
