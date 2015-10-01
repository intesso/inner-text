# inner-text

Cross Browser `innerText` function based on innerHTML with replacements.


> innerText is a practical function, that is not standardized, but Chrome and IE support. Firefox doesn't.
> There is different ways to implement the innerText functionality.

You can get a selection `window.getSelection()`, select all the elements  `selection.selectAllChildren(el)` and call `selection.toString()`.
The problem is, that it is based on the user selection, and you can mess it up.

If you want to go this route: [inner-text-shim](https://github.com/intesso/inner-text-shim) is for you.

Otherwise this function can be helpful.

# usage

all innerText does is get the `el.innerText` from the `element`, even when the browser does not support it.
you can't set the `innerText` with this module.

```js
var innerText = require('inner-text');
var el = document.querySelector('body');
el.innerHTML = 'hello<br/>welt'

var text = innerText(el)

/* text ->
"hello

welt"
/*
```

# license
MIT

# author
Andi Neck | [@andineck](https://twitter.com/andineck)
