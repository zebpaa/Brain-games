import playGame from "../index.js";
import getRandomInteger from "../util.js";

const description = "Find the greatest common divisor of given numbers.";

const getGcd = (a, b) => {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const random1 = getRandomInteger(1, 9);
  const random2 = getRandomInteger(1, 9);

  const question = `${random1} ${random2}`;
  const currentAnswer = String(getGcd(random1, random2));

  return [question, currentAnswer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
