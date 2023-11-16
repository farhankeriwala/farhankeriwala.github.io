<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $service = $_POST["call_options"];

    // Email configuration
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Call Booking";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service";

    // Send email
    mail($to, $subject, $message);

    // Redirect back to the form or to a thank-you page
    header("Location: /path/to/thank_you_page.html");
    exit();
} else {
    // If the form is not submitted, redirect to the form page
    header("Location: /path/to/call_form_page.html");
    exit();
}

?>
