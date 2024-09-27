const btn = document.querySelector('.pattern')
const list = document.querySelector('.header__link')
btn.addEventListener('click', () => {
btn.classList.toggle('open')
list.classList.toggle('show')
})