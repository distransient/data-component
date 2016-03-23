module.exports = {
    query: document.querySelector.bind(document)
  , queries: document.querySelectorAll.bind(document)
  , bindQuery: function(i) { return Element.prototype.querySelector.bind(i) }
  , bindQueries: function(i) { return Element.prototype.querySelectorAll.bind(i) }
  , forEach: function (x, cb) { for (var i = 0; i < x.length; i++) cb(x[i], i, x); return x }
}
