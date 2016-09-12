# react-ref

> :point_right: Set reference to an element in React components 

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/react-ref"><img alt="npm version" src="https://badge.fury.io/js/react-ref.svg"></a>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

```sh
npm install --save react-ref
```

## Import

```js
// ES6
import ref from 'react-ref'
```

```js
// CommonJS
var ref = require('react-ref')
```

## Usage

`ref(instance, name)`

- __instance__ {Object} React component
- __name__ {String} Name of property to attach element reference

Returns a function.

Example:

```js
class Input extends React.Component {
  focus () {
    this.input.focus()  
  }
  
  clear () {
    this.input.value = ''  
  }
  
  render () {
    return (
      <div className='Input'>
        <input type='text' ref={ref(this, 'input')} />
      </div>
    )  
  }
}
```

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out Kent C. Dodds'
[great video tutorials on egghead.io](https://egghead.io/lessons/javascript-identifying-how-to-contribute-to-an-open-source-project-on-github)!

## Author & License

`react-ref` was created by [Sam Gluck](https://twitter.com/sdgluck) and is released under the MIT license.
