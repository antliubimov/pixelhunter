// backToGreeting.js
import changeScreen from "./changeScreen";
import greeting from "./greeting";

const backToGreeting = (element) => {
  const backButton = element.querySelector(`.back`);
  backButton.addEventListener(`click`, function () {
    changeScreen(greeting);
  });
};

export default backToGreeting;
