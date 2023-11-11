document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        // Page is fully loaded
        document.getElementById("progress-bar").style.width = "100%";
        setTimeout(function () {
            // Hide the progress bar after a short delay (0.5 seconds in this example)
            document.getElementById("progress-bar").style.display = "none";
        }, 500);
    } else {
        // Calculate the loading progress
        const progressBar = document.getElementById("progress-bar");
        const progress = (document.readyState == "interactive" ? 50 : 0);
        progressBar.style.width = progress + "%";
    }
};