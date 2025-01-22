function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const date = new Date();
    date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;

    document.cookie = `firstname=${firstname}; ${expires}; path=/`;
    document.cookie = `email=${email}; ${expires}; path=/`;
}

function showCookies() {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    const p = document.createElement('p');
    p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
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
