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
    }
    console.log(arr);
    document.getElementById('pass').innerHTML = arr.join('');
}