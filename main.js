const smallAlphabet =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const capitalAlphabet =
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialChar =
    ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', ',', '.', '?', '/'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const strongPass = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', ',', '.', '?', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// PassGenerator
function generatePass(a, b) {
    while (a.length < b) {
        a.push(strongPass[Math.floor(Math.random() * 89)]);
    }
}

// ShortPass
function randomizer() {
    var arr = [];
    var pass = [];
    var length = 12;
    var genPass = document.getElementById('pass');
    generatePass(arr, length); // first to execute
    for (let i = 0; i < arr.length; i++) {
        if (smallAlphabet.includes(arr[i]) || capitalAlphabet.includes(arr[i]) || specialChar.includes(arr[i]) || numbers.includes(arr[i])) {
            pass.push(arr[i]);
            if (pass.length === 12) {
                document.getElementById('pass').innerHTML = pass.join('');
                genPass.className += ' generated';
            } else {
                generatePass(arr, length);
            }
        }
    }
}

// LongPass
function longPassRandomizer() {
    var arr = [];
    var length = 20;
    var pass = [];
    var genPass = document.getElementById('longPass');
    generatePass(arr, length); // first to execute
    // Checking if the password has capitalAlphabet, smallAlphabet, numbers and specialChar
    for (let i = 0; i < arr.length; i++) {
        if (smallAlphabet.includes(arr[i]) || capitalAlphabet.includes(arr[i]) || specialChar.includes(arr[i]) || numbers.includes(arr[i])) {
            pass.push(arr[i])
            if (pass.length === 20) {
                document.getElementById('longPass').innerHTML = pass.join('');
                genPass.className += ' generated';
            } else {
                generatePass(arr, length);
            }
        }
    }
}

// SixPin
function sixPinRandomizer() {
    var arr = []
    var genPass = document.getElementById('sixPin');
    while (arr.length < 6) {
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('sixPin').innerHTML = arr.join('');
    genPass.className += ' generated';
}

// FourPin
function fourPinRandomizer() {
    var arr = []
    var genPass = document.getElementById('fourPin');
    while (arr.length < 4) {
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('fourPin').innerHTML = arr.join('');
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