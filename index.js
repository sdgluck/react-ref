'use strict'

var React = require('react')

/**
 * Set reference to an element in React components.
 * @param {Object} instance React component
 * @param {String} name Name of the property to attach reference
 * @returns Function
 */
module.exports = function reactRef (instance, name) {
  if (React.isValidElement(instance) && typeof instance !== 'function') {
    throw new Error('Expecting instance to be a React component.')
  } else if (typeof name !== 'string') {
    throw new Error('Expecting name to be a string.')
  }

  return function setReactRef (elem) {
    if (!instance[name]) {
      instance[name] = elem
    }
  }
}
