module.exports = function innerText(el) {
  var html = el.innerHTML;
  html = html.replace(/&nbsp;/g, ' ');
  html = html.replace(/<(\/|(b|i))*>/g, '');
  html = html.replace(/<(\/|br)*>/g, '\n');
  return html;
};