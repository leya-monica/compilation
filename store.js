const product = [
    {
        id: 0,
        image: 'SKINNYFIT.jpg',
        title: 'Skinny Fit Plain Jeans',
        price: 220,
        stock: 1000
    },
    {
        id: 1,
        image: 'rippedjeans.jpg',
        title: 'Ripped Jeans',
        price: 270,
        stock: 1004
    },
    {
        id: 2,
        image: 'straightfit.jpg',
        title: 'Straight Fit',
        price: 250,
        stock: 1070
    },
    {
        id: 3,
        image: 'wideleg.jpg',
        title: 'Wide Leg',
        price: 350,
        stock: 1001
    },
    {
        id: 4,
        image: 'quote.jpg',
        title: 'Quoted Shirts',
        price: 175,
        stock: 909
    },
    {
        id: 5,
        image: 'vneck.jpg',
        title: 'V neck White Shirt',
        price: 300,
        stock: 908
    },
    {
        id: 6,
        image: 'ootd.jpg',
        title: "OOTD Shirt",
        price: 195,
        stock: 1005
    },
    {
        id: 7,
        image: 'pink.jpg',
        title: 'Plain Shirt',
        price: 350,
        stock: 1009
    },
    {
        id: 8,
        image: 'sando.jpg',
        title: 'Black Sando(men)',
        price: 100,
        stock: 909
    },
    {
        id: 9,
        image: 'sando2.jpg',
        title: 'Colored OOTD sando',
        price: 140,
        stock: 108
    },
    {
        id: 10,
        image: 'sando3.jpg',
        title: 'White Sando(men)',
        price: 100,
        stock: 999
    },
    {
        id: 11,
        image: 'spaghetti.jpg',
        title: 'Spaghetti Sando(women)',
        price: 120,
        stock: 1123
    },
    {
        id: 12,
        image: 'chanel.jpg',
        title: 'Chanel',
        price: 1599,
        stock: 1000
    },
    {
        id: 13,
        image: 'perfume.jpg',
        title: 'L\'Or de J\'adore',
        price: 1899,
        stock: 1120
    },
    {
        id: 14,
        image: 'tiffany&co.jpg',
        title: 'Tiffany & Co.',
        price: 1780,
        stock: 990
    },
    {
        id: 15,
        image: 'villain.jpg',
        title: 'Villain',
        price: 999,
        stock: 87
    },
    {
        id: 16,
        image: 'ts2.jpg',
        title: 'Toy Story toy',
        price: 180,
        stock: 109
    },
    {
        id: 17,
        image: 'pikachu.png',
        title: 'Pikachu Plushie',
        price: 200,
        stock: 155
    },
    {
        id: 18,
        image: 'monsterplush.jpg',
        title: 'Cute Monster Plushie',
        price: 80,
        stock: 110
    },
    {
        id: 19,
        image: 'giraffe.jpg',
        title: 'Cute Giraffe Toy',
        price: 75,
        stock: 109
    },
];

const categories = [...new Set(product.map(item => item.title))];

