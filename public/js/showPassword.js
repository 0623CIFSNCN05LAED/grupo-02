document.addEventListener("DOMContentLoaded", function() {
      const passwordInput = document.getElementById("password");
      const toggleButton = document.getElementById("toggleButton")

      toggleButton.addEventListener("click", function(event) {
        passwordInput.type = (passwordInput.type === "password") ? "text" : "password"
        event.preventDefault();
        
    });

    })