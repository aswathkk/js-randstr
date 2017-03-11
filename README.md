# js-randstr
Simple library to generate random strings

#install
```sh
npm install js-randstr --save
```

#usage
Using in nodejs
```javascript
var randstr = require('js-randstr');

// Some random string of length 6
var str = randstr(6)

console.log(str);

```

#test
```sh
# install dev dependencies
yarn

# testing
npm test
```