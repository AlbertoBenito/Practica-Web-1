import '../scss/blocks/header.scss';

const iconMenuElement = document.getElementById('icon-menu');
const menuElement = document.getElementById('menu');

const toggleMenu = () => {
  if (menuElement.classList.contains('menu-show')) {
    iconMenuElement.src = './assets/images/icon-hamburger.svg';
    menuElement.classList.remove('menu-show');
  } else {
    iconMenuElement.src = './assets/images/icon-close.svg';
    menuElement.classList.add('menu-show');
  }
};
iconMenuElement.addEventListener('click',toggleMenu);
