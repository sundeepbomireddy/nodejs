var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("node");
  var query = { address: /^S/ };
  dbo.collection("users").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 