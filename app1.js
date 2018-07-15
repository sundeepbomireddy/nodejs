
// creating user defined modules 
const http = require('http');
const dt = require('./datemodule');
const url = require('url');
console.log(url);
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer(function (req,res){
  res.statuscode = 200;
  res.setHeader('Content-type','text/plain');
  res.write(req.url+"\n");
  var q = url.parse(req.url, true).query;

  res.write(q.year + " "+ q.month+"\n");
  res.end('Hello World\n');
})

server.listen(port, hostname, function(){
  console.log('Server Running at http://'+hostname+' with port '+port);
  //console.log('DATE IS'+dt.showDate())
});