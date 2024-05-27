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

    // Nastavení e-mailu
    $to = "aja.ryskova@gmail.com"; // Změňte na vaši e-mailovou adresu
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
    $headers = "From: $email\n"; // Změňte na vhodnou adresu odesílatele

    // Odeslání e-mailu
    if (mail($to, $subject, $message, $headers)) {
        // Po zpracování formuláře zobrazte alert a přesměrujte zpět na formulář
        echo "<script>
            alert('Rezervace byla úspěšně odeslána.');
            window.location.href = 'index.html#rezervace';
        </script>";
    } else {
        // Pokud se e-mail nepodařilo odeslat
        echo "<script>
            alert('Nastala chyba při odesílání rezervace. Zkuste to prosím znovu.');
            window.location.href = 'index.html#rezervace';
        </script>";
    }
}
?>

