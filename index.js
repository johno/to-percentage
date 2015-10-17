'use strict'

module.exports = function toPercentage (value, numDecimals) {
  if (typeof value !== 'number') {
    throw new TypeError('to-percentage expected a number')
  }

  value *= 100
  return value.toFixed(value % 1 === 0 ? 0 : numDecimals) + '%'
}
