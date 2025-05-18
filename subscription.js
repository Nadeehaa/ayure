// Open the Subscription Modal
function openModal() {
    document.getElementById("subscriptionModal").style.display = "block";
}

// Close the Subscription Modal
function closeModal() {
    document.getElementById("subscriptionModal").style.display = "none";
}

// Handle Subscription Button Click
function subscribe(planType) {
    alert(`You have subscribed to the ${planType}. Enjoy your Ayurvedic journey!`);
}

// Handle Form Submission
document.getElementById("subscriptionForm").onsubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById("subscriberName").value;
    const address = document.getElementById("subscriberAddress").value;
    const phone = document.getElementById("subscriberPhone").value;
    const plan = document.getElementById("planType").value;

    // Show confirmation alert
    alert(`Thank you, ${name}!
You have successfully subscribed to the ${plan === 'monthly' ? 'Monthly Plan (₹199/month)' : 'Annual Plan (₹1999/year)'}.
Your subscription will be delivered to:
📍 Address: ${address}
📞 Contact Number: ${phone}
    
We will contact you soon for confirmation and further details. Enjoy your Ayurvedic journey with EcoAyur!`);

    // Close the modal and reset the form
    closeModal();
    document.getElementById("subscriptionForm").reset();
};

/* FAQ Slide Toggle Animation */
function toggleFAQ(element) {
    element.classList.toggle('active');
    const answer = element.querySelector('.faq-answer');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
}

/* Slide-in animation on scroll for Testimonials and FAQ */
document.addEventListener("DOMContentLoaded", function () {
    const slideElements = document.querySelectorAll('.slide-in');

    function checkSlideIn() {
        const triggerBottom = window.innerHeight * 0.85;

        slideElements.forEach((el) => {
            const top = el.getBoundingClientRect().top;

            if (top < triggerBottom) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkSlideIn);
    checkSlideIn();
});