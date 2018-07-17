var mongoclient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
mongoclient.connect(url, {useNewUrlParser:true},function(err,db){
	if(err)
		throw err;
	var dbo = db.db("node");
	var find = {last_name:'ramya'};
	dbo.collection("customers").find(find).toArray(function(err, result){
		if (err) throw err;
    	console.log(result);
    	
    	db.close();
	})
});