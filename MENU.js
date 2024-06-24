const menu = [
    {
        id: 0,
        img: "carrotcake.jpg",
        name: 'Carrot Cake',
        price: 150.00
    },
    {
        id: 1,
        img: "lemondrizzle.jpg",
        name: 'Lemon Drizzle',
        price: 200.00
    },
    {
        id: 2,
        img: "chocolatebrowniecake.jpg",
        name: 'Chocolate Brownie',
        price: 180.00
    },
    {
        id: 3,
        img: "matchaslice.jpg",
        name: 'Matcha Slice',
        price: 150.00
    },
    {
        id: 4,
        img: "ultimatechocolatecake.jpg",
        name: 'Ultimate Choco Slice',
        price: 170.00
    },
    {
        id: 5,
        img: "redvelvet.jpg",
        name: 'Red Velvet Cake',
        price: 200.00
    },
    {
        id: 6,
        img: "moussecake.jpg",
        name: 'Mousse Cake',
        price: 190.00
    },
    {
        id: 7,
        img: "newyorkstylecheesecake.jpg",
        name: 'NY Style Cheesecake',
        price: 150.00
    },
    {
        id: 8,
        img: "strawberryshortcake.jpg",
        name: 'Strawberry Shortcake',
        price: 180.00
    },
    {
        id: 9,
        img: "glazeddonut.jpg",
        name: 'Glazed',
        price: 190.00
    },
    {
        id: 10,
        img: "jellyfilled.jpg",
        name: 'Jelly Filled',
        price: 190.00
    },
    {
        id: 11,
        img: "strawberryfrosted.jpg",
        name: 'Strawberry Frosted',
        price: 185.00
    },
    {
        id: 12,
        img: "frenchcrullerdonut.jpg",
        name: 'French Cruller',
        price: 190.00
    },
    {
        id: 13,
        img: "Blueberrycakedonut.jpg",
        name: 'Blueberry Cake',
        price: 190.00
    },
    {
        id: 14,
        img: "donutholes.jpg",
        name: 'Donut Holes',
        price: 100.00
    },
    {
        id: 15,
        img: "alfredopasta.jpg",
        name: 'Alfredo Pasta',
        price: 250.00
    },
    {
        id: 16,
        img: "amatriciana.jpg",
        name: 'Amatriciana',
        price: 190.00
    },
    {
        id: 17,
        img: "carbonara.jpg",
        name: 'Carbonara',
        price: 250.00
    },
    {
        id: 18,
        img: "farfallecarbonara.jpg",
        name: 'Farfalle Carbonara',
        price: 250.00
    },
    {
        id: 19,
        img: "marinara.jpg",
        name: 'Pasta w/ Marinara',
        price: 190.00
    },
    {
        id: 20,
        img: "sausageandmushroom.jpg",
        name: 'Sausage & Mushroom Pasta',
        price: 200.00
    },
    {
        id: 21,
        img: "tomatopestopasta.jpg",
        name: 'Tomato Pesto & Chicken',
        price: 200.00
    },
    {
        id: 22,
        img: "americano.jpg",
        name: 'Americano',
        price: 150.00
    },
    {
        id: 23,
        img: "cappuccino.jpg",
        name: 'Cappuccino',
        price: 120.00
    },
    {
        id: 24,
        img: "cortado.jpg",
        name: 'Cortado',
        price: 150.00
    },
    {
        id: 25,
        img: "frappe.jpg",
        name: 'Frappe',
        price: 150.00
    },
    {
        id: 26,
        img: "lattemacchiato.jpg",
        name: 'Macchiato',
        price: 190.00
    },
    {
        id: 27,
        img: "MarocchinoCoffee.jpg",
        name: 'Marocchino',
        price: 150.00
    },
    {
        id: 28,
        img: "mochalatte.jpg",
        name: 'Mocha Latte',
        price: 150.00
    },
    {
        id: 29,
        img: "classic.jpg",
        name: 'Classic',
        price: 100.00
    },
    {
        id: 30,
        img: "earlgrey.jpg",
        name: 'Earl Grey',
        price: 110.00
    },
    {
        id: 31,
        img: "hokkaido.jpg",
        name: 'Hokkaido',
        price: 140.00
    },
    {
        id: 32,
        img: "hongkongstyle.jpg",
        name: 'HongKong Style',
        price: 140.00
    },
    {
        id: 33,
        img: "jasmine.jpg",
        name: 'Jasmine',
        price: 100.00
    },
    {
        id: 34,
        img: "matcha.jpg",
        name: 'Matcha',
        price: 140.00
    },
    {
        id: 35,
        img: "thai.jpg",
        name: 'Thai',
        price: 150.00
    },
    {
        id: 36,
        img: "bananasplit.jpg",
        name: 'Banana Split',
        price: 100.00
    },
    {
        id: 37,
        img: "cheese.jpg",
        name: 'Cheese',
        price: 110.00
    },
    {
        id: 38,
        img: "Chocoicecrream.jpg",
        name: 'Chocolate',
        price: 120.00
    },
    {
        id: 39,
        img: "cookiescream.jpg",
        name: 'Cookies & Cream',
        price: 130.00
    },
    {
        id: 40,
        img: "rockyroad.jpg",
        name: 'Rocky Road',
        price: 140.00
    },
    {
        id: 41,
        img: "snowiceceam.jpg",
        name: 'Snow',
        price: 150.00
    },
    {
        id: 42,
        img: "strawberryicecream.jpg",
        name: 'Strawberry',
        price: 140.00
    },
    {
        id: 43,
        img: "ube.jpg",
        name: 'Ube',
        price: 150.00
    }
];