document.getElementById('root').innerHTML = product.map(item =>
    `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${item.image}></img>
        </div>
        <div class='bottom'>
            <p>${item.title}</p>
            <h2>\u20B1 ${item.price}.00</h2>
            <p>Stock: <span id="stock-${item.id}">${item.stock}</span></p> <!-- Add id attribute for stock display -->
            <button onclick='addtocart(${item.id})'>Add to cart</button>
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

function addtocart(id) {
    const selectedItem = product.find(item => item.id === id);

    if (cart.some(item => item.id === id)) {
        showMessage("Item is already added to cart!");
    } else {
        const selectedItemIndex = product.findIndex(item => item.id === id);
        if (selectedItem.stock > 0) {
            const newItem = { ...selectedItem };
            newItem.quantity = 1; 
            cart.push(newItem);
            displaycart(); 
        } else {
            showMessage("Sorry, this item is out of stock.");
        }
    }
}

function updateStockDisplay(productId, newStock) {
    document.getElementById(`stock-${productId}`).textContent = newStock;
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function applyDiscount() {
    const discountOptions = document.getElementsByName('discount');
    let selectedDiscount = 0;

   
    for (const option of discountOptions) {
        if (option.checked) {
            selectedDiscount = parseFloat(option.value);
            break;
        }
    }

   
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }

    const discountedTotal = total * (1 - selectedDiscount);
    document.getElementById("total").innerHTML = "\u20B1 " + total.toFixed(2);
    document.getElementById("discounted-price").innerHTML = selectedDiscount > 0 ? "Discounted Price: ₱ " + discountedTotal.toFixed(2) : "";
}

function displaycart() {
    let total = 0;
    const cartItems = cart.map((item, index) => {
        if (!item.quantity) {
            item.quantity = 1; // Set quantity to 1 if it's not defined
        }
        total += item.price * item.quantity; // Update total based on quantity
        return `
            <div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${item.image}>
                </div>
                <p style='font-size:12px;'>${item.title}</p>
                <h2 style='font-size: 15px;'>\u20B1 ${item.price * item.quantity}.00</h2>
                <input type='number' value='${item.quantity}' min='1' max='${item.stock}' onchange='updateQuantity(${index}, this.value)'>
                <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
            </div>`;
    }).join('');

    const buyNowButton = `<button onclick='buyNow()'>Buy Now</button>`;

    document.getElementById("cartItem").innerHTML = cart.length === 0 ? "Your cart is empty" : cartItems;
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("total").innerHTML = "\u20B1 " + total.toFixed(2); // Use toFixed to ensure two decimal places
    document.getElementById("buyNowButton").innerHTML = cart.length === 0 ? "" : buyNowButton;

   
    applyDiscount();
}

function updateQuantity(index, quantity) {
    const item = cart[index];
    const productId = item.id;
    const productIndex = product.findIndex(p => p.id === productId);

    const availableStock = product[productIndex].stock;

   
    const quantityInt = parseInt(quantity, 10);
    if (quantityInt <= 0) {
        showMessage("Quantity must be a positive integer.");
        return;
    }

    if (availableStock >= quantityInt) {
        const quantityDifference = quantityInt - item.quantity; // Calculate the difference in quantity

        
        product[productIndex].stock -= quantityDifference;

        item.quantity = quantityInt; // Update item quantity to the parsed integer value
    } else {
        showMessage("Sorry, there's not enough stock available for this item.");
        return;
    }

    displaycart();
}

function buyNow() {
    
    const insufficientStockItems = cart.filter(item => {
        const productIndex = product.findIndex(p => p.id === item.id);
        return productIndex !== -1 && product[productIndex].stock < item.quantity;
    });

    if (insufficientStockItems.length > 0) {
        showMessage(`Sorry, there's not enough stock available for ${insufficientStockItems.map(item => item.title).join(", ")}.`);
        return;
    }

    cart.forEach(item => {
        const productIndex = product.findIndex(p => p.id === item.id);
        if (productIndex !== -1) {
            product[productIndex].stock -= item.quantity; // Update stock by subtracting item quantity
            // Update the stock display for the item
            updateStockDisplay(item.id, product[productIndex].stock);
        }
    });

    cart = [];

    displaycart();

    showMessage("Thank you for your purchase!");
}

document.addEventListener("DOMContentLoaded", function() {
    const updatedStocks = JSON.parse(localStorage.getItem("stocks"));

    if (updatedStocks) {
        for (const stock of updatedStocks) {
            var storeStockElement = document.getElementById(`stock-${stock.id}`);
            if (storeStockElement) {
                storeStockElement.textContent = stock.stock;
            }
        }
    }
    displaycart(); 
});

const updatedStocks = JSON.parse(localStorage.getItem("stocks"));


document.addEventListener("DOMContentLoaded", function() {
    const updatedStocks = JSON.parse(localStorage.getItem("stocks"));

    if (updatedStocks) {
        for (const stock of updatedStocks) {
            var storeStockElement = document.getElementById(`stock-${stock.id}`);
            if (storeStockElement) {
                storeStockElement.textContent = stock.stock;
            }
        }
    }
});
