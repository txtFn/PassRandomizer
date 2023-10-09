const smallAlphabet =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const capitalAlphabet =
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const specialChar =
    ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', ',', '.', '?', '/']

// Pass
function randomizer() {
    var arr = []
    while (arr.length < 12) {
        arr.push(smallAlphabet[Math.floor(Math.random() * 26)]);
        arr.push(capitalAlphabet[Math.floor(Math.random() * 26)]);
        arr.push(specialChar[Math.floor(Math.random() * 27)]);
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('pass').innerHTML = arr.join('');
    document.getElementById('pass').style.color = '#186F65';
    document.getElementById('pass').style.fontWeight = 'bold';
    document.getElementById('pass').style.textShadow = '0px 0px 10px #B9FFF8';
}

// LongPass
function longPassRandomizer() {
    var arr = []
    while (arr.length < 20) {
        arr.push(smallAlphabet[Math.floor(Math.random() * 26)]);
        arr.push(capitalAlphabet[Math.floor(Math.random() * 26)]);
        arr.push(specialChar[Math.floor(Math.random() * 27)]);
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('longPass').innerHTML = arr.join('');
    document.getElementById('longPass').style.color = '#186F65';
    document.getElementById('longPass').style.fontWeight = 'bold';
    document.getElementById('longPass').style.textShadow = '0px 0px 10px #B9FFF8';
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