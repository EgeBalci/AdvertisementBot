var Twit = require('twit');
var colors = require('colors');

var T = new Twit({
    consumer_key:         '---YOUR CONSUMER KEY HERE---'
  , consumer_secret:      '---YOUR CONSUMER SECRET HERE---'
  , access_token:         '---YOUR ACCES TOKEN HERE---'
  , access_token_secret:  '---YOUR ACCES TOKEN SECRET HERE---'
})



var stream = T.stream('statuses/filter', { track:  '---KEYWORDS TO LOOK FOR---', lang :'tr' })
 
stream.on('tweet', function (tweet) {
	
		var Counter_flag = 0;
		
		if(tweet.place.name == "İstanbul" && Counter_flag == 0){
			
			T.post('statuses/update', {in_reply_to_status_id:tweet.id_str, status:'@'+tweet.user.screen_name+'---ADVERTISEMENT CONTENT HERE---'}, function(err, data, response) {
		  console.log("---------------->"+" Gönderildi".green);
		  Counter_flag++;
		  console.log("Waiting 4 hours for next twit !".yellow);
		})
		
		
		
		}else if(Counter_flag == 1){
			Counter_flag++;
			setTimeout(function(){Counter_flag = (Counter_flag - 2);},14400000);//Change 14400000sn for desired delay
			
			
		}
		
		
		
	
	
  
  console.log("@"+tweet.user.screen_name+": "+tweet.text);
  
  
})