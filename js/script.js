var main = function() {
	
	$('#submitButton').click(function() { 
		var name = $('#name').val();
		var email = $('#email').val();
		var number1 = $('#number1').val();
		var number2 = $('#number2').val();
		var company= $('#company').val();
		var designationText= $('#designationText').val();
		var message = $('#message').val();

		var messageToSend = 'Name= ' + name + '\nEmail= ' + email + '\nLandline= ' + 
			number1 + '\nCell Phone= ' + number2 + '\nCompany= ' + company +
			'\nDesignation= ' + designationText + '\nMessage= ' + message;

		var dataString = 'Name= ' + name + '&Email= ' + email + '&MessageToSend= ' + messageToSend;

		alert (dataString);//return false;

		$.ajax({
		    type: "post",
		    url: "php/mail.php",
		    data: dataString,
		    success: function() {
		      $('.form').hide()
		      $('#changingText').text("Thank you. We will be in touch with you shortly " + name)
		    }
		});
		
		return false;
	});
}

$(document).ready(main);