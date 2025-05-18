const products = [
  {
    id: 1,
    name: "Tulsi",
    description: "Immunity booster and natural remedy for respiratory health.",
    benefits: "Boosts immunity, supports respiratory health, and reduces stress.",
    image: "images/tulsi.jpg",
    farmers: [
      { id: 1, name: "Farmer Raj", farm: "Raj Organic Farms", price: 50, rating: 4.5 },
      { id: 2, name: "Farmer Sita", farm: "Sita Herbal Farms", price: 55, rating: 4.2 }
    ]
  },
  {
    id: 2,
    name: "Neem",
    description: "Powerful plant for skin purification and anti-inflammatory properties.",
    benefits: "Purifies skin, fights infections, and reduces inflammation.",
    image: "images/neem.jpg",
    farmers: [
      { id: 3, name: "Farmer Amit", farm: "Amit Natural Fields", price: 70, rating: 4.8 },
      { id: 4, name: "Farmer Lata", farm: "Lata Green Gardens", price: 68, rating: 4.4 }
    ]
  },
  {
    id: 3,
    name: "Ashwagandha",
    description: "Reduces stress, anxiety and boosts energy levels.",
    benefits: "Reduces anxiety, boosts energy, and improves stamina.",
    image: "images/ashwagandha.jpg",
    farmers: [
      { id: 5, name: "Farmer Vikram", farm: "Vikram's Ayurveda", price: 150, rating: 4.7 },
      { id: 6, name: "Farmer Anita", farm: "Anita's Healing Garden", price: 145, rating: 4.5 }
    ]
  },
  {
    id: 4,
    name: "Aloe Vera",
    description: "Used for skin treatment, hydration, and digestive health.",
    benefits: "Hydrates skin, aids digestion, and heals wounds.",
    image: "images/aloevera.jpg",
    farmers: [
      { id: 7, name: "Farmer Raju", farm: "Raju's Farm", price: 40, rating: 4.3 },
      { id: 8, name: "Farmer Nisha", farm: "Nisha Herbal Farm", price: 42, rating: 4.6 }
    ]
  },
  {
    id: 5,
    name: "Turmeric",
    description: "Anti-inflammatory and antioxidant powerhouse.",
    benefits: "Fights inflammation, boosts immunity, and promotes healthy skin.",
    image: "images/turmeric.jpg",
    farmers: [
      { id: 9, name: "Farmer Manoj", farm: "Manoj Organic Farms", price: 80, rating: 4.9 },
      { id: 10, name: "Farmer Priya", farm: "Priya's Herbal Fields", price: 78, rating: 4.7 }
    ]
  },
  {
    id: 6,
    name: "Holy Basil",
    description: "Helps in stress relief and respiratory health.",
    benefits: "Relieves stress, improves lung function, and detoxifies.",
    image: "images/holybasil.jpg",
    farmers: [
      { id: 11, name: "Farmer Sunil", farm: "Sunil's Garden", price: 60, rating: 4.4 },
      { id: 12, name: "Farmer Rina", farm: "Rina's Organic Farm", price: 62, rating: 4.5 }
    ]
  },
  {
    id: 7,
    name: "Giloy",
    description: "Boosts immunity and detoxifies the body.",
    benefits: "Improves immunity, detoxifies liver, and reduces fever.",
    image: "images/giloy.jpg",
    farmers: [
      { id: 13, name: "Farmer Karan", farm: "Karan Herbal Fields", price: 110, rating: 4.6 },
      { id: 14, name: "Farmer Alka", farm: "Alka's Ayurveda Farm", price: 115, rating: 4.7 }
    ]
  },
  {
    id: 8,
    name: "Mint",
    description: "Relieves indigestion and improves respiratory health.",
    benefits: "Aids digestion, freshens breath, and clears congestion.",
    image: "images/mint.jpg",
    farmers: [
      { id: 15, name: "Farmer Anil", farm: "Anil's Herb Garden", price: 30, rating: 4.1 },
      { id: 16, name: "Farmer Rekha", farm: "Rekha Organic Farms", price: 32, rating: 4.3 }
    ]
  },
  {
    id: 9,
    name: "Moringa",
    description: "Rich in antioxidants and nutrients for overall health.",
    benefits: "Boosts energy, strengthens immunity, and supports weight loss.",
    image: "images/moringa.jpg",
    farmers: [
      { id: 17, name: "Farmer Ravi", farm: "Ravi's Moringa Farm", price: 120, rating: 4.5 },
      { id: 18, name: "Farmer Kavita", farm: "Kavita Herbal Fields", price: 125, rating: 4.7 }
    ]
  },
  {
    id: 10,
    name: "Amla",
    description: "Boosts immunity and improves digestion.",
    benefits: "Rich in Vitamin C, aids digestion, and strengthens hair.",
    image: "images/amla.jpg",
    farmers: [
      { id: 19, name: "Farmer Mahesh", farm: "Mahesh Organic Gardens", price: 35, rating: 4.8 },
      { id: 20, name: "Farmer Shreya", farm: "Shreya's Ayurveda", price: 38, rating: 4.7 }
    ]
  },
  {
    id: 11,
    name: "Brahmi",
    description: "Boosts brain health and improves memory.",
    benefits: "Enhances cognitive function, reduces anxiety, and improves focus.",
    image: "images/brahmi.jpg",
    farmers: [
      { id: 21, name: "Farmer Arjun", farm: "Arjun's Herbal Garden", price: 90, rating: 4.6 },
      { id: 22, name: "Farmer Meera", farm: "Meera's Ayurveda Farm", price: 88, rating: 4.4 }
    ]
  },
  {
    id: 12,
    name: "Shatavari",
    description: "Supports women's health and hormonal balance.",
    benefits: "Regulates hormones, boosts fertility, and improves digestion.",
    image: "images/shatavari.jpg",
    farmers: [
      { id: 23, name: "Farmer Tara", farm: "Tara's Organic Fields", price: 140, rating: 4.7 },
      { id: 24, name: "Farmer Dev", farm: "Dev Herbal Farms", price: 135, rating: 4.5 }
    ]
  },
  {
    id: 13,
    name: "Triphala",
    description: "Powerful detoxifier and digestive support.",
    benefits: "Aids digestion, detoxifies the body, and promotes weight loss.",
    image: "images/triphala.jpg",
    farmers: [
      { id: 25, name: "Farmer Suraj", farm: "Suraj's Ayurveda", price: 95, rating: 4.8 },
      { id: 26, name: "Farmer Lakshmi", farm: "Lakshmi Herbal Farms", price: 92, rating: 4.6 }
    ]
  },
  {
    id: 14,
    name: "Jatamansi",
    description: "Calming herb for better sleep and stress relief.",
    benefits: "Promotes relaxation, improves sleep, and reduces anxiety.",
    image: "images/jatamansi.jpg",
    farmers: [
      { id: 27, name: "Farmer Gopal", farm: "Gopal's Herbal Garden", price: 160, rating: 4.5 },
      { id: 28, name: "Farmer Radha", farm: "Radha's Organic Fields", price: 155, rating: 4.6 }
    ]
  },
  {
    id: 15,
    name: "Gotu Kola",
    description: "Boosts brain function and reduces anxiety.",
    benefits: "Improves memory, reduces anxiety, and supports skin health.",
    image: "images/gotukola.jpg",
    farmers: [
      { id: 29, name: "Farmer Naveen", farm: "Naveen's Ayurveda", price: 100, rating: 4.7 },
      { id: 30, name: "Farmer Rekha", farm: "Rekha's Herbal Farm", price: 98, rating: 4.5 }
    ]
  }
];

