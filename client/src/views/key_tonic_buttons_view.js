const PubSub = require("../helpers/pub_sub");
const Notes = require("../models/notes.js");
const Scales = require("../models/scales.js");
const KeyTonicButtonView = require("./key_tonic_button_view");

const KeyTonicButtonsView = function(slot, attachment) {
  this.slot = slot; // 1 or 2 for key1, key2
  this.element = document.querySelector(attachment);
}

KeyTonicButtonsView.prototype.render = function () {
  this.element.innerHTML = "";
  // add "Off" button
  const offButton = new KeyTonicButtonView(this.slot, -1, "X");
  this.element.appendChild(offButton.render());
  for (var i=0; i<12; i++) {
    const keyButton = new KeyTonicButtonView(this.slot, i, Notes[i]);
    this.element.appendChild(keyButton.render());
  };

};

KeyTonicButtonsView.prototype.bindEvents = function () {
  PubSub.subscribe("Start", (event) => {
    this.render();
  })
};

module.exports = KeyTonicButtonsView;
