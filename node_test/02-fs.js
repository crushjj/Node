const fs = require('fs');

const data = fs.readFileSync('./01-node_log.js');
console.log(data.toString());

fs.readFile('./01-node_log.js', (err,data) => {
  console.log(data);
});

console.log('其他操作');
// 1.异步操作
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
readFile('./01-node_log.js').then( data => console.log(data.toString()) )