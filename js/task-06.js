const input = document.querySelector('#validation-input');

console.dir(input);

input.addEventListener('blur', onInputFocusAdd);


function onInputFocusAdd(event) {
    
    if (input.value.length === Number(input.attributes["data-length"].value)) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}

