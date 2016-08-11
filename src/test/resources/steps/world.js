var timeUnits = require("minium/timeunits");

var base;

World(function () {

  var loading = $(".loading").withCss("display", "block");

  // we keep a variable for our interaction listener so that we can remove it at the end of the execution
  var loadingUnexistenceListener = minium.interactionListeners
    .ensureUnexistence(loading)
    .withWaitingPreset("slow");

  // base expression
  base = $(":root")
    .unless(".modal-backdrop")
    .add(".modal-dialog")
    .with(loadingUnexistenceListener);

  // browser configuration
  browser.configure()
    .waitingPreset("fast")
      .timeout(1, timeUnits.SECONDS)
    .done()
    .waitingPreset("slow")
      .timeout(10, timeUnits.SECONDS)
    .done();

}, function () {
  base = undefined;
});
