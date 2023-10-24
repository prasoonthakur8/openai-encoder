const encoder = require('../src/encoder');
const decoder = require('../src/decoder');

const originalText = 'This is a test string.';
console.log('Original Text:', originalText);

const encodedText = encoder.encode(originalText);
console.log('Encoded Text:', encodedText);

const decodedText = decoder.decode(encodedText);
console.log('Decoded Text:', decodedText);
