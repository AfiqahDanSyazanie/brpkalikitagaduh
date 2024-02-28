const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    event.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    
    if (usernameInput.toLowerCase() === 'afiqah' && passwordInput.toLowerCase() === 'syazcomel') {
        window.location.href = 'homepage.html';
    } else {
        alert('Username or password salah la sayang :(');
    }
});