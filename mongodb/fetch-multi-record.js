var mongoclient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017";

mongoclient.connect(url, {useNewUrlParser:true},function(err,db){

	if(err)
		throw err;
	var dbo = db.db("node");

	dbo.collection("customers").find({}).toArray(function(err, result){
		if (err) throw err;
    	console.log(result);
    	for (var i = 0; i < result.length; i++) {
    		console.log(result[i]['first_name']);
    	}
    	db.close();
	})
	
});