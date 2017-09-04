var File = Packages.java.io.File;


$.fn.html5Upload = function (value) {
  $(":root").apply(function () {
    if ($("#minium-upload").length === 0) {
      $("<input/>").attr({ id: 'minium-upload', type:'file' }).css("opacity", "0").appendTo("body");
    }
  });
  
  var uploadFld = $("#minium-upload");
  
  uploadFld.type(new File(config.uploadDir, value).getAbsolutePath());
  
  $(this).apply(function () {
    var files = $("#minium-upload").get(0).files;
    var fld = $(this).get(0);
  
    var ev = document.createEvent("HTMLEvents");
    ev.initEvent("drop", true, true);
    ev.preventDefault = function () {};
    ev.type = "drop";
    ev.dataTransfer =  {
      files : files
    };
    
    fld.dispatchEvent(ev);
  });
};

var forms = {

  fill : function (vals) {
    for (var fldName in vals) {
      var value = String(vals[fldName]);

      var fld = base.find("input, textarea, select, .drop-zone").withLabel(fldName);
      
      if (fld.waitForExistence().is("select")) {
        // select boxes
        fld.select(value);
      } else if (fld.waitForExistence().is(":checkbox")) {
        // checkboxes
        if (value === "true") {
          fld.check();
        } else {
          fld.uncheck();
        }
      } else if (fld.waitForExistence().is(":file")) {
        // normal file upload
        if (value) fld.type(config.uploadDir + "/" + value);
      } else if (fld.waitForExistence().is(".drop-zone")) {
        fld.html5Upload(value);
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
