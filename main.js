const operations = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

let first = "";
let second = "";
let stageTwo = false;
let chosenOperator = null;

function clear() {
  first = "";
  second = "";
  chosenOperator = null;
  stageTwo = false;
}

function operate(operator, a, b) {
  return operator(a, b);
}

function updateFirst(digit) {
  first = first + digit;
  display.textContent = first;
}

function updateSecond(digit) {
  second = second + digit;
  display.textContent = second;
}

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

buttons.addEventListener("click", (e) => {
  button = e.target.closest(".button");

  if (!button) return;

  const value = button.dataset.value;
  const type = button.dataset.type;

  if (type === "number") {
    if (chosenOperator === null) {
      updateFirst(value);
      console.log(first);
      console.log(chosenOperator);
    } else {
      updateSecond(value);
      console.log(second);
      console.log(chosenOperator);
    }
  }

  if (type === "action") {
    if (value === "clear") {
      clear();
      display.textContent = second;
    }
    if (value === "erase") {
      if (chosenOperator === null) {
        first = first.slice(0, first.length - 1);
        display.textContent = first;
      } else {
        second = second.slice(0, first.length - 1);
        display.textContent = second;
      }
    }
    if (value === "equals") {
      if (first.length > 0 && second.length > 0) {
        const result = operate(
          operations[chosenOperator],
          +first,
          +second,
        ).toFixed(3);
        first = String(result);
        second = "";
        display.textContent = Number(first);
        chosenOperator = null;
      }
    }
  }

  if (type === "decimal") {
    if (chosenOperator === null) {
      if (!first.includes(".")) updateFirst(value);
      display.textContent = first;
    } else {
      if (!second.includes(".")) updateSecond(value);
      display.textContent = second;
    }
  }

  if (type === "operator") {
    if (first.length > 0 && second.length > 0) {
      const result = operate(operations[chosenOperator], +first, +second);
      first = String(+result.toFixed(3));
      second = "";
      display.textContent = Number(first);
    }

    if (first.length > 0) {
      chosenOperator = value;
    }
  }
});
