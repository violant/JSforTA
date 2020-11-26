//Task 5-1

function propsCount(currentObject) {
  console.log(Object.keys(currentObject).length);
}

let mentor = {
  course: 'JS fundamental',
  duration: 3,
  direction: 'web-development',
};
propsCount(mentor);

//Task 5-2

function showProps(obj) {
  console.log('keys array: ', Object.keys(obj));
  console.log('values array:', Object.values(obj));
}

showProps(mentor);

//Task 5-3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return (this.surname + ' ' + this.name);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return (this.surname + ' ' + this.name + ' ' + middleName);
  }

  showCourse() {
    return (new Date().getFullYear() - this.year);
  }
}

let stud1 = new Student('Petro', 'Petrenko', 2015);
console.log(stud1.showFullName('Petrovych'));
console.log('Current course: ' + stud1.showCourse());

//Task 5-4

class Worker {
  #experience = 1.2;
  salary = 0;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = parseInt(dayRate);
    this.workingDays = parseInt(workingDays);
    this.salary = this.dayRate * this.workingDays;
  }

  showSalary() {
    this.salary = this.dayRate * this.workingDays;
    console.log(this.fullName + ' salary: ' + this.salary);
  }

  showSalaryWithExperience() {
    this.salary = this.dayRate * this.workingDays * this.#experience;
    console.log(this.fullName + ' salary: ' + this.salary);
  }

  get showExp() {
    return this.#experience;
  }

  set setExp(exp) {
    this.#experience = exp;
  }

}

let worker1 = new Worker('John Johnson', 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log('New experience: ' + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log('New experience: ' + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker('Tom Tomson', 48, 22);
worker2.showSalaryWithExperience();

let worker3 = new Worker('Andy Ander', 29, 23);
worker3.showSalaryWithExperience();
let unit = [worker1, worker2, worker3];

unit.sort(
    (a, b) => (a.salary > b.salary) ? 1 : ((b.salary > a.salary) ? -1 : 0));
console.log('Sorted salary:');
for (let i = 0; i < unit.length; i++) {
  console.log(unit[i].fullName + ': ' + unit[i].salary);
}

//Task 5-5

class GeometricFigure {
  getArea() {

  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.a = a;
  }

  getArea() {
    return this.a * this.a;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }

  getArea() {
    return Math.PI * this.r * this.r;
  }
}

function handleFigures(figures) {
  let total = 0;
  for (let i = 0; i < figures.length; i++) {
    total += figures[i].getArea();
    console.log('Geometric figure: ' + figures[i].toString() + ' - area:' +
        figures[i].getArea().toFixed(3));
  }
  console.log('total area:   ' + total.toFixed(3));
}

const figures = [new Triangle(4, 5, 2), new Square(7), new Circle(5)];
handleFigures(figures);
