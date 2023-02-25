const textarea1 = document.querySelector('#textarea-1')
const textarea2 = document.querySelector('#textarea-2')
const btnEncrypt = document.querySelector('#encrypt')
const btnDecipher = document.querySelector('#decipher')
const selectLang = document.querySelector('#select-lang')
const btnCopy = document.querySelector('#copy')
const alphabet = {
    "а": 1,
    "б": 2,
    "в": 3,
    "г": 4,
    "д": 5,
    "е": 6,
    "ё": 7,
    "ж": 8,
    "з": 9,
    "и": 10,
    "й": 11,
    "к": 12,
    "л": 13,
    "м": 14,
    "н": 15,
    "о": 16,
    "п": 17,
    "р": 18,
    "с": 19,
    "т": 20,
    "у": 21,
    "ф": 22,
    "х": 23,
    "ц": 24,
    "ч": 25,
    "ш": 26,
    "щ": 27,
    "ъ": 28,
    "ы": 29,
    "ь": 30,
    "э": 31,
    "ю": 32,
    "я": 33,
    '0': 34,
    '1': 35,
    '2': 36,
    '3': 37,
    '4': 38,
    '5': 39,
    '6': 40,
    '7': 41,
    '8': 42,
    '9': 43,
    " ": 44,
    ",": 45,
    ".": 46,
    "!": 47,
    "?": 48,
}

Object.prototype.getKeyByValue = function (value) {
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            if (this[prop] === value)
                return prop;
        }
    }
}


selectLang.addEventListener('input', () => {
    const value = selectLang.value
    if (value === "eng") {
        btnEncrypt.innerText = 'Encrypt'
        btnDecipher.innerText = 'Decipher'
    } if (value === "ru") {
        btnEncrypt.innerText = 'Зашифровать'
        btnDecipher.innerText = 'Расшифровать'
    }
})

btnEncrypt.addEventListener('click', () => {
    let text1 = textarea1.value
    let encryptText = text1.toLowerCase().split('').map(l => l = l = alphabet[l])
    textarea2.innerText = encryptText
})

btnDecipher.addEventListener('click', () => {
    let text1 = textarea1.value;
    decipherText = text1.split(',').map(l => l = alphabet.getKeyByValue(Number(l))).join('')
    textarea2.innerText = decipherText;
})


btnCopy.addEventListener('click', () => {
    window.getSelection().selectAllChildren(textarea2)
    navigator.clipboard.writeText(textarea2.value)
})
