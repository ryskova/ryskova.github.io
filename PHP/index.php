<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Získání dat z formuláře
    $name = $_POST['name'];
    $datum = $_POST['datum'];
    $cas = $_POST['cas'];
    $delkanavstevy = $_POST['delkanavstevy'];
    $pocetosob = $_POST['pocetosob'];
    $email = $_POST['email'];
    $mobil = $_POST['mobil'];
    $zprava = $_POST['zprava'];
    $souhlas = isset($_POST['souhlas']) ? 'Ano' : 'Ne';

    $to = "aja.ryskova@gmail.com";
    $subject = "Nová rezervace od " . $name;
    $message = "
    Jméno a příjmení: $name\n
    Datum: $datum\n
    Čas: $cas\n
    Délka návštěvy: $delkanavstevy\n
    Počet osob: $pocetosob\n
    E-mail: $email\n
    Telefonní číslo: $mobil\n
    Vzkaz: $zprava\n
    Souhlas se zpracováním osobních údajů: $souhlas\n
    ";
    $headers = "From: $email\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>
            alert('Rezervace byla úspěšně odeslána.');
            window.location.href = 'index.html#rezervace';
        </script>";
    } else {
        echo "<script>
            alert('Nastala chyba při odesílání rezervace. Zkuste to prosím znovu.');
            window.location.href = 'index.html#rezervace';
        </script>";
    }
}
?>

