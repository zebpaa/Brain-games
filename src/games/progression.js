import playGame from '../index.js';
import getRandomInteger from '../util.js';

const description = 'What number is missing in the progression?';

const getProgressionArray = () => {
  const progressionArray = [];
  const term = getRandomInteger(1, 9);

  const firstElOfProgression = getRandomInteger(1, 9);
  progressionArray[0] = firstElOfProgression;

  for (let i = 1; i < 10; i += 1) {
    progressionArray.push(progressionArray[i - 1] + term);
  }

  return progressionArray;
};

const getIndexOfHiddenNumber = () => getRandomInteger(0, getProgressionArray().length - 1);

const getQuestionAndAnswer = () => {
  const progression = getProgressionArray();

  const IndexOfHiddenNumber = getIndexOfHiddenNumber();
  const hiddenNumber = progression[IndexOfHiddenNumber];
  progression[IndexOfHiddenNumber] = '..';

  const question = progression.toString().split(',').join(' ');

  const currentAnswer = String(hiddenNumber);

  return [question, currentAnswer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
