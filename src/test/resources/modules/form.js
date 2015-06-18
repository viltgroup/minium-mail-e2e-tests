
var form = {
  
  fillFld : function (fldName, val) {
    var inputs = base.find("input, textarea, select, [contenteditable]");
    var fieldInput = $(inputs.withAttr("data-placeholder", fldName), inputs.withLabel(fldName + ':'));

    if (fieldInput.is("select")) {
      fieldInput.select(val);
    } else {
      fieldInput.fill(val);
    }    
  },
  

  send : function () {
    var btn = $("button").withText("Send");
    btn.click();
  } 
};

if (typeof module !== 'undefined') module.exports = form;