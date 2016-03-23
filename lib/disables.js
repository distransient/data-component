var u = require('./utility')

u.queryEach('[data-enables]', function (x) {

})

u.queryEach('[data-disables]', function (x) {
  x.addEventListener('click', function () {
    u.queryEach(x.getAttribute('data-disables'), function (i) { 
      i.disabled = !i.disabled 
    }
  }
})
