var forms = {

  fill : function (vals) {
    for (var fldName in vals) {
      var value = String(vals[fldName]);

      var fld = base.find("input, textarea, select").withLabel(fldName);

      if (fld.waitForExistence().is("select")) {
        fld.select(value);
      } else {
        fld.fill(value);
      }
    }
  },

  submit : function () {
    var btn = base.find(":submit");

    btn.click();
  }
};

if (typeof module !== 'undefined') module.exports = forms;
