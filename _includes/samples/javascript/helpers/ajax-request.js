/*
	You can override the following (defaults shown):

    dataType: 'application/json',
    url: '/',
    data: {},
    method: 'GET',
    callback: null

*/

$.ajaxRequest({
	url: '/test',
	callback: (function(data, isSuccess) {
		
		if(isSuccess) {
			alert('All the data is WINNING');
		}
	});
});