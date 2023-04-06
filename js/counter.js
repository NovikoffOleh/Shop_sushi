//делаем прослушивание событий на всей странице

window.addEventListener('click', function name(event) {

    let counter;
    
// проверка клика по конкретной кнопке а не по полю
    
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') { 
        counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
// проверка елемента - это Плюс?
    if (event.target.dataset.action === 'plus') {
     
        
        counter.innerText = ++counter.innerText 
    }

    // проверка елемента - это Минус?
    if (event.target.dataset.action === 'minus') {
    
    
    
    //проверка чтоб товар бил больше 1
    if (parseInt(counter.innerText) > 1) {
    //уменьшаем число в счетчике на 1
     counter.innerText = --counter.innerText 
    
    //принадлежит ли кнопка минус корзине (для удаления товара из корзини)
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
    
    //если кол-во товара меньше 1 то карточка товара удалятся
    event.target.closest('.cart-item').remove();  
    }
        
        
       

    }

})