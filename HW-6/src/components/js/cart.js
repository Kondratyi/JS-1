'use strict';
document.getElementById('button-hide').addEventListener('click', event => {
    let dropCart = document.getElementById('cart-hide');
    dropCart.classList.contains('drop_cart_hide') ? dropCart.classList.remove('drop_cart_hide') : dropCart.classList.add('drop_cart_hide');
});