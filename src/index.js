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
    let constr = [],
      string = "";
  
    const array = expr.match(/.{1,10}/g);
    for (let i of array) {
      let number = [];
      if (i === "**********") {
        number.push("*");
      }
      let letter = i.match(/.{1,2}/g);
      for (let j = 0; j < letter.length; j++) {
        if (letter[j] === "10") {
          number.push(".");
        } else if (letter[j] === "11") {
          number.push("-");
        }
      }
      constr.push(number.join(""));
      number = [];
    }
    for (let y = 0; y < constr.length; y++) {
      if (constr[y] === "*") {
        string += " ";
      }
      for (let i in MORSE_TABLE) {
        if (constr[y] === i) {
          string += MORSE_TABLE[i];
        }
      }
    }
  
    return string;
  }
  
  module.exports = {
    decode,
  };



