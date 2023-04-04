//находим елемент плюс и минус на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

//отслеживаем клик на кнопку Минус
btnMinus.addEventListener('click', function (params) {
//проверка чтоб в заказе било не меньше 0
    if (parseInt(counter.innerText) > 0) {
    //уменьшаем число в счетчике на 1
   counter.innerText = --counter.innerText 
}

})

//отслеживаем клик на кнопку Плюс
btnPlus.addEventListener('click', function (params) {
    //увеличиваем число в счетчике на 1
    counter.innerText = ++counter.innerText
 })   
