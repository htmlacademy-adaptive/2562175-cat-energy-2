const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

nav.classList.add('nav--closed');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
})