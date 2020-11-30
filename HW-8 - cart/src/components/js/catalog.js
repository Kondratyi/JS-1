'use strict';

function createProduct(id, image, name, price) {
    return {
        id,
        image,
        name,
        price
    };
}

function initCatalog() {
    let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let images = [
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_1.png",
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_2.png",
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_3.png",
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_4.png",
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_5.png",
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_6.png",
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_7.png",
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_8.png",
        "https://raw.githubusercontent.com/Kondratyi/Static/master/img/product(1)_9.png"
    ];
    let names = ['Mango  People  T-shirt', 'Mango  People  T-shirt', 'Mango  People  T-shirt', 'Mango  People  T-shirt', 'Mango  People  T-shirt', 'Mango  People  T-shirt', 'Mango  People  T-shirt', 'Mango  People  T-shirt', 'Mango  People  T-shirt'];
    let prices = ['52.00', '52.00', '52.00', '52.00', '52.00', '52.00', '52.00', '52.00', '52.00'];
    return ids.map((id, index) => createProduct(id, images[index], names[index], prices[index]));
}

const catalog = {
    products: [],
    container: null,
    cart: cart,

    init() {
        this.products = initCatalog();
        this.container = document.querySelector('#products-catalog');
        this._render();
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add') {
                let product = {
                    name: evt.target.dataset.name,
                    price: +evt.target.dataset.price,
                    image: evt.target.dataset.image,
                    amount: 1,
                    id: evt.target.dataset.id
                }
                this.cart.add(product);
            }
        })
    },
    _render() {
        let str = '';
        this.products.forEach(product => {
            str += `
                <div class="product_block_item">
                        <a href="single.html"><img class="product_block_img" src=${product.image} alt="product-1"></a>
                        <div class="product_block_content"><a href="single.html" class="product_block_name">${product.name}</a>
                            <p class="product_block_price">${product.price}</p>
                            <button class="product_block_add" 
                                name="add"
                                data-name="${product.name}"
                                data-image="${product.image}"
                                data-price="${product.price}"
                                data-id="${product.id}">
                                    Add to Cart
                            </button>
                        </div>
                </div>
                `
        });
        this.container.innerHTML = str;
    }
}

catalog.init();