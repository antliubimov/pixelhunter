// intro.js
import getElementFromTemplate from "./getElementFromTemplate";
import changeScreen from "./changeScreen";
import greeting from "./greeting";

const introTemplate = `<section id="intro" class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
   <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
   <button class="intro__top top" type="button">
    <img src="img/icon-top.svg" width="71" height="79" alt="Топ игроков">
   </button>
</section>`;

const intro = getElementFromTemplate(introTemplate);
const introAsterisk = intro.querySelector(`.intro__asterisk`);

introAsterisk.addEventListener(`click`, function () {
  changeScreen(greeting);
});

export default intro;

