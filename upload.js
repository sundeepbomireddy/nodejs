const http = require('http');
var formidable = require('formidable');
const fs = require('fs')
//console.log(formidable);
const hostname = 'localhost';
const port = 8080;
const server = http.createServer((req,res) =>{

  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
    	var oldpath = files.filetoupload.path;
    	var newpath = '/home/sandeep/Documents/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.write('file path'+files.filetoupload.path);
        res.write('file name'+files.filetoupload.name);
        res.write('file name'+files.filetoupload.type);
        res.end();
      });
    });
  }
  else{
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		res.end();
     }
});

server.listen(port,hostname,function(){

	console.log(`Server running at http://${hostname}:${port}/`);
})