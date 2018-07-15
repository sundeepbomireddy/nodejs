var mysql = require('mysql');
console.log(mysql);
const util = require('util')



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = 'CREATE table  if not exists employee ()';
   con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result.affectedRows);
    //console.log(util.inspect(result, {showHidden: false, depth: null}))
    console.log(util.inspect(result, false,null));
  });
});

