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
     
               
        if (parseInt(counter.innerText) > 0) {
       //уменьшаем число в счетчике на 1
       counter.innerText = --counter.innerText 
}

    }

})