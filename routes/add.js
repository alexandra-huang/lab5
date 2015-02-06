var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
	console.log(data);
	var newFriend = {"name": req.query.name,
					"description": req.query.description,
					"imageURL": "http://lorempixel.com/400/400/people"};
	console.log(newFriend);
	res.render('add', newFriend);
	
	data["friends"].push(newFriend);	
}