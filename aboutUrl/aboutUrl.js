const URL = require('url');

const url = new URL.URL('https://www.google.com/search?q=nodejs')

console.log(url)

console.log(url.searchParams.has('q')) // true
console.log(url.searchParams.get('q')) // nodejs