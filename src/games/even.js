import playGame from "../index.js";
import getRandomInteger from "../util.js";

const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(1, 9);
  const currentAnswer = isEven(question) ? "yes" : "no";

  return [question, currentAnswer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
