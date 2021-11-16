const INPUTSEARCH = document.querySelector('.nav__search');
const SEARCH = document.querySelector('#search');
const BODY = document.querySelector('body');

function disActivateOnClick (event) {
    if (event.target !== INPUTSEARCH) {
        INPUTSEARCH.classList.remove('animate__lightSpeedInRight');
        INPUTSEARCH.classList.add('animate__lightSpeedOutRight');
    }
    return
}
function disActivateOnSubmit () {
        INPUTSEARCH.classList.remove('animate__lightSpeedInRight');
        INPUTSEARCH.classList.add('animate__lightSpeedOutRight');
}
function activate (event) {
    event.stopPropagation()
    INPUTSEARCH.classList.remove('disactivate');
    INPUTSEARCH.classList.add('animate__lightSpeedInRight');
    INPUTSEARCH.classList.remove('animate__lightSpeedOutRight');
}

export function search () { 
SEARCH.addEventListener('click', activate);
INPUTSEARCH.addEventListener('search', disActivateOnSubmit);
BODY.addEventListener('click', disActivateOnClick);
}
