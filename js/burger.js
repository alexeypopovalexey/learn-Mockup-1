const BURGER = document.querySelector('.nav__burger__wraper');
const BURGERLIST = document.querySelector('.nav__burger--list');
const BODY = document.querySelector('body');
const BURGERWRAPPER = document.querySelector('.nav__burger');
const NEXTELEM = document.querySelector('.nav__label__link');
const NEXTELEMBYMOBILE = document.querySelector('.nav__tools__link');


function activateBurger () {
    BURGERLIST.classList.remove('disactivate');
    BURGERLIST.classList.remove('burger_closest');
    BURGERLIST.classList.add('dropdown');
};

function disactiveOnBodyClick (event) {
    if (event.target !== BURGERLIST && event.target !== BURGER && event.target.closest('div') !== BURGERWRAPPER) {
        BURGERLIST.classList.remove('dropdown');
        BURGERLIST.classList.add('burger_closest');

    }
}

function disactivateOnBlur (event) {
    if (event.target.closest('div') !== BURGERWRAPPER) {
        BURGERLIST.classList.remove('dropdown');
        BURGERLIST.classList.add('burger_closest');
    }
}

export const burger = () => {
    BURGER.addEventListener('focus', activateBurger);
    BODY.addEventListener('click', disactiveOnBodyClick);
    BURGER.addEventListener('blur', disactivateOnBlur);
    NEXTELEM.addEventListener('focus', disactivateOnBlur);
    NEXTELEMBYMOBILE.addEventListener('focus', disactivateOnBlur);
}