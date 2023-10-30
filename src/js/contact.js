const url = '../php/contact.php';

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("contactForm"));

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("contactForm").reset();
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("confirmation").innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
