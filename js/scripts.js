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
	$('#refresh').click(function(){
		alert("New Order!")
		location.reload();
		$('#ordering').show();
		$('#orderNow').hide();
	})

	// business logic
	function Order(first, phone, size, crust, topping, number, deliver, locate) {
		this.customerName = first;
		this.phoneNo = phone;
		this.sizePizza = size;
		this.crustPizza = crust;
		this.toppingPizza =topping;
		this.noPizza = number;
		this.deliverPizza = deliver;
		this.locationDelivery = locate;
	}
	Order.prototype.totalPizzaSizeCost = function () {
		if (this.sizePizza == 'large') {
			return 2600;
		} else if (this.sizePizza == 'medium') {
			return 1700;
		} else if (this.sizePizza == 'small') {
			return 900;
		} else {
			return 0;
		}
	};
	Order.prototype.totalCrustPizzaCost = function () {
		if (this.crustPizza == 'Crispy') {
			return 350;
		} else if (this.crustPizza == 'Stuffed') {
			return 350;
		} else if (this.crustPizza == 'Glutten Free') {
			return 350;
		} else {
			return 0;
		}
	};

	
	Order.prototype.totalLocationDeliveryCost = function () {
		if (this.locationDelivery == 'Juja') {
			return 150;
		} else if (this.locationDelivery == 'Thika') {
			return 300;
		} else if (this.locationDelivery == 'TRM') {
			return 500;
		} else if (this.locationDelivery == 'Muthaiga') {
			return 700;
		} else if (this.locationDelivery == 'Nairobi CBD') {
			return 900;
		} else {
			alert(
				'Delivery Option Not Available in Your Area. Contact Customer Care'
			);
			return 0;
		}
	};
	
	Order.prototype.totalPizzaCost = function () {
		return parseInt(
			this.totalCrustPizzaCost() +
			this.totalPizzaSizeCost() +
			200 +
			this.totalLocationDeliveryCost())*this.noPizza
	
	};

	$('#form').submit(function (event) {
		event.preventDefault();
		var userName = $('#fullName').val();
		var userContact = $('#phoneNumber').val();
		var pizzaSize = $('#size').val();
		var pizzaCrust = $('#crust').val();
		var pizzaTopping=$('#toppings').val()
		var pizzaOrderNumber = $('#pizzaNumber').val();
		var deliveryOption = $('#delivery').val();
		var userLocation = $('#location').val();

		var newOrder = new Order(
			userName,
			userContact,
			pizzaSize,
			pizzaCrust,
			pizzaTopping,
			pizzaOrderNumber,
			deliveryOption,
			userLocation
		);
		// User choices
		$('.nameOfCustomer').append(' ' + newOrder.customerName);
		$('.phoneNoCustomer').append(' ' + newOrder.phoneNo);
		$('.pizzaSizeCustomer').append(newOrder.sizePizza);
		$('.crustTypeCustomer').append(newOrder.crustPizza);
		$('.toppingTypeCustomer').append(newOrder.toppingPizza);
		$('.numberOfPizzasOrder').append(newOrder.noPizza);
		$('.deliveryCustomer').append(newOrder.deliverPizza);
		$('.userLocationDeliver').append(newOrder.locationDelivery);

		// total costs
		$('.pizzaSizeCost').append(newOrder.totalPizzaSizeCost());
		$('.crustTypeCost').append(newOrder.totalCrustPizzaCost());
		$('.toppingTypeCost').append(200);
		$('.numberOfPizzasOrderTotal').append(newOrder.noPizza);
		$('.deliveryCustomerCost').append(newOrder.deliverPizza);
		$('.userLocationDeliverCost').append(newOrder.totalLocationDeliveryCost());
		$('.userPizzaAmount').append(newOrder.totalPizzaCost());
	});
});
