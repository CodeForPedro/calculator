const calculator = {
  stage: 2,
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
