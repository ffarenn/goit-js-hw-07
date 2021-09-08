
const value = document.querySelector('#value')
const decrement = document.querySelector('[data-action="decrement"]')
const increment = document.querySelector('[data-action="increment"]')


function getCounterValue() {
    let counterValue = 0;
    function decValue() {
        return (counterValue -= 1)
    }
    function incValue() {
        return (counterValue += 1)
    }
    return { decValue, incValue }
}

const countedFunction = getCounterValue()

decrement.addEventListener('click', () => {
    let result = countedFunction.decValue()
    value.textContent = result
})

increment.addEventListener('click', () => {
    let result = countedFunction.incValue()
    value.textContent = result
})


