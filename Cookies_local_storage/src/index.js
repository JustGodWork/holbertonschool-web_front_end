function setCookiesAndShowWelcomeMessage() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    Cookies.set('firstname', firstname);
    Cookies.set('email', email);
    showWelcomeMessageOrForm();
}

function showCookies() {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    const p = document.createElement('p');
    p.innerHTML = `Email: ${cookies.email} - Firstname: ${cookies.firstname}`;
    document.body.appendChild(p);
}

function showForm() {
    const loginForm = document.getElementById('login-form');
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }
    loginForm.style.display = 'block';
}

function hideForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none';
}

function deleteCookiesAndShowForm() {
    Cookies.remove('firstname');
    Cookies.remove('email');
    showWelcomeMessageOrForm();
}

function showWelcomeMessageOrForm() {
    const firstname = Cookies.get('firstname');
    const email = Cookies.get('email');
    const loginForm = document.getElementById('login-form');

    if (firstname && email) {
        loginForm.innerHTML = `<h2>Welcome ${firstname}</h2>`;
    } else {
        loginForm.innerHTML = `
            <h2>Login</h2>
            <div>
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="text" id="email">
            </div>
            <button onclick="setCookiesAndShowWelcomeMessage()">Log me in</button>
            <button onclick="showCookies()">Show the cookies</button>
        `;
    }
}
