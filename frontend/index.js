import { backend } from "declarations/backend";

document.getElementById('loginBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loadingSpinner = document.getElementById('loading');
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    try {
        loadingSpinner.style.display = 'block';
        const result = await backend.login(email, password);
        
        if (result) {
            alert('Login successful!');
        } else {
            alert('Invalid credentials');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
    } finally {
        loadingSpinner.style.display = 'none';
    }
});
