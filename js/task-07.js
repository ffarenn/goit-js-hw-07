const refs = {
    inputValue: document.querySelector('#font-size-control'),
    textValue: document.querySelector('#text'),
}
console.dir(refs.textValue);

refs.inputValue.addEventListener('input', onInputSizeTextChange)

function onInputSizeTextChange(event) {
    refs.textValue.style.fontSize = `${refs.inputValue.value}px`
}
