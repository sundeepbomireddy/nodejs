const http = require('http');
var cluster = require('cluster');
console.log(cluster)
if (cluster.isWorker) {
  console.log('I am a worker');
} else {
  console.log('I am a master');
  console.log(cluster.id)
 /* cluster.fork();
  cluster.fork();*/
} 
/// dns ////
var dns = require('dns');
//console.log(dns)

dns.lookupService('54.81.123.219', 22, (err, hostname, service) => {
  console.log(hostname, service);
  // Prints: localhost ssh
});
/////////

const hostname = 'localhost';
const port = 8080;

var name = 'abc';


var ress = {};
const server = http.createServer(function(req, res) {
  //res.statusCode = 200;
  ress = res;
  //res.setHeader('Content-Type', 'text/plain');
  res.write("Hellow world!!!")
  res.end();
  
});
//console.log(server)
server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(ress)
});


