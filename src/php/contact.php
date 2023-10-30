<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if the form fields are set and not empty
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        
        // Email recipient address
        $to = "mail@amanpraaj.eu.org";
        
        // Email subject
        $subject = "Contact Form Submission from $name";
        
        // Email message
        $emailMessage = "Name: $name\n";
        $emailMessage .= "Email: $email\n\n";
        $emailMessage .= "Message:\n$message";
        
        // Set the email headers
        $headers = "From: $email";
        
        // Send the email
        if (mail($to, $subject, $emailMessage, $headers)) {
            echo "Thank you for your message. We will get back to you soon.";
        } else {
            echo "Sorry, there was an error sending your message.";
        }
    } else {
        echo "Please fill in all the required fields.";
    }
} else {
    echo "Invalid request.";
}
?>
