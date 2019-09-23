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
    let lettersArr = [];
    let resultStr = '';
    let exprArr = expr.split('');
    for (let i = 0; i < exprArr.length; i++) {
      if(exprArr[i] === '1' && exprArr[i + 1] === '0') lettersArr.push('.');
      else if(exprArr[i] === '1' && exprArr[i + 1] === '1') lettersArr.push('-');
      i++;
      if ((i + 1) % 10 === 0){
        resultStr += lettersArr.join('') === '' ? ' ' : MORSE_TABLE[lettersArr.join('')] ;
        lettersArr = [];
      }
    }
    return resultStr;
}

module.exports = {
    decode
}