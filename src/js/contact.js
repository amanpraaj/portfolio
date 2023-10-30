<script>
    emailjs.init("PlUuFaRIStZqbosy3");

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send("service_da0974b", "PlUuFaRIStZqbosy3", templateParams)
            .then(function(response) {
                console.log("Email sent:", response);
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            }, function(error) {
                console.error("Email not sent:", error);
                alert("Message not sent. Please try again later.");
            });
    });
</script>
