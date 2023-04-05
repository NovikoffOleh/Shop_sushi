const cartWrapper = document.querySelector('.cart-wrapper');

//отследим клик на странице

window.addEventListener('click', function (event) {
    
    //проверка что клик совершен по кнопке "добавить в корзину"
    if (event.target.hasAttribute('data-cart')) {
        
    //находим карточку с товаром в которой совершен клик
        const card = event.target.closest('.card');

        // собираем все данние с карточки
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        //проверяем наличие одинакового товара в корзине
        
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        //если товар есть
        
        if (itemInCart) {
         const counterElement =   itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);

        } else {
            //если товара нет

       


        //----------------------------------------------
        // Собранние данние подставляем в шаблон
        const cartItemHtml = `
        <!-- Cart item -->
								<div class="cart-item" data-id="${productInfo.id}">
									<div class="cart-item__top">
										<div class="cart-item__img">
											<img src="${productInfo.imgSrc}" alt="">
										</div>
										<div class="cart-item__desc">
											<div class="cart-item__title">${productInfo.title}</div>
											<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

											<!-- cart-item__details -->
											<div class="cart-item__details">

												<div class="items items--small counter-wrapper">
													<div class="items__control" data-action="minus">-</div>
													<div class="items__current" data-counter="">${productInfo.counter}</div>
													<div class="items__control" data-action="plus">+</div>
												</div>

												<div class="price">
													<div class="price__currency">${productInfo.price} грн</div>
												</div>

											</div>
											<!-- // cart-item__details -->

										</div>
									</div>
								</div>
        `;

        //отобразим товар в корзине

        cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
     }
    //сброс счетчика
     
        card.querySelector('[data-counter]').innerText  = '1';
     
    }

    
})

