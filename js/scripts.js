$(Document).ready(function () {
	$('#orderNow').click(function () {
		$('#ordering').show();
		$('#orderNow').hide();
	});
	$('#cancelNow').click(function () {
		alert('You are now leaving transaction section!');
		$('#ordering').hide();
		$('#orderNow').show();
	});

	// DOM

	$('#form').submit(function (event) {
		var userName = $('#fullName').val();
		var userContact=$('#phoneNumber').val();
        var pizzaSize= $('#size').val();
        var toppingsType=$("#form input:checkbox").val();
        alert(toppingsType );
        var delivery=$('#delivery').val();
        var userLocation=$('#location').val();
		event.preventDefault();
	});
});
