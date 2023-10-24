const pako = require('pako');

module.exports = {
  encode: function(text) {
    const compressed = pako.deflate(text);
    const base64 = Buffer.from(compressed).toString('base64');
    return base64;
  }
};
