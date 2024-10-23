document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.form-box.login form');
    const registerForm = document.querySelector('.form-box.register form');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const loginSection = document.querySelector('.login-section');

    // Toggle between login and register forms
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.classList.add('active');
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.classList.remove('active');
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Simple validation
        if (email === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }

        // Placeholder for actual authentication logic
        alert('Login successful');
    });

    // Handle register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;

        // Simple validation
        if (username === '' || email === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }

        // Placeholder for actual registration logic
        alert('Registration successful');
    });
});