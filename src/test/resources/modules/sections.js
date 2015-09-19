var sections = {
  /**
   * @param tableElem string or webelement representing a table
   */
  navigate: function (path) {
    var navElem = base.find(".list-group-item span").withText(path);
    
    navElem.click();
  }
};

if (typeof module !== 'undefined') module.exports = sections;