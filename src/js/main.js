let age = 15;
console.log(`Мій вік: ${age}`);

let name = "Даніїл";
console.log(`Моє ім'я: ${name}`);

let isStudent = true;
console.log(`Чи я студент: ${isStudent}`);

let myString =
  "Живешь только один раз, но если делаешь это правильно, одного раза достаточно"; // Улюблена цитата
console.log(`Моя улюблена цитата: ${myString}`);

let myNumber = 15;
myNumber += 10;
console.log(`Значення myNumber: ${myNumber}`);

let myNull = null;
console.log(`Значення myNull: ${myNull}`);

let userName = prompt("Введіть ваше ім'я:");
if (userName) {
  console.log(`Привіт, ${userName}!`);
} else {
  console.log("Ім'я не введено.");
}

let userConfirmation = confirm("Чи бажаєте підтвердити дію?");
if (userConfirmation) {
  console.log("Дякую за підтвердження!");
} else {
  console.log("Дію відмінено!");
}

alert("Увага! Ця дія може бути небезпечною.");
let dangerousAction = confirm("Ви впевнені, що хочете продовжити?");
if (dangerousAction) {
  console.log("Дякую за підтвердження!");
} else {
  console.log("Дію відмінено!");
}
