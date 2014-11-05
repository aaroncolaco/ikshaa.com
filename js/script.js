$(document).ready(function() {
	
	$('#submitButton').click(function() { 

		// $('#form')[0].checkValidity();
		// $('#form')[1].checkValidity();
		// if(!$('#form')[0].checkValidity()) {
		//   code here
		// }
		// if(!$('#form')[1].checkValidity()) {
		//   code here
		// }

		// var form = $('#form');
		// form.validate();
		// if(form.valid()) {
		//	//code here
		// }

		var $flag = true;
		//hide error message if it is showing
		$('#nameCheck').hide();
		$('#emailCheck').hide();

		if ($('#name').val() === '') {          //even this causes the same problem!!
			$flag = false;
			$('#nameCheck').show();		//show the error message
		};
		if ($('#email').val() === '') {
			$flag = false;
			$('#emailCheck').show();
		};

		// if( document.form.name.value == "" )
		// {
		// 	alert( "Please provide your name!" );
		// 	document.form.name.focus() ;
		// 	return;
		// }

		if ($flag) {
			$('#nameCheck').hide();
			$('#emailCheck').hide();
			sendData();
		};

		return false;

	});

	$(".nav a").on("click", function(){
		// so that the clicked one gets highlighted
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	   //to hide the menu after clicking
	   $('.navbar-collapse').collapse('hide');
	});
	
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
		    url: "php/mail.php",
		    data: dataString,
		    success: function() {
		      $('.form').hide()
		      $('#changingText').text("Thank you. We will be in touch with you shortly " + name)
		    }
		});
		
		return;
	}

});