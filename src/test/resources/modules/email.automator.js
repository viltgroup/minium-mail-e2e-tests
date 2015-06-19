/*
* Send Multiples emails with Minium
*/

// data to send
var emails = [{
    "To": "Rui Figueira",
    "Subject": "Minium Execution report for sample-app",
    "Message": "All tests passed with success !"
}, {
    "To": "Raphael Rodrigues",
    "Subject": "Minium Execution report for sample-app",
    "Message": "All tests passed with success !"
}, {
    "To": "Mario Lameiras",
    "Subject": "Minium Execution report for sample-app",
    "Message": "All tests passed with success !"
}];

var loading = $(".loading").withCss("display", "block");
// This base expression always returns the scope we're working on: The main window unless a modal is visible and a loading is visible
var base = $(":root").unless(".modal:visible").add(".modal:visible").unless(loading);

function fillFormEmail(email) {

    var inputs = base.find("input, textarea, select, [contenteditable]");

    for (var prop in email) {
        var val = email[prop];
        var colName = prop;

        var fieldInput = $(inputs.withAttr("data-placeholder", colName), inputs.withLabel(colName + ':'));

        if (fieldInput.is("select")) {
            fieldInput.select(val);
        } else {
            fieldInput.fill(val);
        }
    }
}

(function sendEmails() {
    browser.get(config.baseUrl);

    emails.forEach(function(email) {
        base.find("button").withText("New").click();
        fillFormEmail(email);
        base.find("button").withText("Send").click();
    });

})();

