
//will probably be used as suggestions for user based on what they type
exports.symbolSuggest = function(query: string) : Object {
  var url = 'http://d.yimg.com/aq/autoc?query=' + query + '&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks';
  // console.log(url);
  return fetch(url);
};

//some more details about a given stock
//http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json&view=detail
