import game from "../index.js";

const description = "Find the greatest common divisor of given numbers.";

const randomNum = () => Math.round(Math.random() * 100);

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const random1 = randomNum();
  const random2 = randomNum();

  const question = `${random1} ${random2}`;
  const currentAnswer = String(gcd(random1, random2));

  return [question, currentAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
