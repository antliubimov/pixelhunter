// checkResults.js

const checkResults = (resArr, lifeCount) => {
  let resultPoints = 0;
  let length = resArr.length;

  if (length < 10) {
    return -1;
  }

  for (let i = 0; i < length; i++) {
    if (resArr[i][0] === 1) {
      resultPoints += checkTime(resArr[i][1]);
    }
  }
  resultPoints += livesPoints(lifeCount);
  return resultPoints;
};

const checkTime = (time) => {
  let rightAnswerPoints = 100;
  const speedPoints = 50;
  const fastAnswerTime = 10;
  const slowAnswerTime = 20;
  if (time < fastAnswerTime) {
    rightAnswerPoints += speedPoints;
  } else if (time > slowAnswerTime) {
    rightAnswerPoints -= speedPoints;
  }
  return rightAnswerPoints;
};

const livesPoints = (lives) => {
  const lifePoints = 50;
  return lifePoints * lives;
};

export default checkResults;
