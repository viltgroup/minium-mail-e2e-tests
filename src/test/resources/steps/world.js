var timeUnits = require("minium/timeunits");

var base;
var loadingUnexistenceListener;

World(function () {

  var loading = $(".loading").withCss("display", "block");

  // base expression
  base = $(":root").unless(".modal-backdrop").add(".modal-dialog");

  // we keep a variable for our interaction listener so that we can remove it at the end of the execution
  loadingUnexistenceListener = minium.interactionListeners
    .ensureUnexistence(loading)
    .withWaitingPreset("slow");

  // browser configuration
  browser.configure()
    .waitingPreset("fast")
      .timeout(1, timeUnits.SECONDS)
    .done()
    .waitingPreset("slow")
      .timeout(10, timeUnits.SECONDS)
    .done()
    .interactionListeners()
      .add(loadingUnexistenceListener)
    .done();

}, function () {
  // we need to remove our interaction listeners at the end so that in the next scenario we don't end up
  // having two identical interaction listeners
  browser.configure()
    .interactionListeners()
      .remove(loadingUnexistenceListener)
    .done();

  base = undefined;
});
