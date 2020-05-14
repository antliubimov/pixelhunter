// changeScreen.js

const centralElement = document.querySelector(`.central`);

const changeScreen = (element) => {
  centralElement.innerHTML = ``;
  centralElement.appendChild(element);
};

export default changeScreen;
