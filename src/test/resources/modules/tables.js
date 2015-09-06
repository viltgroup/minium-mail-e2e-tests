var tables = {
  /**
   * @param tableElem string or webelement representing a table
   */
  rows: function (tableElem) {
    tableElem = tableElem ? base.find(tableElem) : base.find("table");
    var filters = Array.prototype.slice.call(arguments, 1);
    var headers = tableElem.find("th");
    var cells = tableElem.find("td");
    var rows = tableElem.find("tbody > tr");
    
    filters.forEach(function (filter) {
      for (var prop in filter) {
        var header = headers.withText(prop);
        rows = rows.has(cells.withText(filter[prop]).below(header));
      }
    });
    
    return rows;
  }
};

if (typeof module !== 'undefined') module.exports = tables;