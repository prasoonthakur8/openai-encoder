# OpenAI Encoder (GPT-3 & GPT-4)

This package provides advanced text encoding and decoding functionalities specifically designed for use with OpenAI's GPT-3  API.

## Installation

```bash
npm install openai-encoder
```

##  Usage
Here's a quick example:

```js
const encoder = require('openai-encoder/src/encoder');
const decoder = require('openai-encoder/src/decoder');

const originalText = 'This is a test string.';
const encodedText = encoder.encode(originalText);
const decodedText = decoder.decode(encodedText);
```
