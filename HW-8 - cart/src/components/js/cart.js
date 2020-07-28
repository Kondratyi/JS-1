'use strict';
document.getElementById('button-hide').addEventListener('click', event => {
    let dropCart = document.getElementById('cart-hide');
    dropCart.classList.contains('drop_cart_hide') ? dropCart.classList.remove('drop_cart_hide') : dropCart.classList.add('drop_cart_hide');
});

var cart = {
    products: [],
    container: null,
    cart: cart,
    total: 0,

    init() {
        this.container = document.querySelector("#product_in_cart");
        this._render();
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this.remove(evt.target.dataset.id);
            }
        })
    },
    _render() {
        let str = "";
        this.products.forEach(product => {
            str += `
            <div class="drop_cart_item">
                <a href="single.html">
                <img src="${product.image}" alt="drop_cart_1" class="drop_cart_item_img"></a>
                <div class="drop_cart_item_content">
                    <div class="drop_cart_item_content_name">${product.name}</div>
                    <img class="drop_cart_item_content_stars" src="https://raw.githubusercontent.com/Kondratyi/Static/master/img/stars.png" alt="stars">
                    <div class="drop_cart_item_content_price">${product.amount} 
                        <span>x</span> ${product.price}$
                    </div>
                </div>
                <button name="remove" data-id="${product.id}" class="drop_cart_item_del">X</button>
            </div>
            `
        })
        this.container.innerHTML = str;
    },    
    add(product) {
        let find = this.products.find(el => el.id == product.id);
        let total = document.getElementById('total');
        if (!find) {
            this.products.push(product);
            this.total += product.price;
            total.innerHTML = `${this.total}$`;
        } else {
            find.amount++;
            find.price = product.price * find.amount;
            this.total += product.price;
            total.innerHTML = `${this.total}$`;
        }
        this._render();
    },
    remove(productId) {
        console.log('remove')
        let find = this.products.find(el => el.id == productId);
        let total = document.getElementById('total');
        if (find.amount > 1) {
            this.total -= (find.price / find.amount);
            find.price -= (find.price / find.amount);
            find.amount--;
            total.innerHTML = `${this.total}$`;
        } else {
            this.products.splice(this.products.indexOf(find), 1);
            this.total -= find.price;
            total.innerHTML = `${this.total}$`;
        }
        this._render();
    }
}

cart.init();
