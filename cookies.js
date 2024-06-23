function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split(";");
    let value = "";
    cArr.forEach(val => {
        val = val.trim();
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    });
    return value;
}

document.querySelector("#cookies-btn").addEventListener('click', () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie('cookiesAccepted', 'true', 30);
});

cookieMessage = () => {
    if (!getCookie("cookiesAccepted")) {
        document.querySelector("#cookies").style.display = "block";
    } else {
        document.querySelector("#cookies").style.display = "none";
    }
}

window.addEventListener("load", cookieMessage);
