
Given(/^I'm at the login page$/, function() {
  browser.get(config.baseUrl + "/#/login");
});

Then(/^I should go to the homepage$/, function() {
  expect($(".list-group-item")).to.exist();
});

Then(/^I should see an error message$/, function() {
  var alertMsg = $(".alert");
  expect(alertMsg).to.have.text(" × Oh snap! Wrong login ");
});

When(/^I submit the registration form with:$/, function(datatable) {
 var values = datatable.rowsHash();
  for (var fldName in values) {
    $("input").withName(fldName).fill(values[fldName]);
  }
  $("#submit-btn").click();
});
