var request = require('request');

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

module.exports = getUcsbDirectoryInfo;
