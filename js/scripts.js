$(Document).ready(function () {
	$('#orderNow').click(function () {
		$('#ordering').show();
		$('#orderNow').hide();
	});
	$('#cancelNow').click(function () {
	alert("You are now leaving transaction section!")
    $("#ordering").hide();
    $("#orderNow").show();
	
	});

	// $(".ordering").click(function(){
	//     $("#orderNow").toggle()
	//     $("#form").toggle()
	// });
});
