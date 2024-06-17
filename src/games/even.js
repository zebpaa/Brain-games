import game from "../index.js";

const description = "Answer 'yes' if number even otherwise answer 'no'";

const isEven = (num) => num % 2 === 0;

const randomNum = () => Math.round(Math.random() * 100);

const getQuestionAndAnswer = () => {
  const question = randomNum();
  const currentAnswer = isEven(question) ? "yes" : "no";

  return [question, currentAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
