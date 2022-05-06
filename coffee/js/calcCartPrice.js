function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart__item');
    const totalPriceEl = document.querySelector('.cart__sum');
    let cartCountEl = document.querySelector('.header__cart-count');
    
    let totalPrice = 0;
    let cartCount = 0;

    cartItems.forEach( (item) => {

        const priceEl = item.querySelector('.cart__price');
        const amountEl = item.querySelector('[data-counter]');

        const currentPrice = parseFloat(priceEl.innerText) * parseFloat(amountEl.innerText);

        totalPrice += currentPrice;

        cartCount += parseFloat(amountEl.innerText);
    });

    totalPriceEl.innerText = totalPrice.toFixed(2);
    cartCountEl.innerText = cartCount;
}