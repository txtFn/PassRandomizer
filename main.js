const strongPass = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', ',', '.', '?', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Pass Generator
function generatePass(password, length) {
    while (password.length < length) {
        password.push(strongPass[Math.floor(Math.random() * 89)]);
    }
}
// Strong Password Checker
function strongPassCheck(password) {
    // Check for at least 8 characters
    if (password.length < 8) {
        return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check for at least one digit
    if (!/[0123456789]/.test(password)) {
        return false;
    }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }

    // All criteria met, password is strong
    return true;
}

// Pass
function randomizer() {
    var password = [];
    var length = document.getElementById('passLen').value;
    // first to execute
    generatePass(password, length);
    // Password regeneration if not strong
    while (strongPassCheck(password) == false) {
        password = []
        generatePass(password, length);
        if (strongPassCheck(password) == true) {
            document.getElementById('pass').innerHTML = password.join('');
            document.getElementById('pass').className += ' generated';
            break;
        }
    }
    document.getElementById('pass').innerHTML = password.join('');
    document.getElementById('pass').className += ' generated';
}

// Pin
function PinRandomizer() {
    var arr = []
    var genPass = document.getElementById('pin');
    var length = document.getElementById('pinLen').value;
    while (arr.length < length) {
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('pin').innerHTML = arr.join('');
    genPass.className += ' generated';
}

// Sidenav
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// MaterialBox
$(document).ready(function () {
    $('.materialboxed').materialbox();
});
