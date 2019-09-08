<?php
$logingegevens = false;
$array = [
    ['email' => 'test@test.com', 'wachtwoord' => 'testen'],
    ['email' => 'test@12345.com', 'wachtwoord' => '12345'],
];

foreach ($array as $account) {
    if ($_POST['email'] === $account['email'] && $_POST['wachtwoord'] === $account['wachtwoord']) {
        $logingegevens = true;
    }
}

if ($logingegevens) {
    header("Location: home.html");
    die();
} else {
    header("Location: login.html");
}