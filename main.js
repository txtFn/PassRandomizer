const smallAlphabet =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const capitalAlphabet =
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const specialChar =
    ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', ',', '.', '?', '/']

function randomizer() {
    var arr = []
    while (arr.length < 12) {
        arr.push(smallAlphabet[Math.floor(Math.random() * 26)]);
        arr.push(capitalAlphabet[Math.floor(Math.random() * 26)]);
        arr.push(specialChar[Math.floor(Math.random() * 27)]);
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('pass').innerHTML = arr.join('');
}

function longPassRandomizer() {
    var arr = []
    while (arr.length < 20) {
        arr.push(smallAlphabet[Math.floor(Math.random() * 26)]);
        arr.push(capitalAlphabet[Math.floor(Math.random() * 26)]);
        arr.push(specialChar[Math.floor(Math.random() * 27)]);
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('longPass').innerHTML = arr.join('');
}

function sixPinRandomizer() {
    var arr = []
    while (arr.length < 6) {
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('sixPin').innerHTML = arr.join('');
}

function fourPinRandomizer() {
    var arr = []
    while (arr.length < 4) {
        arr.push(Math.floor(Math.random() * 10));
    }
    document.getElementById('fourPin').innerHTML = arr.join('');
}