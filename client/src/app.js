const PubSub = require("./helpers/pub_sub");
const TonnetzModel = require("./models/tonnetz_model");
const TonnetzView = require("./views/tonnetz_view");
const KeyTonicButtonsView = require("./views/key_tonic_buttons_view");
const KeyScaleButtonsView = require("./views/key_scale_buttons_view");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM has loaded");
  const items = [
    new TonnetzModel(),
    new TonnetzView("#grid", 6, 15),
    new KeyTonicButtonsView(1,"#keyonetonicbuttons"),
    new KeyScaleButtonsView(1,"#keyonescalebuttons")
  ];
  items.forEach((item) => {
    item.bindEvents();
  });
  PubSub.publish("Start", {model: items[0]});
});
