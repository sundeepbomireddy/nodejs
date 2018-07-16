const mysql = require('mysql');

var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'node'
});

var sql = 'select * from customers where id=1';

conn.query(sql,function(err, result, fields){
	if(err)
		throw err;
	console.log(result);

});