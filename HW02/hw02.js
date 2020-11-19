//Task2-1
let x = 1;
let y = 2;

let res1 = x + '' + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = true + String(y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(x < y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Task2-2

let UserNumber = prompt('Enter a number', '0');
if ((UserNumber > 0) && (UserNumber % 2 === 0)) {
  console.log('Число парне додатне');
} else {console.log('Число НЕ парне додатне');}

if (UserNumber % 7 === 0) {console.log('Число кратне 7');} else {
  console.log('Число НЕ кратне 7');
}

//Taks2-3

let arr = [];
arr[0] = 12;
arr[1] = '123';
arr[2] = true;
arr[3] = null;
console.log(arr.length);
let UserArrElement = prompt('Enter a number', '0');
arr[4] = UserArrElement;
console.log(arr[4]);
arr.shift();
console.log(arr);

//Task2-4

let cities = ['Rome', 'Lviv', 'Warsaw'];
console.log(cities.join('*'));

//Task 2-5

let isAdult = prompt('Enter your age', '0');
if (isAdult >= 18) {
  console.log('Ви досягли повнолітнього віку');
}
if (isAdult <= 10) {console.log('Ви ще надто молоді');}

//Task 2-6

let a = prompt('введіть першу сторону', '0');
let b = prompt('введіть другу сторону', '0');
let c = prompt('введіть третю сторону', '0');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (!isNaN(a) &&
    !isNaN(b) &&
    !isNaN(c) &&
    !isFinite(a)&&
    !isFinite(b)&&
    !isFinite(c)&&
    (a > 0) &&
    (b > 0) &&
    (c > 0) &&
    (a < (b + c)) &&
    (b < (a + c)) &&
    (c < (a + b))) {
  let p = a + b + c;
  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log('Площа трикутника = ', s.toFixed(3));
  if ((a * a + b * b === c * c) || (a * a + c * c === b * b) ||
      (c * c + b * b === a * a)) {
    console.log('Цей трикутник прямокутний');
  } else {console.log('Цей трикутник НЕ прямокутний');}
} else {
  console.log('Incorrect data');
}

//Task 2-7

let hours = new Date().getHours();

if ((hours >= 23) || (hours < 5)) {console.log('Доброї ночі');}
if ((hours >= 5) && (hours < 11)) {console.log('Доброго ранку');}
if ((hours >= 11) && (hours < 17)) {console.log('Доброго дня');}
if ((hours >= 17) && (hours < 23)) {console.log('Доброго вечора');}

switch (true) {
  case ((hours >= 23) || (hours < 5)):
    console.log('Доброї ночі');
    break;
  case  ((hours >= 5) && (hours < 11)):
    console.log('Доброго ранку');
    break;
  case ((hours >= 11) && (hours < 17)):
    console.log('Доброго дня');
    break;
  case ((hours >= 17) && (hours < 23)):
    console.log('Доброго вечора');
    break;
}