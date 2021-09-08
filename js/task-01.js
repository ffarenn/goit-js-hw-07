const navEl = document.querySelector('#categories')
console.log(navEl)


console.dir(document.querySelector('.item'));

const navItem = document.querySelectorAll(".item > h2").forEach(item =>
    console.log(`Категория: ${item.textContent}, Количество элементов вкатегории: ${item.nextElementSibling.children.length}`))
