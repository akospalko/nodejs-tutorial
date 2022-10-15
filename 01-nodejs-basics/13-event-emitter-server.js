const http = require('http');

const server = http.createServer();
// server.on is basd on the eventEmitter of event module.
server.on('request', (req, res) => { 
  res.end("testing events on http server.");
})

server.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
