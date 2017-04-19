// The browser's query string is ?item_1=a%20value&item_2=true


// Get that querystring as JSON
var queryStringAsJSON = $.queryString.toJson();

/*
	returns:

	{
		"item_1": "a value",
		"item_2": "true"
	}
*/

// Let's do that again but ignore 'item_2'
var queryStringAsJSON = $.queryString.toJson('item_2');

/*
	returns:

	{
		"item_1": "a value"
	}
*/