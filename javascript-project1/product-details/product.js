document.addEventListener("DOMContentLoaded", () => {
  const colorDots = document.querySelectorAll(".color-dot");
  const mainProductImage = document.getElementById("main-product-image");

  const buyNowButton = document.getElementById("buy-now-button");
  const quantityInput = document.getElementById("quantity");

  buyNowButton.addEventListener("click", () => {
    const quantity = quantityInput.value;
    alert(`You have added ${quantity} item(s) to your cart.`);
  });
});
