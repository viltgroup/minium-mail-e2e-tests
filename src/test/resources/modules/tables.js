var tables = {
  /**
   * @param tableElem string or webelement representing a table
   */
  rows: function (tableElem, filter) {
    tableElem = tableElem ? base.find(tableElem) : base.find("table");
    var headers = tableElem.find("th");
    var cells = tableElem.find("td");
    var rows = tableElem.find("tbody > tr");
    
    if (!filter) return rows;
    
    var filteredRows = rows;
    
    for (var prop in filter) {
      var value = filter[prop];
      var header = headers.withText(prop);
      var cell = cells.withText(value).below(header);
      filteredRows = filteredRows.has(cell);
    }

    return filteredRows;
  }
};

if (typeof module !== 'undefined') module.exports = tables;