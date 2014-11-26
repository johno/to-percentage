# To Percentage

[![Build Status](https://travis-ci.org/johnotander/to-percentage.svg?branch=master)](https://travis-ci.org/johnotander/to-percentage)

Convert percentages in float form to their corresponding string representations.

## Installation

```
npm i --save to-percentage
```

## Usage

```javascript
var toPercentage = require('to-percentage');

toPercentage(0.12345, 2) // => '12.35%'
toPercentage(0.12341, 2) // => '12.34%'
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
