<?php
	// from the form
	$name = $_POST["Name"];
	$email = $_POST["Email"];
	$message = $_POST["MessageToSend"];

	// set here
	$subject = "Reservation";
	$to = "taipan93@gmail.com";

	$headers = "From: $email\r\n";
	$headers .= "Content-type: text/plain\r\n";		/* needs to be text/plain and NOT text/html so that the newline characters work. 
															Otherwise received email is in one line */

		// send the email
		mail($to, $subject, $message, $headers);
	
		#redirect
		header( "Location: http://aarongoa.tk/#contact" );	//this line is important. remember to change domain if you use the script on a new domain. otherwise it won't return and carry out remaining operations after sending the email
?>