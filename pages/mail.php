<?php
    // assemble the message from the POST fields

    // getting the captcha
    $captcha = "";
    if (isset($_POST["g-recaptcha-response"]))
        $captcha = $_POST["g-recaptcha-response"];

    if (!$captcha)
        echo "not ok";
    // handling the captcha and checking if it's ok
    $secret = "6LcJqRQUAAAAANqH2CNyRMc88hjITnBHKL_-6R9v";
    $response = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$captcha."&remoteip=".$_SERVER["REMOTE_ADDR"]), true);

    // if the captcha is cleared with google, send the mail and echo ok.
    if ($response["success"] != false) {
        // send the actual mail
        @mail($email_to, $subject, $finalMsg);

        // the echo goes back to the ajax, so the user can know if everything is ok
        echo "ok";
    } else {
        echo "not ok";
    }
?>
