// JS scripts placed here
document.getElementById("orderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your order has been submitted.");
    e.target.reset();
});
