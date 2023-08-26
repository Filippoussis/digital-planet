const pages = document.querySelectorAll('.page');
const anchors = document.querySelectorAll('.menu__link');

const initDynamicNavigation = () => {
  // динамическое переключение якорей при скролле
  const pageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          anchors.forEach((item) => item.classList.remove('active'));
          const activeAnchor = document.querySelector(`.menu__link[href="#${entry.target.id}"]`);

          if (activeAnchor) {
            activeAnchor.classList.add('active');
          }
        }
      });
    },
    {
      threshold: [0.2, 0.5, 0.8],
    },
  );

  pages.forEach((page) => pageObserver.observe(page));

  // плавный скролл по якорям
  anchors.forEach((anchor) =>
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();
      const targetPage = anchor.getAttribute('href');
      document.querySelector(targetPage).scrollIntoView({
        behavior: 'smooth',
      });
    }),
  );
};

export { initDynamicNavigation };
