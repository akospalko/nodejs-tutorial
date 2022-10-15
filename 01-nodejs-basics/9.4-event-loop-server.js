const http = require('http');

console.log('before server creation');
const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('hello world'); // sends response to port 5000 screen
});


server.listen(5000, () => {
  console.log('server is listening on port 5000...');
});

console.log('after server creation');
/*


*/