var request = require('request');

var url = 'http://www.identity.ucsb.edu/people_finder/?rs=search_person_records&rsargs=%5B%22person%22%2C%22logan%20franken%22%5D&';

request(url, function (error, response, body) {

  console.log(body);

});