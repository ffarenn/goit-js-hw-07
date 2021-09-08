const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('h1 > span'),
};

refs.input.addEventListener('input', onInputChange)


function onInputChange(elem) {
    if (refs.input.value.length > 0) {
        refs.output.textContent = elem.currentTarget.value
    } else {
        refs.output.textContent = 'незнакомец'
    }
}


// return refs.output.textContent = elem.currentTarget.value