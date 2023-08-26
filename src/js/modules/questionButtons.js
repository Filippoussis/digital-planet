const questionButtons = document.querySelectorAll('.questions__button');

const initQuestionButtons = () => {
  questionButtons.forEach((button) =>
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      button.classList.toggle('active');
    }),
  );
};

export { initQuestionButtons };
