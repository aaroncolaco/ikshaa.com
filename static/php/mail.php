<?php
	
	ini_set('display_errors',1);

	if(empty($_POST['Name'])  		||
		empty($_POST['Email']) 		||
		empty($_POST['MessageToSend'])	||
		!filter_var($_POST['Email'],FILTER_VALIDATE_EMAIL))
			{
				echo "Incorrect arguments Provided!";
				return false;
			}

	// from the form
	$name = $_POST["Name"];
	$email = $_POST["Email"];
	$message = $_POST["MessageToSend"];

	// set here
	$subject = "Enquiry from Ikshaa website";
	$to = "nyaragoa@gmail.com"; /* add email address here*/

	$headers = "From: $email\r\n";
	$headers .= "Content-type: text/plain\r\n";		/* needs to be text/plain and NOT text/html so that the newline characters work. 
															Otherwise received email is in one line */

		// send the email
		mail($to, $subject, $message, $headers);
	
		#redirect
		header( "Location: http://ikshaa.com/contact.html" );	//this line is important. remember to change domain if you use the script on a new domain. otherwise it won't return and carry out remaining operations after sending the email
?>
