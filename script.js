function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the "active" class
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
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

    window.addEventListener("resize", () => {
        document.querySelectorAll(".more-info.show").forEach(p => {
            p.style.maxHeight = p.scrollHeight + "px";
        });
    });

    // Set the first tab content to be displayed on page load
    document.getElementById("about-me-content").style.display = "block";
});
// Load About Me text
function loadText(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerText = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

loadText("about-me.txt", "about-me-text");
loadText("edu-jensen.txt", "edu-jensen-text");
