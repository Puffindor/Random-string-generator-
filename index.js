const caracters = "qwertyuioadfghjklzvbnm1234567890+-_$~";
const letters = "qwertyuioadfghjklzvbnm";
let string = "";
let firstSymbolCount = 0;
let secondSymbolCount = 0;

function generateRandomString(length) {
 if (Number(length)) {
  for (let i = 0; i < length; i++) {
   string = string + caracters[Math.floor(Math.random() * caracters.length)];
  }
  console.log(string);
 } else {
  alert("Ведите число");
  length = prompt("Длинна строки");
  generateRandomString(length);
 }
}

function replaceLetters(symbol) {
 const arr = string.split("");
 for (let i = 0; i < arr.length; i++) {
  if (letters.includes(arr[i])) {
   arr[i] = symbol;
   firstSymbolCount += 1;
  }
 }
 string = arr.join("");
 console.log(string);
}

function replaceNumbers(symbol) {
 const arr = string.split("");
 for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) || arr[i] === "0") {
   arr[i] = symbol;
   secondSymbolCount += 1;
  }
 }
 string = arr.join("");
 console.log(`${string}
 первый символ встретился ${firstSymbolCount} 
 второй символ встретился ${secondSymbolCount} 
 `);
}

length = prompt("Длинна строки");
generateRandomString(length);
firstSymbol = prompt("Первый символ");
replaceLetters(firstSymbol);
secondSymbol = prompt("Второй символ");
replaceNumbers(secondSymbol);
