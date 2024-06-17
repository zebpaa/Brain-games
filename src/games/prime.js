import game from "../index.js";

const description =
  "Answer 'yes' if given number is prime. Otherwise answer 'no'";

const randomNum = () => Math.round(Math.random() * 100);

const isPrime = (num) => {
  let flag = 0;
  for (let i = 2; i < Math.sqrt(num) + 1; i += 1) {
    if (num % i === 0) {
      flag += 1;
    }
  }
  return flag > 0 ? 0 : 1;
};

const getQuestionAndAnswer = () => {
  const random = randomNum();
  const question = random;
  const currentAnswer = isPrime(random) ? "yes" : "no";

  return [question, currentAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
