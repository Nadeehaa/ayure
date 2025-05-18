// Get cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const orderSummary = document.getElementById("orderSummary");
const totalAmount = document.getElementById("totalAmount");
const orderForm = document.getElementById("orderForm");
const codCheckbox = document.getElementById("codCheckbox");

let total = 0;

// Populate order summary
cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <strong>${item.name}</strong> from ${item.farmer} (${item.farm})<br>
        ₹${item.price} x ${item.quantity} = ₹${item.total}
    `;
    orderSummary.appendChild(listItem);
    total += item.total;
});

// Show the total amount
totalAmount.textContent = `Total Amount: ₹${total}`;

// Form submission
orderForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Get form values
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (!codCheckbox.checked) {
        alert("Please select a payment method.");
        return;
    }

    // Order confirmation message
    alert(`Thank you, ${name}! Your order has been placed successfully. 
    It will be delivered to ${address}. 
    You will pay ₹${total} via Cash on Delivery. 
    Contact Number: ${phone}`);

    // Clear the cart and form
    localStorage.removeItem("cartItems");
    orderForm.reset();
    window.location.href = "index.html"; // Redirect to main page
});
// Back to Cart button functionality
const backToCartButton = document.getElementById("backToCartButton");

backToCartButton.addEventListener("click", () => {
    window.location.href = "index.html"; // change if your cart page filename is different
});

