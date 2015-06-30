var request = require('request')

var Client = function(keyId, keySecret){
	this.keyId = keyId;
	this.keySecret = keySecret;
	this.baseURL = "https://api.onename.com/v1"

	var getRequest = function(url, callback){
		var auth = "Basic " + new Buffer(keyId + ":" + keySecret).toString("base64");
		
		request({
			url: url,
			headers: {
				"Authorization": auth
			}}, 
			function(error, response, body){
				if (error)
					return callback(error);

				return callback(null, body);
		});
	}

	var postRequest = function(url, data, callback){
		var auth = "Basic " + new Buffer(keyId + ":" + keySecret).toString("base64");
		
		request({
			url: url,
			method: 'POST',
		    json: data,
			headers: {
				"Authorization": auth
			}}, 
			function(error, response, body){
				if (error)
					return callback(error);

				return callback(null, body);
		});
	}

	this.getUser = function(username, callback){
		var url = this.baseURL + "/users/" +  username
		getRequest(url, callback);
	}

	this.searchUser = function(query, callback){
		var url = this.baseURL + "/search?query=" + query
		getRequest(url, callback);
	}

	this.getUserbase = function(callback){
		var url = this.baseURL + "/users"
		getRequest(url, callback);
	}

	this.getUnspents = function(address, callback){
		var url = this.baseURL + "/addresses/" + address + "/unspents"
		getRequest(url, callback);
	}

	this.getNamesOwned = function(address, callback){
		var url = this.baseURL + "/addresses/" + address + "/names"
		getRequest(url, callback);
	}

	this.registerUser = function(data, callback){
		url = this.baseURL + "/users"
		postRequest(url, data, callback);
	}

	this.broadcastTransaction = function(data, callback){
		url = this.baseURL +  "/transactions"
		postRequest(url, data, callback);
	}

}

module.exports = Client;
