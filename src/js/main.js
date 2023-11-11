function showTab(tabIndex) {
    // Get all tab elements
    var tabs = document.getElementsByClassName("tab");
    
    // Hide all tabs
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    
    // Show the selected tab
    tabs[tabIndex].style.display = "block";
    
    // Remove 'active-tab' class from all tab buttons
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active-tab");
    }
    
    // Add 'active-tab' class to the clicked tab button
    tabButtons[tabIndex].classList.add("active-tab");
}

// Show the first tab by default
showTab(0);

//Changing Text Animation 
const values = ["Web Developer", "Content Writer", "Youtuber", "Student", "UI/UX Designer", "Photo/Video Editor"];
const dynamicText = document.querySelector("#dynamicText");
let currentIndex = 0;
function changeTextWithAnimation() {
  dynamicText.style.opacity = 0;
  setTimeout(() => {
    dynamicText.textContent = values[currentIndex];
    dynamicText.style.opacity = 1;
    currentIndex = (currentIndex + 1) % values.length;
  }, 500);
} 
changeTextWithAnimation();
setInterval(changeTextWithAnimation, 3000);