const productGrid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");
const modalContent = document.querySelector(".modal-content");
const cartItemsList = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const cartPopup = document.getElementById("cartPopup");
const cart = [];

// Generate Product Cards
products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.name}" />
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
    `;
    productCard.addEventListener("click", () => openModal(product));
    productGrid.appendChild(productCard);
});

// Open/Close Cart
function toggleCart() {
    cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
}

// Open Modal
function openModal(product) {
    modal.style.display = "flex";
    modalContent.innerHTML = `
        <button class="modal-close">&times;</button>
        <h2>${product.name}</h2>
        <label>Select Farmer:</label>
        <select id="farmerSelect">
        ${product.farmers.map(farmer => 
    `     <option value="${farmer.price}">
           ${farmer.name} - ${farmer.farm} - ₹${farmer.price} - ⭐${farmer.rating}
          </option>`
        ).join("")}
        </select>
        <label>Select Quantity:</label>
        <input id="quantityInput" type="number" value="1" min="1" />
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    document.querySelector(".modal-close").addEventListener("click", () => {
        modal.style.display = "none";
    });
}
// Cart logic
function addToCart(productName) {
    const farmerSelect = document.getElementById("farmerSelect");
    const quantityInput = document.getElementById("quantityInput");

    const selectedPrice = parseInt(farmerSelect.value);
    const selectedFarmer = farmerSelect.options[farmerSelect.selectedIndex].text.split(" - ")[0];
    const farmName = farmerSelect.options[farmerSelect.selectedIndex].text.split(" - ")[1];

    const quantity = parseInt(quantityInput.value);

    if (quantity < 1) {
        alert("Quantity must be at least 1");
        return;
    }

    const cartItem = {
        name: productName,
        farmer: selectedFarmer,
        farm: farmName,
        price: selectedPrice,
        quantity: quantity,
        total: selectedPrice * quantity
    };

    // Check if item already exists in the cart
    const existingItem = cart.find(
        (item) => item.name === productName && item.farmer === selectedFarmer
    );

    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total += selectedPrice * quantity;
    } else {
        cart.push(cartItem);
    }

    updateCart();
    modal.style.display = "none";
}

// Update Cart UI
function updateCart() {
    cartItemsList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${item.name}</strong> by ${item.farmer} (${item.farm})<br>
            ₹${item.price} x ${item.quantity} = ₹${item.total} 
            <button onclick="removeFromCart(${index})" class="remove-btn">❌</button>
        `;
        cartItemsList.appendChild(listItem);
        totalPrice += item.total;
    });

    totalPriceElement.textContent = `Total: ₹${totalPrice}`;

    if (!document.getElementById("checkoutButton")) {
        const checkoutButton = document.createElement("button");
        checkoutButton.id = "checkoutButton";
        checkoutButton.innerText = "Proceed to Checkout";
        checkoutButton.onclick = () => {
            // Save the cart to localStorage
            localStorage.setItem("cartItems", JSON.stringify(cart));
            window.location.href = "checkout.html";  // Redirect to checkout
        };
        cartPopup.appendChild(checkoutButton);
    }
}


// Remove item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
