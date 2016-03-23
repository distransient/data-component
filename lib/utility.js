module.exports = { }
var query = module.exports.query = document.querySelector.bind(document)
  , queries = module.exports.queries = document.querySelectorAll.bind(document)
  , bindQuery = module.exports.bindQuery = function(i) { 
      return Element.prototype.querySelector.bind(i) }
  , bindQueries = module.exports.bindQueries = function(i) { 
      return Element.prototype.querySelectorAll.bind(i) }
  , forEach = module.exports.forEach = function (x, cb) { 
      for (var i = 0; i < x.length; i++) cb(x[i], i, x) }
  , queryEach = module.exports.queryEach = function (x, cb) { 
      forEach(queries(x), cb) }
