var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, {useNewUrlParser:true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("node");
  var newvalues = {$set: {address:"ABC"} };
  var find = {address:/^S/};
  dbo.collection("users").updateMany(find, newvalues,function(err, res){
  	 if (err) throw err;

     console.log(res.result.nModified + " document(s) updated");
     console.log(res)
      console.log(res.result)
     db.close();
  })
}); 