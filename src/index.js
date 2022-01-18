const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const preMorse = {
        "11": "-",
        "10": "."
    }
    const arr = [];
    let exprCopy = expr;
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(exprCopy.slice(0, 10));
        exprCopy = exprCopy.slice(10);
    }
    arr.forEach ((el, i) => {
        if (el !== "**********") {
            el = (+el).toString();
            let elCopy = el;
            let res = "";
            for (let i = 0; i < el.length; i += 2) {
                res += preMorse[elCopy.slice(0, 2)];
                elCopy = elCopy.slice(2);
            }
            arr[i] = res;
        } else {
            arr[i] = " ";
        }
})
    return arr.map(el => el === " " ? " " : MORSE_TABLE[el]).join("");
}
console.log (decode("0000101110000011111100000010110000111010**********00000000110000111111**********00101111100000101110000011111100001111100000101110000000101100000011110000001111000000101000000011100000111110"))

module.exports = {
    decode
}