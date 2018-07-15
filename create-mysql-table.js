const mysql = require('mysql');

var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'node'
});

var sql_query = 'create table if not exists customers(`id` int(11) AUTO_INCREMENT not null primary key,`name` varchar(50) not null,`age` int(3) null )';
conn.connect(function(err){
	if(err)
		throw err;
	conn.query(sql_query, function(err, result){
		if(err)
			throw err;
		
		console.log(result);
		console.log('Table created successfully');
    });
})
