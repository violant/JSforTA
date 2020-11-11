let UserAnswer = prompt('Are you an adult', 'no');

switch (UserAnswer) {
  case 'yes':
  case 'Yes':
    isAdult = true;
    break;
  case 'no':
  case 'No':
    isAdult = false;
    break;
  default: { isAdult = UserAnswer; }
}
console.log(isAdult);