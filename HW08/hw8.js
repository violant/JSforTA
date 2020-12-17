//Task8-1
function upperCase(str) {
  if (/^[A-Z]/.test(str)) {
    console.log('Strings starts with uppercase character');
  } else {console.log('String not starts with uppercase character ');}
}

upperCase('regexp');
upperCase('RegExp');

//Task  8-2

function checkEmail(email) {
  let regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  return regExp.test(email);
}

console.log(checkEmail('Qmail2@gmail.com'));
console.log(checkEmail('123.123!ccccc@vsdfsd.com'));

//Task 8-5

function switchWords(str) {
  let regExp = /([^ ]+) ([^ ]+)/;
  return str.replace(regExp, '$2 $1');

}

console.log(switchWords('Java Script'));

//Task 8-6

function checkEmailNew(email) {
  let regExp = /^[a-zA-Z0-9]+(-?\w+)*@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  return regExp.test(email);
}

console.log(checkEmailNew('my_mail@gmail.com'));
console.log(checkEmailNew('my-mail@gmail.com'));
console.log(checkEmailNew('#my_mail@gmail.com'));
console.log(checkEmailNew('#my_mai#l@gmail.com'));
console.log(checkEmailNew('-mymail@gmail.com'));
console.log(checkEmailNew('mymai--l@gmail.com'));

//Task 8-7

function checkLogin(login) {
  let regExp = /^(?=(?![0-9])[A-Za-z0-9]+[._-]?[A-Za-z0-9]+).{2,10}/;
  console.log(regExp.test(login));
  let regExp1 = /[+-]?\d+(\.\d+)?/g;
  console.log(login.match(regExp1).join(' , '));
}

console.log('Task 8-7');
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');