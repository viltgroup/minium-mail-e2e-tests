var forms = require("forms"),
    mails = require("mails"),
    sections = require("sections"); 

Given(/^I'm at Minium Mail/, function() {
  browser.get(config.baseUrl);
});

Given(/^an email with (.*?) "(.*?)" exists$/, function(field, value) {
  var filter = {};
  filter[field] = value;
  
  var mailRow = mails.filter(filter);
  expect(mailRow).to.have.size(1);
});


Given(/^an email with (.*?) "(.*?)" exists under "(.*?)"$/, function(field, value, section) {
  var filter = {};
  filter[field] = value;
  
  var mailRow = mails.filter(filter);
  
  sections.navigate(section);
  expect(mailRow).to.have.size(1);
});


Given(/^an email with (.*?) "(.*?)" doesn't exist$/, function(field, value) {
  var filter = {};
  filter[field] = value;
  
  var mailRow = mails.filter(filter);
  
  expect(mailRow).not.to.exist();
});


Given(/^an email with (.*?) "(.*?)" doesn't exist under "(.*?)"$/, function(field, value, section) {
  var filter = {};
  filter[field] = value;
  
  var mailRow = mails.filter(filter);
  
  sections.navigate(section);
  expect(mailRow).not.to.exist();
});

Given(/^I'm at section "(.*?)"$/, function(section) {
  sections.navigate(section);
});

When(/^I click on button "(.*?)"$/, function(btnLabel) {
  var btn = $("button, .button").withText(btnLabel);
  
  btn.click();
});

When(/^I fill:$/, function(datatable) {
  var values = datatable.rowsHash();

  forms.fill(values);
});

When(/^I click on the email with:$/, function(datatable) {
  var filter = datatable.rowsHash();
  var mailRow = mails.filter(filter);
  
  mailRow.click();
});

When(/^I delete an email with Subject "(.*?)"$/, function(subject) {
  mails.remove({ "Subject" : subject });
});

When(/^I move an email with Subject "(.*?)" to "(.*?)"$/, function(subject, section) {
  mails.move({ "Subject" : subject }, section);
});

When(/^I navigate to section "(.*?)"$/, function(section) {
  sections.navigate(section);
});

Then(/^I should see an email with:$/, function(datatable) {
  var filter = datatable.rowsHash();
  var mailRow = mails.filter(filter);
  expect(mailRow).to.exist();
});

