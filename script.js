/* ================================
   RHODE WEBSITE JAVASCRIPT
   ================================ */

let cartCount = 0;

function addToCart(productName) {
    cartCount++;

    const counter = document.getElementById("cartCount");

    if (counter) {
        counter.textContent = cartCount;
    }

    alert(productName + " has been added to your cart!");
}

function showCart() {
    if (cartCount === 0) {
        alert("Your cart is currently empty.");
    } else {
        alert("You have " + cartCount + " item(s) in your cart.");
    }
}
