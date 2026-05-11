const calculator = {
  stage: "numInput",
  screen: [0],
  numbers: { first: 0, second: null },
  chosenOperator: null,
  operations: {
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
  },
  actions: {
    updateDisplay: () => {
      display.textContent = calculator.screen.join("");
    },

    pushToScreen: (a) => {
      calculator.screen.push(a);
    },

    getStage: () => {
      return calculator.stage;
    },
  },
};

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

function handleInput(type, value) {
  switch (type) {
    case "number":
      calculator.actions.pushToScreen(value);
      calculator.actions.updateDisplay();
      break;

    case "action":
      break;

    case "operator":
      break;

    default:
      break;
  }
}

buttons.addEventListener("click", (e) => {
  button = e.target.closest(".button");

  if (!button) return;

  const value = button.dataset.value;
  const type = button.dataset.type;

  console.log(value);

  handleInput(type, value);
});
