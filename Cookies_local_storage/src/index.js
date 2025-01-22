function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    document.cookie = `firstname=${firstname}; path=/`;
    document.cookie = `email=${email}; path=/`;
}

function showCookies() {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    const p = document.createElement('p');
    p.innerHTML = `Cookies: ${JSON.stringify(cookies)}`;
    document.body.appendChild(p);
}
