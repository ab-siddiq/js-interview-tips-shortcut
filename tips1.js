/**
 * 1. Remove javaScript falsy valuse
 */

const values = ["a", false, "b", 0, 1, NaN, undefined, "oj", null];
const getFalsy = values.filter(Boolean);
console.log(getFalsy);

/**
 * 2. Convert any values to boolen
 */

console.log(!!1);

/**
 * 3. Resize any array to an desire size
 */

let arr = [1, 2, 3, 4, 5, 6, 76];
arr.length = 3;

console.log(arr);
/**
 * 4. Flatten multi dimentional array
 */
let multiArray = [1, 2, [3, [4, 5, [7, 8]]], 9];
console.log(multiArray.flat(Infinity));
/**
 * 5. short conditionals
 */

let a = 5;

(a == 4 && console.log(true)) || console.log(false);
/**
 * 6. replace a word in a sentence or a paragraph
 */
let sentence =
  "i am a programmer. i love programming. programming is my passion. prograaming is my life. programmin is everything to me. programming can help me better to leave.";
console.log(sentence.replace(/programming/g, "dancing"));