document.getElementById('root').innerHTML = menu.map(item =>
    `<div class='box'>
        <div class='img-box'>
            <img class='images' src='${item.img}' alt='${item.name}'></img>
        </div>
        <div class='bottom'>
            <p>${item.name}</p>
            <h2>\u20B1 ${item.price.toFixed(2)}</h2>
            <button onclick='addToCart(${item.id})'>Add to cart</button>
        </div>
    </div>`
).join('');

let cart = [];

function showMessage(message) {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = `<p>${message}</p>`;
    setTimeout(() => {
        messageBox.innerHTML = "";
    }, 3000); 
}

function addToCart(id) {
    const selectedItem = menu.find(item => item.id === id);
    const quantity = 1;

    const existingItemIndex = cart.findIndex(item => item.id === id);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ ...selectedItem, quantity });
    }
    displayCart(); 
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        displayCart();
    }
}

function increaseQuantity(index) {
    cart[index].quantity++;
    displayCart();
}

function delElement(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let total = 0;
    const cartItems = cart.map((item, index) => {
        total += item.price * item.quantity;
        return `
            <div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src='${item.img}' alt='${item.name}'></img>
                </div>
                <p>${item.name}</p>
                <h2>\u20B1 ${item.price * item.quantity.toFixed(2)}</h2>
                <div class="quantity-controls">
                    <button class="quantity-button" onclick="decreaseQuantity(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-button" onclick="increaseQuantity(${index})">+</button>
                </div>
                <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
            </div>`;
    }).join('');

    const buyNowButton = `<button onclick='buyNow()'>Order Now</button>`;

    document.getElementById("cartItem").innerHTML = cart.length === 0 ? "Your cart is empty" : cartItems;
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("total").innerHTML = `\u20B1 ${total.toFixed(2)}`;
    document.getElementById("buyNowButton").innerHTML = cart.length === 0 ? "" : buyNowButton;
}

function buyNow() {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }

    alert(`Total: \u20B1 ${total.toFixed(2)}`);

    cart = [];
    displayCart();
    showMessage("Thank you for your purchase!");
}