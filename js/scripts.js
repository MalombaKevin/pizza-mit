$(Document).ready(function () {
	$('#orderNow').click(function () {
		$('#ordering').show();
		$('#orderNow').hide();
	});
	$('#cancelNow').click(function () {
	confirm("Are you sure you want leave this page?")
    $("#ordering").hide();
    $("#orderNow").show();
	
	});

	// $(".ordering").click(function(){
	//     $("#orderNow").toggle()
	//     $("#form").toggle()
	// });
});
