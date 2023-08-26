const initCurrentDate = () => {
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
};

export { initCurrentDate };
