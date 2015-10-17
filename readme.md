# to-percentage [![Build Status](https://travis-ci.org/johnotander/to-percentage.svg?branch=master)](https://travis-ci.org/johnotander/to-percentage) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Convert percentages in float form to their corresponding string representations.

## Installation

```
npm i --save to-percentage
```

## Usage

```javascript
var toPercentage = require('to-percentage')

toPercentage(0.12345, 2)  // => '12.35%'
toPercentage(0.12341, 2)  // => '12.34%'
toPercentage(0.123456789, 0)  // => '12%'
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

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
