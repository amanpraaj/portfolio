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
