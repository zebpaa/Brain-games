import game from "../index.js";

const description = "What is the result of the expression?";

const randomNum = () => Math.round(Math.random() * 100);

const randomOperator = () => {
  const operators = ["+", "-", "*"];
  let index = Math.round(Math.random() * operators.length);
  return operators[index - 1];
};

const getQuestionAndAnswer = () => {
  const random1 = randomNum();
  const random2 = randomNum();
  const operator = randomOperator();

  const question = `${random1} ${operator} ${random2}`;
  let currentAnswer;

  if (operator === "-") {
    currentAnswer = String(random1 - random2);
  } else if (operator === "+") {
    currentAnswer = String(random1 + random2);
  } else {
    currentAnswer = String(random1 * random2);
  }

  return [question, currentAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
