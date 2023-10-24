const encoder = require('../src/encoder');
const decoder = require('../src/decoder');

test('encode and then decode should return the original string', () => {
  const originalText = 'hello world';
  const encoded = encoder.encode(originalText);
  const decoded = decoder.decode(encoded);
  expect(decoded).toBe(originalText);
});
