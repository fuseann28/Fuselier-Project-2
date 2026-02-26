// JS scripts placed here
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your order has been submitted.");
    this.reset();
});

