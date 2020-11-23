//Task 4-1

function myThrow(s) {
  try { throw s;} catch (e) {
    console.log('Caught:' + e);
  }

}

myThrow('5');

//Task4-2

function calcRectangleArea(width, height) {
  if (isNaN(parseFloat(width)) || (isNaN(parseFloat(height)))) {
    throw new Error('arguments is not a number');
  }
  return width * height;
}

try {
  calcRectangleArea('ASDasd', '5');
} catch (e) {
  console.log(e);
}

//Task4-3

function checkAge() {
  try {
    let age = prompt('Enter age', '');
    if (age === '') {
      throw{
        name: 'Empty field',
        message: 'The field is empty! Please enter your age',
      };
    } else if (isNaN(parseInt(age))) {
      throw{
        name: 'Not a number',
        message: 'The field is not a number!Please enter your age',
      };
    } else if (age < 14) {
      throw{
        name: 'Wrong age ',
        message: 'The age less then 14! Please enter your age',
      };
    }
    alert('Enjoy the movie!');
  } catch (e) {
    alert(e.name + ' ' + e.message);
  }
}

checkAge();

//Task4-4

class MonthException {
  constructor(message) {
    this.name = message;
  }
}

function showMonthName(month) {
  month = parseInt(month);
  if (month < 1 || month > 12) {
    throw (new MonthException('MonthException') + '  Incorrect month number');
  }
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'][month - 1];
}

try {
  console.log(showMonthName(5));
  console.log(showMonthName(14));
} catch (e) {
  console.log(e);
}

//Task 4-5

function showUser(id) {
  if (id < 0) {throw ('negative id');}
  return {
    id: id,
  };
}

function showUsers(ids) {
  let obj_id = [];

  for (let i = 0; i < ids.length; i++) {
    try {
      obj_id.push(showUser(ids[i]));
    } catch (e) {
      if (e === 'negative id') {
        console.log('Error: ID must not be negative: ' + ids[i]);
      } else {
        console.log('Error: Unknown: ' + ids[i]);
        break;
      }
    }
  }
  return obj_id;

}

console.log(showUsers([7, -12, 44, 22]));