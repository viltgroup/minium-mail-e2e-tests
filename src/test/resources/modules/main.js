//browser.get("http://minium.vilt.io/sampleApp/");
browser.get("file:///home/mario/basement/work/workspace/softwareFactory/minium-engineering/sampleApp/index.html");
  
// elements  
var newButton = $("#new_mail");

// This base expression always returns the scope we're working on: The main window unless a modal is visible.
var base = $(":root").unless(".modal:visible").add(".modal:visible");

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


rows(table, { "From" : "Rui Figueira", "Label" : "important" })
