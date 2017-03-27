$().ready(function() {

	$('p').css('color', 'red');

	$('#StudentList').on("click", ".btn", function() {
		var buttonId = $('this').Id
		console.log('Id', buttonId);
	});

});