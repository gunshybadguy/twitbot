console.log("start my bot"); 

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config); 

var params = {

	screen_name: 'annakendrick47',
	count: 3
}

T.get('statuses/user_timeline', params, gotData);

function gotData(err, data, response){

	console.log(data); 

	// var tweets = data.urls;
	// for (var i=0; i<tweets.length; i++){
	// 	console.log(tweets[i].expanded_url); 
	// }
 
}