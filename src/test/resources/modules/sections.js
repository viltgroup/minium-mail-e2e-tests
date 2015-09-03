var sections = {
  /**
   * @param tableElem string or webelement representing a table
   */
  navigate: function (path) {
    var navElem = base.find(".list-group-item").has(base.find("a").contents().withText(path));
    
    navElem.click();
  }
};

if (typeof module !== 'undefined') module.exports = sections;