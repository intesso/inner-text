var test = require('tape');
var innerText = require('./index');


test('should replace <br/> tag with newline', function(t){

  var el = document.querySelector('body');

  el.innerHTML = 'hello<br/>world';

  var text = innerText(el);

  t.equal(text, 'hello\nworld');

  t.end();
});


test('should replace <div> with newline, but not <div/> (chrome behaviour with contenteditable=true)', function(t){

  var el = document.querySelector('body');

  el.innerHTML = 'hello<div>world</div>';

  var text = innerText(el);

  t.equal(text, 'hello\nworld');

  t.end();
});


test('should remove "&nbsp;" with space', function(t){

  var el = document.querySelector('body');

  el.innerHTML = 'hello&nbsp;world';

  var text = innerText(el);

  t.equal(text, 'hello world');

  t.end();
});


test('should remove remaining html tags', function(t){

  var el = document.querySelector('body');

  el.innerHTML = 'hello<div>world</div><br><span class="important"><em>inner</em>Text</span>';

  var text = innerText(el);

  t.equal(text, 'hello\nworld\ninnerText');

  t.end();
});