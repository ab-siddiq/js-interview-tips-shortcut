/**
 * 1. swapping values
 */
let arr = [1, 2, 3, 4, 5, 6];
//array destructuring

[arr[0], arr[5]] = [arr[5], arr[0]];
console.log(arr);
//math
let a = 5;
let b = 10;
// [a, b] = [b, a];
b = a + (a = b) - b;
console.log(a, b);
/**
 * 2. copy to clipboard
 */
function copyToClipBoard(str) {
  const element = document.createElement("textarea");
  element.value = str;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}
function handleClick() {
  const text = document.querySelector("#text");
  copyToClipBoard(text.innerHTML);
}
/**
 * 3. destructuring aliases
 */
const language = {
  name: "react",
  founder: "Jordan Walke",
};

const { name: languageName, founder: founderName } = language;

console.log(languageName, founderName);

/**
 * 4. get value as data type
 */
// const value = document.querySelector("#value").valueAsNumber;
// console.log(value);

/**
 * 5. remove duplicated from array
 */
let arr5 = [1, 2, 3, 4, 1, 3, 4, 6, 7, 8];
console.log([...new Set(arr5)]);
/**
 * 6. compare 2 arrays by values
 */
const hasSameElement = (a, b) => {
  return (
    a.length === b.length &&
    a.every((v, i) => {
      return v === b[i];
    })
  );
};
let mathcStatus = hasSameElement([1, 22, 3, 4, 5], [1, 2, 3, 4, 5]);
console.log(mathcStatus);
/**
 * 7. shuflling array elements
 */
const numbers = [1, 2, 3, 4, 5, 6];
let shuffle = numbers.sort(() => Math.random() - 0.5);
console.log(shuffle);
/**
 * 8. comma operator
 */
let x = 1;
x = (x++, x);
console.log(x);
/**
 * 9.
 */

/**
 * 10.
 */

/**
 * 11.
 */

/**
 * 12.
 */

/**
 * 13.
 */
