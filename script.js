const menu = document.getElementById('mobile-menu');
const nav = document.querySelector('.menu');

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
});
