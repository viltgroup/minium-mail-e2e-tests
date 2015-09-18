var timeUnits = require("minium/timeunits");

var base;
var loadingUnexistenceListener, timeoutListener;

World(function () {

  var loading = $(".loading").withCss("display", "block");

  // base expression
  base = $(":root").unless(".modal-backdrop").add(".modal-dialog");

  // we keep a variable for our interaction listener so that we can remove it at the end of the execution
  loadingUnexistenceListener = minium.interactionListeners
    .ensureUnexistence(loading);

  timeoutListener = minium.interactionListeners
      .onTimeout()
      .when(loading)
      .waitForUnexistence(loading)
      .withWaitingPreset("slow")
      .thenRetry();

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
      .add(timeoutListener)
    .done();

}, function () {
  // we need to remove our interaction listeners at the end so that in the next scenario we don't end up
  // having two identical interaction listeners
  browser.configure()
    .interactionListeners()
      .remove(timeoutListener)
      .remove(loadingUnexistenceListener)
    .done();

  base = undefined;
});
