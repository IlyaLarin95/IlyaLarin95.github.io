const textareaEnter = document.querySelector('.textarea-enter')
const textareaResult = document.querySelector('.textarea-result')
const btnEncrypt = document.querySelector('#encrypt')
const btnDecipher = document.querySelector('#decipher')
const btnClear = document.querySelector('#clear')
const btnCopy = document.querySelector('#copy')
const selectLang = document.querySelector('#select-lang')
const html = document.querySelector('html');
const keyValue = 91;

const alphabetRu = {
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
}
const alphabetEn = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}

const symbols = {
    '0': 101,
    '1': 102,
    '2': 103,
    '3': 104,
    '4': 105,
    '5': 106,
    '6': 107,
    '7': 108,
    '8': 109,
    '9': 110,
    " ": 111,
    ",": 112,
    ".": 113,
    "!": 114,
    "?": 115,
    "@": 116,
    "'": 117,
    "\"": 118,
    "$": 119,
    ":": 120,
    ";": 121,
    "%": 122,
    "&": 123,
    "*": 124,
    "(": 125,
    ")": 126,
    "-": 127,
    "=": 128,
    "+": 129,
    "\\": 130,
    "{": 131,
    "}": 132,
    "[": 133,
    "]": 134,
    "<": 135,
    ">": 136,
    "`": 137,
    "~": 138,
    "|": 139,
    "/": 140,
    NaN: 141,
}

const alphabetRuFull = Object.assign(alphabetRu, symbols)
const alphabetEnFull = Object.assign(alphabetEn, symbols)

// function addKey(obj) {
//     for (let key in obj) {
//         obj[key] *= keyValue;
//     }
// }

// addKey(alphabetRuFull)
// addKey(alphabetEnFull)

Object.prototype.getKeyByValue = function (value) {
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            if (this[prop] === value)
                return prop;
        }
    }
}

const languageText = {
    en: {
        encrypt: 'Encrypt',
        decipher: 'Decipher',
        textareaEnter: 'Enter message here',
        textareaResult: 'There will be a encrypted message here',
        clear: 'Clear',
        copyResult: 'Copy result',
    },
    ru: {
        encrypt: 'Зашифровать',
        decipher: 'Расшифровать',
        textareaEnter: 'Введите послание сюда',
        textareaResult: 'Здесь будет зашифрованное послание',
        clear: 'Очистить',
        copyResult: 'Скопировать результат',
    }
}

const currentLangEn = function () {
    return html.getAttribute('lang') === 'en'
}
const currentLangRu = function () {
    return html.getAttribute('lang') === 'ru'
}

const setSettinsByLang = function (lang) {
    html.setAttribute('lang', `${lang}`)
    btnEncrypt.innerText = languageText[`${lang}`]['encrypt']
    btnDecipher.innerText = languageText[`${lang}`]['decipher']
    btnClear.innerText = languageText[`${lang}`]['clear']
    btnCopy.innerText = languageText[`${lang}`]['copyResult']
    textareaEnter.setAttribute('placeholder', languageText[`${lang}`]['textareaEnter'])
    textareaResult.setAttribute('placeholder', languageText[`${lang}`]['textareaResult'])
}

const encrypt = function (alphabet) {
    let text = textareaEnter.value
    let encryptText = text.toLowerCase().split('').map(l => l = alphabet[l]).join(keyValue)
    textareaResult.innerText = encryptText
}

const decipher = function (alphabet) {
    let text = textareaEnter.value;
    decipherText = text.split(keyValue).map(l => l = alphabet.getKeyByValue(Number(l))).join('')
    textareaResult.innerText = decipherText;
}

const clearFields = function () {
    textareaEnter.value = ''
    textareaResult.innerText = ''
}

const changeLanguage = function () {
    clearFields()
    const value = selectLang.value
    const en = 'en'
    const ru = 'ru'
    if (value === en) {
        setSettinsByLang(en)
    } if (value === ru) {
        setSettinsByLang(ru)
    }
}

const copyText = function () {
    window.getSelection().selectAllChildren(textareaResult)
    navigator.clipboard.writeText(textareaResult.value)
}

const setResultToTextarea = function (alphabet) {
    textareaEnter.value[0] == Number(textareaEnter.value[0]) ? decipher(alphabet) : encrypt(alphabet)
}



textareaEnter.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        if (currentLangEn()) {
            setResultToTextarea(alphabetEnFull)
        }
        if (currentLangRu()) {
            setResultToTextarea(alphabetRuFull)
        }
    }
})

btnClear.addEventListener('click', clearFields)
selectLang.addEventListener('input', changeLanguage)
btnCopy.addEventListener('click', copyText)
textareaResult.addEventListener('click', copyText)

btnEncrypt.addEventListener('click', () => {
    if (currentLangEn()) {
        encrypt(alphabetEnFull)
    }
    if (currentLangRu()) {
        encrypt(alphabetRuFull)
    }
})

btnDecipher.addEventListener('click', () => {
    if (currentLangEn()) {
        decipher(alphabetEnFull)
    }
    if (currentLangRu()) {
        decipher(alphabetRuFull)
    }
})
