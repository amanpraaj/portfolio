document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const hostname = window.location.hostname;
        const pageTitle = document.title; // Get the current page title
        //const modifiedTitle = pageTitle.replace(/ /g, "_");
        const maxMessageLength = 3700; // Set your desired character limit

        if (message.length > maxMessageLength) {
            alert("Message is too long. Please keep it under 3700 characters.");
            return;
        }

        const chatId = "-1002062766392"; // Replace with your Telegram chat ID
        const token = "6936569611:AAFzUS3UFG8BMI_1mPE0fa2t-Xl0RqoOdJM"; // Replace with your Telegram bot token

        // Create a message with enhanced formatting
        const messageText = `
    *#NewMessage* On *#Portfolio*

*Name :* ${fname} ${lname}
*Email :* [${email}](mailto:${email})
*Mobile Number :* ${phoneNumber}

*Subject:* ${subject}

*Message:*
\`\`\`
${message}
\`\`\`
*Link :* [${pageTitle}](${hostname})
`;
        const parseMode = "Markdown";

        fetch(
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
                messageText
            )}&parse_mode=${parseMode}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Message sent:", data);
                document.getElementById("messageStatus").style.display = "block";
                document.getElementById("messageStatus").style.backgroundColor = "rgb(0 0 0 / 44%)";
                document.getElementById("messageStatus").style.color = "#00ff6263";
                document.getElementById("messageStatus").textContent =
                    "Message sent successfully!";
                document.getElementById("contactForm").reset();
            })
            .catch((error) => {
                console.error("Message not sent:", error);
                document.getElementById("messageStatus").style.display = "block";
                document.getElementById("messageStatus").style.backgroundColor = "rgb(0 0 0 / 44%)";
                document.getElementById("messageStatus").style.color = "#ff000063";
                document.getElementById("messageStatus").textContent =
                    "Message not sent. Please try again later.";
            });
    });
