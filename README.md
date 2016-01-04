# onename-node
Unofficial Node.js library for Onename API.

When I wrote this library, there was no official version of Onename library for Node.js. However, Currently, there is an offical library here: https://github.com/onenameio/onename-node.js. The official version may be more updated. Please compare both to see which one suits your needs.

##Documentation

Client = require('./lib/client')

var client = new Client(ONENAME_APP_ID, ONENAME_APP_SECRET)


##USERS

###Lookup users

	client.getUser("fredwilson", function(error, response){
		if (error)
			console.log(error)
		else
			console.log(response);
	});

###Search for users

	client.searchUser("wenger", function(error, response){
		if (error)
			console.log(error)
		else
			console.log(response);
	});

###Register users

	data = {'passname' : 'fredwilson', 'recipient_address' : 'N6zdUCKq1gJaps76gagBbC5Vc6xBxMdvHc', 'passcard' : {'bio' : 'I am a VC'}};

	client.registerUser(data, function(error, response) {
		if (error)	
			console.log(error)
		else
			console.log(response);
	});

###Get entire userbase
	client.getUserbase(function(error, response){
		if (error)
			console.log(error)
		else
			console.log(response);
	});


##TRANSACTIONS

###Broadcast transactions
	data = {'signed_hex' : '00710000015e98119922f0b'};

	client.broadcastTransaction(data, function(error, response) {
		if (error)	
			console.log(error)
		else
			console.log(response);
	});


##ADDRESSES

###Get unspent outputs
	client.getUnspents("N8PcBQnL4oMuM6aLsQow6iG59yks1AtQX4", function(error, response){
		if (error)
			console.log(error)
		else
			console.log(response);
	});

###Get names owned
	client.getNamesOwned("N8PcBQnL4oMuM6aLsQow6iG59yks1AtQX4", function(error, response){
		if (error)	
			console.log(error)
		else
			console.log(response);
	});



