<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["contact-message"];

    // Replace these values with your email settings
    $to = "farhan_keriwala@outlook.com";
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    $message = "Name: $name\nPhone: $phone\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: ..//html/thank_you.html");
    } else {
        echo "Error: Unable to send the message.";
    }
}
?>
