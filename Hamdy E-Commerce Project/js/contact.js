//!!!!!!!!! Function to validate information in contact !!!!!!!!!//
document.addEventListener("DOMContentLoaded", function() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
  
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
  
    function validateName() {
      console.log("Validating name...");
      var nameValue = nameInput.value.trim();
      var nameError = document.getElementById("nameError");
      if (nameValue.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        return false;
      } else {
        nameError.textContent = "";
        return true;
      }
    }
  
    function validateEmail() {
      console.log("Validating email...");
      var emailValue = emailInput.value.trim();
      var emailError = document.getElementById("emailError");
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Invalid email format";
        return false;
      } else {
        emailError.textContent = "";
        return true;
      }
    }
  
    function validatePassword() {
      console.log("Validating password...");
      var passwordValue = passwordInput.value.trim();
      var passwordError = document.getElementById("passwordError");
      if (passwordValue.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
      } else {
        passwordError.textContent = "";
        return true;
      }
    }
  
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      console.log("Form submission attempted...");
      var isNameValid = validateName();
      var isEmailValid = validateEmail();
      var isPasswordValid = validatePassword();
  
      if (!isNameValid || !isEmailValid || !isPasswordValid) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  });
  