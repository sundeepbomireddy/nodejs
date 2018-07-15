const mysql = require('mysql');

var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'node'
});

var sql_query = 'insert into customers(`name`,`age`) values ?';
var values = [ ['ravi',25],['koti',30],['srinivas',30],['praveen',29] ];
conn.connect(function(err){
	if(err)
		throw err;
	conn.query(sql_query, [values], function(err, result){
		if(err)
			throw err;
		if(result.affectedRows > 0)
		console.log(result.affectedRows+' Records saved successfully');
	    else
	    console.log('Records not saved');	
    });
})
