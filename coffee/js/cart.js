const cartWrapper = document.querySelector('.cart__wrapper');
const cart = document.querySelector('.cart');

window.addEventListener('click', (event) => {

    if (event.target.hasAttribute('data-cart')) {

        cartWrapper.classList.remove('hidden')

        const card = event.target.closest('.card')
        if (cartWrapper.children.length < 1) {
            cart.classList.add('visible')
        }

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card__img').getAttribute('src'),
            title: card.querySelector('.card__title').innerText,
            price: card.querySelector('.card__price').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else {

            const cartItemHTML = `<div class="cart__item" data-id="${productInfo.id}">
                            <img src="${productInfo.imgSrc}" alt="coffee" class="cart__img">
                            <div class="cart__descr">
                                <div class="cart__title">${productInfo.title}</div>
                                <div class="cart__details">
                                    <div class="counter-wrapper items">
                                        <div class="items__control" data-action="minus">-</div>
                                        <div class="items__current" data-counter>${productInfo.counter}</div>
                                        <div class="items__control" data-action="plus">+</div>
                                    </div>
                                    <span class="cart__price-dollar">$</span><div class="cart__price">${productInfo.price}</div>
                                </div>
                            </div>
                        </div>`;

            cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML)
        }

        card.querySelector('[data-counter]').innerText = '1'


        toggleCartStatus();

        calcCartPrice()

    }
})