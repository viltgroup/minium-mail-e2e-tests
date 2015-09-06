var tables = require("tables");

var mails = {
  
  filter: function (filter) {
    return tables.rows("#mail-list", filter);
  },
  
  move: function (filter, section) {
    var mailRow = mails.filter(filter);
    var moveBtn = base.find("button").withText("Move");
    var sectionEntry = base.find(".dropdown-menu a").withText(section);
    
    mailRow.click();
    moveBtn.click();
    sectionEntry.click();
  },
  
  remove: function (filter) {
    var mailRow = tables.rows("#mail-list", filter);
    var removeBtn = base.find("button").withText("Delete");
    
    mailRow.click();
    removeBtn.click();
  }
}

if (typeof module !== 'undefined') module.exports = mails;