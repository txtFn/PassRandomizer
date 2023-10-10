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
    var arr = []
    var length = 12;
    generatePass(arr, length); // first to execute
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in specialChar || arr[i] in capitalAlphabet || arr[i] in specialChar || arr[i] in numbers) {
            document.getElementById('pass').innerHTML = arr.join('');
            document.getElementById('pass').style.color = '#186F65';
            document.getElementById('pass').style.fontWeight = 'bold';
            document.getElementById('pass').style.textShadow = '0px 0px 10px #B9FFF8';
        } else {
            randomizer();
        }
    }
}

// LongPass
function longPassRandomizer() {
    var arr = []
    var length = 20
    generatePass(arr, length); // first to execute
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in specialChar || arr[i] in capitalAlphabet || arr[i] in specialChar || arr[i] in numbers) {
            document.getElementById('longPass').innerHTML = arr.join('');
            document.getElementById('longPass').style.color = '#186F65';
            document.getElementById('longPass').style.fontWeight = 'bold';
            document.getElementById('longPass').style.textShadow = '0px 0px 10px #B9FFF8';
        } else {
            longPassRandomizer();
        }
    }
}

// SixPin
function sixPinRandomizer() {
    var arr = []
    while (arr.length < 6) {
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('sixPin').innerHTML = arr.join('');
    document.getElementById('sixPin').style.color = '#186F65';
    document.getElementById('sixPin').style.fontWeight = 'bold';
    document.getElementById('sixPin').style.textShadow = '0px 0px 10px #B9FFF8';
}

// FourPin
function fourPinRandomizer() {
    var arr = []
    while (arr.length < 4) {
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('fourPin').innerHTML = arr.join('');
    document.getElementById('fourPin').style.color = '#186F65';
    document.getElementById('fourPin').style.fontWeight = 'bold';
    document.getElementById('fourPin').style.textShadow = '0px 0px 10px #B9FFF8';
}

// Sidenav
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// MaterialBox
$(document).ready(function () {
    $('.materialboxed').materialbox();
});