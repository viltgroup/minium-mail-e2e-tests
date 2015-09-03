var timeUnits = require("minium/timeunits");

var base;

World(function () {
  // base expression
  base = $(":root").unless(".modal-backdrop").add(".modal-dialog");
  
  // browser configuration
  browser.configure()
    .waitingPreset("fast")
      .timeout(1, timeUnits.SECONDS);
}, function () {
  base = undefined;
});