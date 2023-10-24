# OpenAI Encoder & Decoder

Advanced text encoding and decoding for OpenAI GPT-3 and GPT-4.

![version](https://img.shields.io/badge/version-1.0.1-blue)
![license](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [encode](#encode)
  - [decode](#decode)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, run the following command:

```bash
npm install openai-encoder
```

## Usage

Here's a simple example to get you started:

```javascript
const encoder = require('openai-encoder/src/encoder');
const decoder = require('openai-encoder/src/decoder');

const originalText = 'This is a test string.';
const encodedText = encoder.encode(originalText);
const decodedText = decoder.decode(encodedText);

console.log(`Original Text: ${originalText}`);
console.log(`Encoded Text: ${encodedText}`);
console.log(`Decoded Text: ${decodedText}`);
```

## API

### `encode`

Encodes the given text.

#### Parameters

- `text` (`String`): The text to encode.

#### Returns

- `String`: The encoded text.

### `decode`

Decodes the given encoded text.

#### Parameters

- `encodedText` (`String`): The text to decode.

#### Returns

- `String`: The decoded text.

## Testing

To run tests, execute the following command:

```bash
npm run test
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repo
2. Clone your fork
3. Create a feature branch
4. Make your changes
5. Commit and push
6. Create a new Pull Request

## License

MIT License. See the [LICENSE](LICENSE) file for details.
