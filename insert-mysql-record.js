const mysql = require('mysql');

var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'node'
});

var sql_query = 'insert into customers(`name`,`age`) values("sandeep",30)';
conn.connect(function(err){
	if(err)
		throw err;
	conn.query(sql_query, function(err, result){
		if(err)
			throw err;
		if(result.affectedRows > 0)
		console.log('Record saved successfully');
	    else
	    console.log('Record not saved');	
    });
})
