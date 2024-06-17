import game from "../index.js";

const description = "Find the greatest common divisor of given numbers.";

const randomNum = () => Math.round(Math.random() * 100);

const getProgressionArray = () => {
  const progressionArray = [];
  const term = Math.round(Math.random() * 10);

  const random = randomNum();

  for (let i = 1; i < 10; i += 1) {
    progressionArray[0] = random;
    progressionArray.push(progressionArray[i - 1] + term);
  }

  const getNumberHiding = () =>
    Math.round(Math.random() * progressionArray.length);

  const numberHiding = getNumberHiding();

  progressionArray[numberHiding] = "..";
  return progressionArray;
};

const getQuestionAndAnswer = () => {
  const question = getProgressionArray();
  let currentAnswer;

  const index = question.indexOf("..");
  if (index === question.length - 1 || index === question.length - 2) {
    const diff = question[1] - question[0];
    currentAnswer = String(diff * index + question[0]);
  } else if (index === question[0] || index === question[1]) {
    const diff = question[question.length - 1] - question[question.length - 2];
    currentAnswer = String(question[question.length - 1] - diff * index);
  } else {
    currentAnswer = String(
      question[index - 1] + (question[index + 1] - question[index - 1]) / 2
    );
  }

  return [question, currentAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
