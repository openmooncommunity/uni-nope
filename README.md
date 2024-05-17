# uni-nope

[![npm version](https://img.shields.io/npm/v/uni-nope.svg?style=flat-square)](https://www.npmjs.com/package/uni-nope)
[![license](https://img.shields.io/github/license/openmooncommunity/uni-nope.svg?style=flat-square)](https://github.com/openmooncommunity/uni-nope/blob/master/LICENSE)

uni-nope is a Node.js package that provides a simple way to filter non-ASCII characters from strings using regular expressions.

## Installation

You can install the package via npm:

```bash
npm install uni-nope
```

## Usage

```javascript
const rejectASCII = require('uni-nope');

const input = 'Hello, 世界!';
const filtered = rejectASCII(input);
console.log(filtered); // Output: Hello, !
```

## API

### rejectASCII(inputString)

- `inputString` (string): The input string to filter.
- Returns: The filtered string with non-ASCII characters removed.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.