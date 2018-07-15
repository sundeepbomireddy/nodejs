const mysql = require('mysql');

var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'node'
});

var sql = 'select id,name from customers';

conn.query(sql,function(err, result, fields){
	if(err)
		throw err;
	//console.log(result);
	//console.log(fields);
	//console.log(result[0].name);
	var names = [];
	for (var i = 0; i < result.length; i++) {
		console.log(result[i].name);
		names.push(result[i].name);
	}
	//console.log(names.toString());

});