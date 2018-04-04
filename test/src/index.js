const s = require('./test.fs');

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = s.text;

  return element;
}

document.body.appendChild(component());
