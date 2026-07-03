const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitBtn = document.getElementById("submitBtn");

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

function validateForm() {

    let isValid = true;

    // Name Validation
    if(nameInput.value.trim() === ""){
        nameError.textContent = "Name is required";
        isValid = false;
    }else{
        nameError.textContent = "";
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailInput.value)){
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }else{
        emailError.textContent = "";
    }

    // Password Validation
    if(passwordInput.value.length < 6){
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }else{
        passwordError.textContent = "";
    }

    submitBtn.disabled = !isValid;
}

document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Registration Successful!");
});