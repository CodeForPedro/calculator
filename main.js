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
};

function handleInput(type, value) {
  switch (type) {
    case "number":
      break;

    case "action":
      break;

    case "operator":
      break;

    default:
      break;
  }
}

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  button = e.target.closest(".button");

  if (!button) return;

  const value = button.dataset.value;
  const type = button.dataset.value;

  console.log(value);

  handleInput(type, value);
});
