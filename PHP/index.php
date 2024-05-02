<?php
// Získání dat
$name = $_POST['name'];
$datum = $_POST['datum'];
$cas = $_POST['cas'];
$delkanavstevy = $_POST['delkanavstevy'];
$pocetosob = $_POST['pocetosob'];
$email= $_POST['email'];
$mobil= $_POST['mobil'];
$zprava= $_POST['zprava'];
$souhlas= $_POST['souhlas'];

$to = "aja.ryskova@gmail.com";
$subject = "Nová rezervace - Karikatura";

$txt ="Name = ". $name . "\r\n Email = "
	. $email . "\r\n Message =" . $message;

$headers = "From: noreply@demosite.com" . "\r\n" .
			"CC: somebodyelse@example.com";
if($email != NULL) {
	mail($to, $subject, $txt, $headers);
}

// Přesměrování zpět
header("Location:index.html");
?>
