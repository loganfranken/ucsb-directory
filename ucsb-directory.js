var request = require('request');
var prompt = require('prompt');

prompt.start();

var cleanedName = "";

prompt.get(['name'], function (err, result) {
	if (err) { return onErr(err); }
	cleanedName = encodeURIComponent(result.name);
	getUcsbDirectoryInfo(cleanedName).then(function(person) { console.log(person); });
});

function onErr(err) {
	console.log(err);
	return 1;
}

function getUcsbDirectoryInfo(name)
{
	return new Promise(function(resolve, reject) {

		var url = 'http://www.identity.ucsb.edu/people_finder/?rs=search_person_records&rsargs=%5B%22person%22%2C%22' + name + '%22%5D&';
		var persons = [];
		request(url, function (error, response, body) {

			var cleanedBody = body.substring(11, body.length - 1).replace(/\\"/g, '"');
			var result = JSON.parse(cleanedBody);

			for(var index in result[0])
			{
				persons.push(result[0][index]);
			}

			resolve(persons);

		});

	});

}
