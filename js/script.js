const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  menu.classList.toggle('hidden');

  if (isMenuOpen) {
    menuIcon.src = 'images/icon-close.svg';
    menuIcon.alt = 'Close menu';
  } else {
    menuIcon.src = 'images/icon-hamburger.svg';
    menuIcon.alt = 'Open menu';
  }
});
