function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const date = new Date();
    date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;

    document.cookie = `firstname=${firstname}; ${expires}; path=/`;
    document.cookie = `email=${email}; ${expires}; path=/`;
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

/**
 *
 * @param {String} name
 * @returns {String}
 */
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return '';
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
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    showForm();
}

function showWelcomeMessageOrForm() {
    const firstname = getCookie('firstname');
    if (!firstname) {
        showForm();
    } else {
        hideForm();
        const welcomeMessage = document.createElement('h1');
        welcomeMessage.id = 'welcome-message';
        welcomeMessage.innerHTML = `Welcome ${firstname} <a href="#" onclick="deleteCookiesAndShowForm()" style="font-weight: normal; font-style: italic; margin-left: 10px;">(logout)</a>`;
        document.body.appendChild(welcomeMessage);
    }
}

showWelcomeMessageOrForm();
