// livesManagement.js

const livesManagement = (lives, answer) => {
  if (checkAnswer(answer)) {
    return lives;
  } else {
    return (lives === 0) ? -1 : lives - 1;
  }
};

const checkAnswer = (answer) => {
  return (answer[0] === 1);
};

export default livesManagement;
