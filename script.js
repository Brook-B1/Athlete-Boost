const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
  document.body.classList.toggle('show-mobile-menu');
  const menu = document.querySelector('#menu');
  menu.classList.toggle('hidden');
  menuOpenButton.classList.toggle('open');
})

menuCloseButton.addEventListener('click', () => menuOpenButton.click());