const menuToggle = document.querySelector('.menu__toggle');
const menuList = document.querySelector('.menu__list');

const initMenuToggle = () => {
  menuToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuToggle.classList.toggle('active');
    menuList.classList.toggle('active');
  });
};

export { initMenuToggle };
