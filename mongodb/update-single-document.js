var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, {useNewUrlParser:true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("node");
  var newvalues = {$set: {address:"Sideway 1633 sss"} };
  var find = {name:"Viola"};
  dbo.collection("users").updateOne(find, newvalues,function(err, res){
  	 if (err) throw err;
  	 if(res)
     console.log("1 document updated");
     db.close();
  })
  
}); 