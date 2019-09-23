const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

const SPACE = "**********";
const WORD_SIZE = 10;
const LETTER_SIZE = 2;
const DOT = "10";
const DASH = "11";
const PAD = "00";

function decode(expr) {
  // write your solution here
  let words = expr.match(new RegExp(".{1," + WORD_SIZE + "}", "g"));
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].match(new RegExp(".{1," + LETTER_SIZE + "}", "g"));
    words[i] = letters.map(letter => mapLetter(letter)).join("");
    words[i] = words[i].replace(SPACE, " ");
  }

  words = words.map(letter => MORSE_TABLE[letter] || letter);
  return words.join("");
}

function mapLetter(letter) {
    if (letter === DOT) return ".";
    if (letter === DASH) return "-";
    if (letter === PAD) return "";
    return letter;
}

module.exports = {
  decode
};
