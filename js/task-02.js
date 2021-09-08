//  Adds js array into HTML

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredienList = document.querySelector('#ingredients')

const ingredientItem = ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li')
    ingredientEl.textContent = ingredient;

    return ingredientEl
});

ingredienList.append(...ingredientItem)