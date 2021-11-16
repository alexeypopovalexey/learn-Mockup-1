const INPUTSEARCH = document.querySelector('.nav__search');
const SEARCH = document.querySelector('#search');
const BODY = document.querySelector('body');

function disActivateOnClick (event) {
    if (event.target !== INPUTSEARCH) {
        INPUTSEARCH.classList.remove('activate__search');
        INPUTSEARCH.classList.add('disactivate__search');
    }
    return
}
function disActivateOnSubmit () {
        INPUTSEARCH.classList.remove('activate__search');
        INPUTSEARCH.classList.add('disactivate__search');
}
function activate (event) {
    event.stopPropagation()
    INPUTSEARCH.classList.remove('disactivate');
    INPUTSEARCH.classList.add('activate__search');
    INPUTSEARCH.classList.remove('disactivate__search');
}

export function search () { 
SEARCH.addEventListener('click', activate);
INPUTSEARCH.addEventListener('search', disActivateOnSubmit);
BODY.addEventListener('click', disActivateOnClick);
}
