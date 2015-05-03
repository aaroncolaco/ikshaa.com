$(document).ready(function() {

	$('body').scrollspy({ target: '.navbar' }); /*To highlight current position on the navbar while scrolling*/

	$('#form').on('submit', function(ev) {

		// prevent from auto-submitting  
		ev.preventDefault();
		ev.stopPropagation();

		// if all is good, then submit.
		sendData();

	});

	$(".nav a").on("click", function(){
		// so that the clicked one gets highlighted
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
		//to hide the menu after clicking
		$('.navbar-collapse').collapse('hide');
	});
	
	//function to send data to the PHP script
	var sendData = function() { 
		var name = $('#name').val();
		var email = $('#email').val();
		var number1 = $('#number1').val();
		var number2 = $('#number2').val();
		var company= $('#company').val();
		var designationText= $('#designationText').val();
		var message = $('#message').val();

		var messageToSend = "Name: " + name + "\nEmail: " + email + "\nLandline: " +	//have to use double quotes since PHP detects  
			number1 + "\nCell Phone: " + number2 + "\nCompany: " + company +			//escape sequences like \n only in double quotes
			"\nDesignation: " + designationText + "\nMessage: " + message;

		var dataString = "Name=" + name + "&Email=" + email + "&MessageToSend=" + messageToSend;

		//alert (dataString);return false; 	//uncomment to display the data that will be sent to the php script on button click

		$.ajax({
			type: "post",
			url: "/php/mail.php",
			data: dataString,
			complete: function() {
				$('.form').hide()
				$('#changingText').text("Thank you " + name +  "! We will be in touch with you shortly")
			},
			error: function(xhr, textStatus, error){
				  console.log(xhr.statusText);
				  console.log(textStatus);
				  console.log(error);
			  }
		});
		
		return;
	}

});
