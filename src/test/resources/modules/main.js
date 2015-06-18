//browser.get("http://minium.vilt.io/sampleApp/");
browser.get("file:///home/mario/basement/work/workspace/softwareFactory/minium-engineering/sampleApp/index.html");

// elements  
var newButton = $("#new_mail");


var loading = $(".loading").withCss("display", "block").or("#loading:visible");
// This base expression always returns the scope we're working on: The main window unless a modal is visible and a loding is visible
var base = $(":root").unless(".modal:visible").add(".modal:visible").unless(loading);

// interactions

//Compose a new message
newButton.click();

// Easiest way to select an element from a select box
$("#recipient_select").select("Raphael Rodrigues")


// Select all senders
var fromHeader = $("th").withText("From")
var from = $("td").below(fromHeader);


// Select all labels
var labelHeader = $("th").withText("Label")
var label = $("td").below(labelHeader);

// Select labels with important tag only
var important = label.withText("Important")


// Select line from Rui Figueira with Label Important
var rui = from.withText("Rui Figueira").rightOf(important)


$(".label-important")

$(".mailContact").

console.log("Current URL:", browser.getCurrentUrl());


rows(table, {
    "From": "Rui Figueira",
    "Label": "important"
})

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
// This base expression always returns the scope we're working on: The main window unless a modal is visible and a loding is visible
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

var newBtn = $("button").withText("New");
var sendBtn = $("button").withText("Send");
var toFld = $("#recipient_select");
var subjectFld = $("#compose_subject");
var messageFld = $("#compose_message");

// interactions
browser.get("http://minium.vilt.io/sampleApp/"); 	  
newBtn.click();									 	  
toFld.select("Rui Figueira");				     	  
subjectFld.fill("Automatic email");				 	  
messageFld.fill("This email was sent automatically");
sendBtn.click();									  
