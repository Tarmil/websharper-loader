// import { getOptions } from 'loader-utils';

// // dummy identity asynchronous loader.
// export default function(source) {
//     const options = getOptions(this);
//     var callback = this.async();
//     callback(null, source);
// }

var utils = require('loader-utils');

function loader(source) {
  const options = utils.getOptions(this)
  var callback = this.async()
  callback(null, source)
}

module.exports = loader;
module.exports.default = loader;
