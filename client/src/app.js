const PubSub = require("./helpers/pub_sub");
const TonnetzModel = require("./models/tonnetz_model");
const TonnetzView = require("./views/tonnetz_view");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM has loaded");
  const items = [
    new TonnetzModel(),
    new TonnetzView("#grid", 15, 15)
  ];
  items.forEach((item) => {
    item.bindEvents();
  });
  PubSub.publish("Start", {model: items[0]});
});
