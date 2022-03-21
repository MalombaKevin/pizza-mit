$(Document).ready(function () {
	// click action on image: hide and show
	$('#orderNow').click(function () {
		$('#ordering').show();
		$('#orderNow').hide();
	});
	$('#cancelNow').click(function () {
		alert('You are now leaving transaction section!');
		$('#ordering').hide();
		$('#orderNow').show();
	});

	// business logic
	function User(first, phone, size, crust, topping, deliver, locate) {
		this.customerName = first;
		this.phoneNo = phone;
		this.sizePizza = size;
		this.crustPizza = crust;
		this.toppingPizza = topping;
		this.deliverPizza = deliver;
		this.locationDelivery = locate;
	}
    

	$('#form').submit(function (event) {
        event.preventDefault();
		var userName = $('#fullName').val();
		var userContact = $('#phoneNumber').val();
		var pizzaSize = $('#size').val();
		var pizzaCrust = $('#crust').val();
		var toppingsType = $('#form input:checkbox').val();
		var deliveryOption = $('#delivery').val();
		var userLocation = $('#location').val();

		var newOrder = new User(
			userName,
			userContact,
			pizzaSize,
			pizzaCrust,
			toppingsType,
            deliveryOption,
			userLocation
		);
		$(".nameOfCustomer").append(" " + newOrder.customerName);
        $(".phoneNoCustomer").append(" " + newOrder.phoneNo);
        $(".pizzaSizeCustomer").append(newOrder.sizePizza);
        $(".crustTypeCustomer").append(newOrder.crustPizza);
        $(".toppingTypeCustomer").append(newOrder.toppingPizza);
        $(".deliveryCustomer").append(newOrder.deliverPizza);
        $(".userLocationDeliver").append(newOrder.locationDelivery);

	
	});
});
