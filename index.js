let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  // output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);

  // Step 3 Trying Try/Catch and Step 4 Throw and Custom Errors
  try {
    if (operator === '/' && secondNum === '0') {
      throw new divideByZeroError("You can't divide by 0");
    }
    if (eval(`${firstNum} ${operator} ${secondNum}`) === Infinity) {
      throw new infinityError("Your numbers are too big! They result in positive infinity!");
    }
    if (eval(`${firstNum} ${operator} ${secondNum}`) === -Infinity) {
      throw new infinityError("Your numbers are too big! They result in negative infinity!");
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Result is: ' + eval(`${firstNum} ${operator} ${secondNum}`));
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
// Step 4 Throw and Custom Errors
class infinityError extends Error {
  constructor(message) {
    super(message);
    this.name = "infinityError";
  }
}

class divideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "divideByZeroError";
  }
}

// console.log
errorBtns[0].addEventListener('click', () => {
  console.log('This is the console.log button');
});

// console.error
errorBtns[1].addEventListener('click', () => {
  console.error('This is the console.error button. You have made a mistake!');
});

// console.count
errorBtns[2].addEventListener('click', () => {
  console.count('console.count');
});

// console.warn
errorBtns[3].addEventListener('click', () => {
  console.warn('This is the console.warn button. You have been warned!');
});

// console.assert
errorBtns[4].addEventListener('click', () => {
  console.assert(4 + 7 === 13, '4 + 7 does not equal 13');
});

// console.clear
errorBtns[5].addEventListener('click', () => {
  console.clear();
});

// console.dir
errorBtns[6].addEventListener('click', () => {
  console.dir(errorBtns[6]);
});

// console.dirxml
errorBtns[7].addEventListener('click', () => {
  console.dirxml(errorBtns[7]);
});

// Console Group Start, console.group
errorBtns[8].addEventListener('click', () => {
  console.group();
});

// Console Group End, console.groupEnd
errorBtns[9].addEventListener('click', () => {
  console.groupEnd();
});

// console.table
errorBtns[10].addEventListener('click', () => {
  function Job(title, yearsWorked) {
    this.title = title;
    this.yearsWorked = yearsWorked;
  }
  const carpenter = new Job('Carpenter', 5);
  const garbageMan = new Job('Garbage Man', 3);
  const farmer = new Job('Farmer', 20);
  console.table([carpenter, garbageMan, farmer]);
});

// Start Timer, console.time
errorBtns[11].addEventListener('click', () => {
  console.time('Timer Button');
});

// End Timer, console.timeEnd
errorBtns[12].addEventListener('click', () => {
  console.timeEnd('Timer Button');
});

// console.trace
errorBtns[13].addEventListener('click', () => {
  function deep() {deeper();}
  function deeper() {evenMoreDeeper();}
  function evenMoreDeeper() {abyss();}
  function abyss() {console.trace();}
  deep();
});

// Step 5 The Global Error handler and 3rd Party Tracking
window.onerror = () => {
  console.log('Error has occured');
};
errorBtns[14].addEventListener('click', () => {
  const addTwoNumbers = a + b;
});