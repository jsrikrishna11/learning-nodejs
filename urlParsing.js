var url = require('url');
var address = 'https://localhost:8080/default.htm?year=2017&month=february';
var parsed = url.parse(address, true);

console.log(parsed);