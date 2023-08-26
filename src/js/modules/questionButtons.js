const questionButtons = document.querySelectorAll('.questions__button');

const initQuestionButtons = () => {
  questionButtons.forEach((button) =>
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      questionButtons.forEach((button) => button.classList.remove('active'));
      button.classList.toggle('active');
    }),
  );
};

export { initQuestionButtons };
