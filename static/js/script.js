$(document).ready(function() {

	$('#form').on('submit', function(ev) {

		// prevent from auto-submitting  
		ev.preventDefault();
		ev.stopPropagation();

		// if all is good, then submit.
		sendData();

	});

	$(".nav a").on("click", function(){
			//to hide the menu after clicking, on mobile devices
			$('.navbar-collapse').collapse('hide');
		});
	
	//function to send data to the PHP script
	var sendData = function() { 
		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var email = $('#email').val();
		var number1 = $('#number1').val();
		var number2 = $('#number2').val();
		var company= $('#company').val();
		var designationText= $('#designationText').val();
		var message = $('#message').val();

		var name = fname + " " + lname;

		var messageToSend = "Name: " + name + "\nEmail: " + email + "\nCode: " +	//have to use double quotes since PHP detects  
			number1 + "\nCell Phone: " + number2 + "\nCompany: " + company +			//escape sequences like \n only in double quotes
			"\nDesignation: " + designationText + "\nMessage: " + message;

		var dataString = "Name=" + name + "&Email=" + email + "&MessageToSend=" + messageToSend;

		//alert (dataString);return false; 	//uncomment to display the data that will be sent to the php script on button click

		$.ajax({
			type: "post",
			url: "/static/php/mail.php",
			data: dataString,
			complete: function() {
				$('.form').hide();
				$('#changingText').text("Thank you " + name +  "! We will be in touch with you shortly");
			},
			error: function(xhr, textStatus, error){
				  console.log(xhr.statusText);
				  console.log(textStatus);
				  console.log(error);
			  }
		});
		
		return;
	};

});
