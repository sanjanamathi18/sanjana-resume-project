
fetch("about_me.txt")
    .then(response => response.text())
    .then(text => {
        document.getElementById("about").textContent = text;
    });
