<?php
       // from the form
       $name = $_POST['Name'];
       $email = $_POST['Email'];
       $message = $_POST['MessageToSend'];

       // set here
       $subject = "Reservation";
       $to = 'taipan93@gmail.com';

//        $body = <<<HTML
// $message
// HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to, $subject, $message, $headers);
       
		#redirect
		header( "Location: http://aarongoa.net84.net/#contact" );
?>