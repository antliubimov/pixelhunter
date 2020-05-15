// checkInput.js

const checkInput = (element, length) => {
  const inputs = element.querySelectorAll(`.game__option input:checked`);
  return inputs.length === length;
};

export default checkInput;
