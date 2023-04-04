//делаем прослушивание событий на всей странице

window.addEventListener('click', function name(event) {
    

// проверка елемента - это Плюс?
    if (event.target.dataset.action === 'plus') {
     
        const counterWrapper = event.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');
        counter.innerText = ++counter.innerText 
    }

    // проверка елемента - это Минус?
    if (event.target.dataset.action === 'minus') {
     
        const counterWrapper = event.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');
        
        
        if (parseInt(counter.innerText) > 0) {
       //уменьшаем число в счетчике на 1
       counter.innerText = --counter.innerText 
}

    }

})