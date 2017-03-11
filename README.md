# js-randstr
Simple library to generate random strings

#Installation
using [npm](http://github.com/isaacs/npm)
```sh
npm install js-randstr
```
using [bower](http://bower.io)
```sh
bower install js-randstr
```

#Usage
For nodejs
```js
var randstr = require('js-randstr');

// Generate random string of length 6
randstr(6);

// Generate random string with specified charset
randstr(8, 'abcd');

```

For browser
```html
<script src="bower_components/js-randstr/lib/randstr.js"></script>
<script>
// Generate random string of length 6
randstr(6);

// Generate random string with specified charset
randstr(8, 'abcd');
</script>

```

#Tests
```sh
# install dev dependencies
npm install

# run tests
npm test
```
