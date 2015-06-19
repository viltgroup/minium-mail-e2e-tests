/*
* Send an email with Minium
*/


// get elements
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
