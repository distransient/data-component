# Data Components

The non-library javascript library - just use the browser!

```html
<div data-my-component="[data-my-component-thing]">
  <!-- Be mindful of your naming scheme! -->
  <p data-my-component-thing></p>
</div>
```

```js
function queryEach(query, callback) {
  for (var i = 0, x = document.querySelector(query); i < x.length; i++)
    callback(x[i], i, x)
}

// This is a component, 
// usually the value of the attribute refers to something
// in the way of a css selector
queryEach('[data-my-component'], function (x) {
  // This is how we'd work with that component, 
  // usually we'll do this once an event is fired.
  queryEach(x.getAttribute('data-my-component'), function (i) {
    // Once we're to the element and are ready to do DOM manipulation
    // we need to be mindful to do the bare minimum required of 
    // what we consider to be this components concerns!
    i.textContent = 'Hello, world'
  })
})
```

Working your DOM manipulation in this fashion preserves the declarative nature 
of your html, makes no-js sessions more easy to make possible, and given good 
component naming, keeps effects of manipulations clear in the markup.

## Sympathy

99.99% (Not sure what the order of 9's should be here, but we're using the
order of 9's so that says something) of websites absolutely do not need
libraries and frameworks like JQuery (whose API reminds me of a car from the 
[24 Hours of LeMons][]) to do the things they wish to do, and the prevalence
of drop-in libraries depending on JQuery and 
[transpilers that output horror stories][babel] seems to obfuscate that the
things these tools do aren't very difficult to do without using said tools.

Given, sometimes [deadlines][hell], [legacy code][hell], or just your 
[boss telling you no][hell] can get in the way of the very real problem of
your otherwise fairly static website either nuking someones' phone bill,
or just loading plain slow on computers with less memory or on bad connections.
However, it doesn't hurt to give this draconian art a little bit of practice
(even if it's just on a side project).

## Browser Support

Everything except IE8 and lower (or, over 95% of User Agents).

- [querySelector][] (can be polyfilled out with [black magic][])
- [addEventListener][] (call `EventTarget.attachEvent` on IE8 and lower)
- [es5][] (`Function.prototype.bind`, only used for convenience)

## License

Public domain; the contents are simple snippets. Don't just copy & paste them.

[24 Hours of LeMons]: https://www.24hoursoflemons.com/
[babel]: https://babeljs.io/repl/#?code=class%20Garbage%20extends%20String%20{%20constructor%28%29%20{%20super%28%29%3B%20this.is%20%3D%20%27cool%27%20}%20}
[hell]: http://vignette3.wikia.nocookie.net/spongebob/images/2/2e/Fire_SpongeBob.png/revision/latest?cb=20130506032003
[querySelector]: http://caniuse.com/#feat=queryselector
[black magic]: https://gist.github.com/chrisjlee/8960575 
[addEventListener]: http://caniuse.com/#feat=addeventlistener
[es5]: http://caniuse.com/#feat=es5

