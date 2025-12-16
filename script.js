document.getElementById("addForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let headline = document.getElementById("headline").value.trim();
    let summary = document.getElementById("summary").value.trim();

    if (name === "" || headline === "" || summary === "") {
        document.getElementById("error").innerText = "All fields are required";
        return;
    }

    let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

    let profile = {
        id: Date.now(),
        name: name,
        headline: headline,
        summary: summary
    };

    profiles.push(profile);
    localStorage.setItem("profiles", JSON.stringify(profiles));

    window.location.href = "index.html";
});
