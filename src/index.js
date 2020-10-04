const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let n = expr.split('').length / 10;
    let arr = expr.split('');
    let result = '';
    for (let i = 0; i < n; i++) {
        let encLetter = arr.slice(i * 10, (i + 1) * 10).join('');
        if (encLetter === '**********') {
            result += ' ';
            continue;
        }
        let desc = '';
        let s = encLetter.split('');
        for (let j = 9; j >= 0; j = j - 2) {
            let v = s[j - 1] + '' + s[j];
            if (v === '10') {
                desc = '.' + desc;
            } else if (v === '11') {
                desc = '-' + desc;
            }
        }
        result += MORSE_TABLE[desc];
    }
    return result;
}

module.exports = {
    decode
}