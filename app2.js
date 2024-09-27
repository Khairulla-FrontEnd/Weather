const menu = document.querySelector('.pattern');
const headerList = document.querySelector('.header__list');
menu.addEventListener('click', () => {
menu.classList.toggle('open');
headerList.classList.toggle('show')
})