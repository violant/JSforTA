//Task 3-1
let a = [2, 3, 4, 5];
let s = 1;
for (let i = 0; i < a.length; i++) {
  s = s * a[i];
}
console.log(s);

s = 1;
i = 0;
while (i < a.length) {
  s *= a[i];
  i++;
}
console.log(s);

//Task 3-2

for (let i = 0; i < 15; i++) {
  console.log(i, ' is ', i % 2 === 0 ? 'even' : 'odd');
}

//Task 3-3
let arr = [];
let max = 500;
let min = 1;

function randArray(n) {
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * (max - min) + min);
  }
}

randArray(6);
console.log(arr);

//Task 3-4
a = 5;
b = 4;

function raiseToDegree(a, b) {
  let result = a ** b;
  console.log(result);
}

raiseToDegree(a, b);

//Task 3-5

function findMin() {
  console.log(Math.min(...arguments));
}

findMin(12, 14, 4, -4, 0.2);

//Task 3-6

function findUnique(arr) {

  let isUnique = true;
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = (i+1); j <= arr.length; j++) {
      if  (arr[j] === arr[i]) {
        isUnique = false;
        break;
      }
    }
  }
  console.log(isUnique);
}

findUnique([1, 2, 3, 5, 6]);
findUnique([1, 2, 3, 5, 3]);

//Task 3-7

function lastElem(a, b) {
  if (b === undefined) {b = 1;}
  return a.slice(a.length - b, a.length);
}

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));

//Task 3-8

function toUpperCase(s) {
  if (typeof s !== 'string') return '';
  let split = s.split(' ');
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
  }
  s = split.join(' ');
  return s;
}

console.log(toUpperCase('i love java script'));