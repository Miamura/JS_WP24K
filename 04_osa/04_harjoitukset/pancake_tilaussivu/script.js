document.addEventListener("DOMContentLoaded", function () {
  const typeSelect = document.getElementById("type");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const totalPriceSpan = document.getElementById("totalPrice");

  function calculateTotalPrice() {
    let totalPrice = parseFloat(typeSelect.value);

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        totalPrice += parseFloat(checkbox.value);
      }
    });

    totalPriceSpan.textContent = totalPrice + "€";
  }

  typeSelect.addEventListener("change", calculateTotalPrice);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", calculateTotalPrice);
  });
});
