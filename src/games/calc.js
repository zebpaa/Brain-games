import playGame from "../index.js";
import getRandomInteger from "../util.js";

const description = "What is the result of the expression?";

const getRandomOperator = () => {
  const operators = ["+", "-", "*"];
  let index = getRandomInteger(0, operators.length - 1);
  return operators[index];
};

const getQuestionAndAnswer = () => {
  const random1 = getRandomInteger(1, 9);
  const random2 = getRandomInteger(1, 9);
  const operator = getRandomOperator();

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
  playGame(description, getQuestionAndAnswer);
};
