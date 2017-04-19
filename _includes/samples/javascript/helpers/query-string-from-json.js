var objectItem = {
		item_1: 'a value',
		item_2: true
	};

var queryString = $.queryString.fromJson(objectItem);

// Returns ?item_1=a%20value&item_2=true