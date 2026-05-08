// const form = document.getElementById('contactForm');
// const messageDiv = document.getElementById('message');

// form.addEventListener('submit', function (event) {
//     // 1. Prevent the default browser form submission
//     event.preventDefault();

//     // 2. Clear any previous messages
//     messageDiv.style.display = 'none';
//     messageDiv.textContent = '';
//     error.textContent = ''

//     // 3. Get input values
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value.trim();

//     // 4. Custom Validation (Basic check)
//     if (name === "" || email === "" || password === "") {
//         alert("Please fill in all fields."); // Standard alert for errors
//         return;
//     }
    
//     // password rejex 
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
//     if (!passwordRegex.test(password)) {
//         error.textContent = "Password must have uppercase, lowercase, number and 6+ characters!";
//         return;
//     }

//     // 5. If successful, display success message and hide form
//     messageDiv.textContent = "Form submitted successfully! Thank you, " + name + ".";
//     messageDiv.style.display = 'block';
//     form.reset(); // Optional: Clear the form fields
// });
