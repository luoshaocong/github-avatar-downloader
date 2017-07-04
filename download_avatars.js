var GITHUB_USER = "luoshaocong";
var GITHUB_TOKEN = "36bcb144faeb2d3d82d0b333ea2ed8c3f3080354";
var request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
	var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
	var options = {
	  url: requestURL,
	  headers: {
	    'User-Agent': 'request'
	  }
	};
	request(options, function(err, response,body){
	  if(err){
	    console.log(`Error fetching: ${requestURL}`, err);
        return;
	  }
	  if (body){
	  	var parsedBody = JSON.parse(body);
	  	cb(null,parsedBody)
      }
	});

}
function callback(err, result){
	for(var i = 0 ; i < result.length;i++){
		console.log(result[i].avatar_url);
	}
}
console.log('Welcome to the GitHub Avatar Downloader!');




getRepoContributors("jquery", "jquery", callback);