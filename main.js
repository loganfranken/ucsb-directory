var request = require('request');
var prompt = require('prompt');

prompt.start();

var cleanedName = "";

prompt.get(['name'], function (err, result) {
	if (err) { return onErr(err); }
	cleanedName = encodeURIComponent(result.name);

	var url = 'http://www.identity.ucsb.edu/people_finder/?rs=search_person_records&rsargs=%5B%22person%22%2C%22' +
			   cleanedName + '%22%5D&';
	request(url, function (error, response, body) {

	  console.log(body);

	});
});

function onErr(err) {
	console.log(err);
	return 1;
}