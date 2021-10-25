const key = 3
const alphabetSize = 26

let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let plaintext = "zanzibar"

function encrypt(text, key) {
    let out="";
    for(let i=0; i < text.length; i++) {
        out += abc[((abc.indexOf(text[i]) + key + alphabetSize) % alphabetSize)]
    }
    return out
}

function decrypt(text, key) {
    return encrypt(text, -key)
}

console.log("Input: " + plaintext);
cipherText = encrypt(plaintext, key);

console.log("Cipher text: " + cipherText)
plaintext = decrypt(cipherText, key)
console.log("Plaintext: " + plaintext);