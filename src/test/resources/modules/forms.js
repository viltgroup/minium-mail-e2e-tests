var forms = {
  
  fill : function (vals) {
    for (var fldName in vals) {
      var value = vals[fldName];
      
      var fld = base.find("input, textarea, select, [contenteditable]").withLabel(fldName);
      // var suggestion = base.find(".suggestion-item").withText(value);

      if (fld.waitForExistence().is("select")) {
        fld.select(value);
      } else {
        fld.fill(value);
        // we need to handle autocompletions in tags
        // if (fld.parents("tags-input").checkForExistence("immediate")) {
        //   suggestion.click();
        // }
      }
    }
  },
  
  submit : function () {
    var btn = base.find("submit");
    
    btn.click();
  } 
};

if (typeof module !== 'undefined') module.exports = forms;