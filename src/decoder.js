const pako = require('pako');

module.exports = {
  decode: function (encodedData) {
    const buffer = Buffer.from(encodedData, 'base64');
    const decompressed = pako.inflate(buffer);
    const text = String.fromCharCode.apply(null, new Uint16Array(decompressed));
    return text;
  }
};
