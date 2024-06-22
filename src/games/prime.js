import playGame from '../index.js';
import getRandomInteger from '../util.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getQuestionAndAnswer = () => {
  const random = getRandomInteger(1, 9);
  const question = random;
  const currentAnswer = isPrime(random) ? 'yes' : 'no';

  return [question, currentAnswer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
