//Task 10-1

function getPromise(message, delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(message);
    }, delay);
  });

}

getPromise('test promise', 2000).then(function(data) {
  console.log(data);
});

//Task 10-2

function calcArrProduct(arr) {
  return new Promise(
      function(resolve, reject) {
        let output = 1;
        let isAnyNonNumber = false;
        for (x of arr) {
          if (typeof (x) === 'number') {
            output *= x;
          } else {
            isAnyNonNumber = true;
          }
        }
        if (!isAnyNonNumber) {
          resolve(output);// done
        } else {
          resolve('Error! Incorrect array!');
        }
      },
  );
}

calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, 'user2', 7, 12]).then(result => console.log(result));// "Error! Incorrect array!"

//Task 10-3

const delay = (i, time) => new Promise(
    resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
  // your code with using delay(i, time)
  let promise = Promise.resolve();
  for (let i = 1; i <= 10; i++) {
    promise = promise.then(
        _ => delay(i, Math.random() * 1000).then(console.log));
  }
}

showNumbers();

//Task 10-4

const delay = (i, time) => new Promise(
    resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  // your code with using delay(i, time)
  for (let i = 1; i <= 10; i++) {
    const res = await delay(i, Math.random() * 1000);
    console.log(res);
  }
}

showNumbers();
