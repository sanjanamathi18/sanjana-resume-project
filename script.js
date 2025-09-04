function openTab(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Functionality for the "More Info" accordion sections
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".more-info-toggle");
    const panels = document.querySelectorAll(".more-info");

    function closeAll() {
        panels.forEach(p => {
            p.classList.remove("show");
            p.style.maxHeight = null;
            p.setAttribute("aria-hidden", "true");
        });
        toggles.forEach(t => t.textContent = "More info");
        toggles.forEach(t => t.setAttribute("aria-expanded", "false"));
    }

    toggles.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const panel = document.getElementById(link.getAttribute("aria-controls"));
            const isOpen = panel.classList.contains("show");

            // Accordion behavior: close others first
            closeAll();

            if (!isOpen) {
                panel.classList.add("show");
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.setAttribute("aria-hidden", "false");
                link.textContent = "Less info";
                link.setAttribute("aria-expanded", "true");
            }
        });
    });

    // Recompute height on window resize for smooth animation
    window.addEventListener("resize", () => {
        document.querySelectorAll(".more-info.show").forEach(p => {
            p.style.maxHeight = p.scrollHeight + "px";
        });
    });
});

// Set the default tab to be open when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab-content.active").style.display = "block";
});