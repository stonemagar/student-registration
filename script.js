document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents page refresh

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;

    if (name.trim() === "" || email.trim() === "" || dob.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("successMessage").style.display = "block"; // Show success message

    // Reset form
    document.getElementById("registrationForm").reset();
});
