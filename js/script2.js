const form = document.getElementById("contactForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")

const submitMsg = document.getElementById("submitMsg")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const isValid = true;
    submitMsg.style.display = "none";

    // email validation //
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.innerText = 'email required...'
        emailError.style.display = "block"
        isValid = false;
    }
    else if (!emailRegex.test(email.value)) {
        emailError.innerText = 'Valid email required...'
        emailError.style.display = "block"
        isValid = false;
    } else {
        emailError.style.display = "none"
    };

    // password validation //
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (password.value.trim() === "") {
        passwordError.innerText = 'password required...'
        passwordError.style.display = "block"
        isValid = false;
    }
    else if (!passwordRegex.test(password.value)) {
        passwordError.innerText =
            "Password must contain uppercase, number and 6+ characters";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (isValid) {
        submitMsg.style.display = "block"
        form.reset()
    };



})