var https = require('https');
var gunzip = require('zlib').createGunzip();

function search(err, callback) {
	var options = {
	    host: 'api.stackexchange.com',
	    path: '/2.1/search/advanced?order=desc&sort=activity&body=' + encodeURI(err) + '&accepted=True&tagged=node.js&site=stackoverflow&sort=relevance&page=1&pagesize=1'
	};

	https.get(options, function(res) {
		var body = '';

		res.pipe(gunzip);

		gunzip.on('data', function (data) {
			body += data;
		});

		gunzip.on('end', function() {
			var s = JSON.parse(body);
			if('items' in s) {
				for(var i in s['items']) {
					return callback(s['items'][i]);
				}
			}
		});
	});
}

function answer(id, callback) {
	var options = {
	    host: 'api.stackexchange.com',
	    path: '/2.1/answers/' + id + '?order=desc&sort=activity&site=stackoverflow&filter=!--gViVQ5QWA7'
	};

	https.get(options, function(res) {
		var body = '';

		res.pipe(gunzip);

		gunzip.on('data', function (data) {
			body += data;
		});

		gunzip.on('end', function() {
			var a = JSON.parse(body);
			return callback(a);
		});
	});
}

// intercept unhandled exception
process.on('uncaughtException', function(err) {

	// search stackoverflow for error message
	search(err, function(result) {
		console.log('');
		console.log('Take a look at ' + result['items'][i]['link']);
		console.log('The correct answer would be:');
		console.log('');

		answer(result["accepted_answer_id"], function (answer) {
			console.log(answer);
		});
	});
});