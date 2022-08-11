const toggleMenu = () => {
  document.querySelector('.mobile-nav').classList.toggle('block');
};

document.querySelectorAll('.mobile-nav a').forEach((item) => item.addEventListener('click', toggleMenu));
document.querySelector('.menu-bars').addEventListener('click', toggleMenu);
