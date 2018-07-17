var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("node");
  var mysort = { name: -1 };
  dbo.collection("users").find().sort(mysort).limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 