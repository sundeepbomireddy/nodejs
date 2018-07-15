const http = require('http');
const url = require('url');
const fs = require('fs');
//console.log(fs);
//console.log(fs.readFile());

const hostname = "127.0.0.1";
const port = 3000;
var filecontent;
const server = http.createServer(function (req, res){

	var q = url.parse(req.url,true);
	//console.log(q.pathname)
	var filename = "."+q.pathname;
	fs.readFile(filename, 'utf-8', function(err, data){
		console.log('in readfile')
		if(err){
			res.writeHead(404, {'Content-Type':'text/html'});
			res.end('404 File not found');
		}
		else
		{
			
			res.write(data);
			res.end();
			/*fs.appendFile('abc.html',data,(err) => {
				if(err)
				{
					throw err;
				}
	        })*/
	        /*fs.writeFile('message.html', data, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});*/
		}
	})
	console.log('outside of readfile')
	//console.log(filecontent);
	//  create new file and write content to it
	/*fs.appendFile('abc.html',filecontent,(err) => {
		if(err)
		{
			throw err;
		}
	});*/
    if(fs.existsSync('message.html'))
    {
    	fs.unlink('message.html',(err)=>{
		if(err)
		{
			console.log(err.code)
			throw err;

		}
		
		console.log('file deleted successfully');
	   });

    }
	

	
})

server.listen(port, hostname, function(){
	console.log('Server running at http://'+hostname+':'+port);
})