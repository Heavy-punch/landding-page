const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector(".header");
const body = document.querySelector('body');
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll('.has-fade');
hamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeElems.forEach(function (elem) {
            elem.classList.add('fade-out');
            elem.classList.remove('fade-in');
        });
    }
    else {
        header.classList.add('open');
        body.classList.add('noScroll');
        fadeElems.forEach(function (elem) {
            elem.classList.remove('has-fade');
            elem.classList.remove('fade-out');
            elem.classList.add('fade-in');
        });
    }
});
