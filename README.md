# inner-text

Cross Browser `innerText` function based on innerHTML with replacements.

> innerText is a function, that is not standardized, but Chrome and IE support. Firefox doesn't.

There is different ways to implement the innerText functionality.

> You can get a selection `window.getSelection()`, select all the elements  `selection.selectAllChildren(el)` and call `selection.toString()`.
>
> The problem is, that it is based on the user selection, and you can mess it up.
>
> If you want to go this route: [inner-text-shim](https://github.com/intesso/inner-text-shim) is for you.

Otherwise this function can be helpful.

# install
```sh
npm install inner-text
```

# usage

all innerText does is get the `el.innerText` from the `element`, even when the browser does not support it.
you can't set the `innerText` with this module.

```js
var innerText = require('inner-text');

// get the dom element with plain javascript
var el = document.querySelector('body');
// or with jquery:
el = $('body')[0];

// set the innerHTML (only for this example)
el.innerHTML = 'hello<br/>world';

var text = innerText(el)
assert.equal(text, 'hello\nworld');

```

# test
```sh
npm test
```

# license
MIT

# author
Andi Neck | [@andineck](https://twitter.com/andineck)
