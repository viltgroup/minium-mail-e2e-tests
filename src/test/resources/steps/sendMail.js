Given(/^I'm at sample app/, function() {
    browser.get(config.baseUrl);
});

var loading = $(".loading").withCss("display", "block");
// This base expression always returns the scope we're working on: The main window unless a modal is visible and a loding is visible
var base = $(":root").unless(".modal:visible").add(".modal:visible").unless(loading);


When(/^I fill the field "(.*?)" with "(.*?)"$/, function(field, value) {
    var inputs = base.find("input, textarea, select, [contenteditable]");

    var fieldInput = $(inputs.withAttr("data-placeholder", field), inputs.withLabel(field + ':'));

    if (fieldInput.is("select")) {
        fieldInput.select(value);
    } else {
        fieldInput.fill(value);
    }
});


When(/^I click on button "(.*)"$/, function(btnLabel) {
    clickOnButton(btnLabel);
});


Then(/^I navigate to section "(.*?)"$/, function(section) {
    var menu = base.find("#folders li").withText(section);
    menu.click();
});


Then(/^I should see an email with "(.*?)" equals to "(.*?)"$/, function(field, value) {
    var rows = base.find("table tr");
    var colName = "." + field;

    var elem = rows.find(colName).withText(value);
    expect(elem).to.have.size(1);
});


Then(/^I should see an email with:$/, function(datatable) {
    var values = datatable.rowsHash();
    var rows = base.find("table tr");

    for (var prop in values) {
        var val = values[prop];
        var colName = "." + prop;

        var elem = rows.find(colName).withText(val);
        expect(elem).to.have.size(1);
    }
});

When(/^I click on the email with:$/, function(datatable) {
    var values = datatable.rowsHash();
    for (var prop in values) {
        var val = values[prop];
        var colName = "." + prop;

        var elem = base.find(colName).withText(val);
        elem.click();
    }
});

When(/^I delete an email with Subject "(.*?)"$/, function(subject) {
    clickOnEmailWithSubject(subject);
    clickOnButton("delete");
});

When(/^I move an email with Subject "(.*?)" to "(.*?)"$/, function(subject, section) {
    clickOnEmailWithSubject(subject);
    clickOnButton("move");
    var menuElem = $(".move-to-selector ul li").withText("later");
    menuElem.click();
});


function clickOnEmailWithSubject(subject) {
    var elem = $(".Subject").withText(subject);
    elem.click();
}

function clickOnButton(btnLabel) {
    var btn = $("button").withText(btnLabel);
    btn.click();
}