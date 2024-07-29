// Define the Order class globally so it can be used in both script.js and orders.js
class Order {
  constructor(customerName, pancakeType, toppings, extras, total) {
    this.customerName = customerName;
    this.pancakeType = pancakeType;
    this.toppings = toppings;
    this.extras = extras;
    this.total = total;
    this.status = "pending";
  }

  markComplete() {
    this.status = "complete";
  }
}

// Initialize orders array from local storage or empty if none exists
let orders = JSON.parse(localStorage.getItem("orders")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-container");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const typeSelect = document.querySelector("#type");
  const button = document.querySelector("button");

  let total;
  let toppings = [];
  let extras = [];

  const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector("#totalPrice");
    const pendingOrders = orders.filter((order) => order.status === "pending");
    const totalPendingPrice = pendingOrders.reduce(
      (acc, order) => acc + order.total,
      0
    );
    totalPriceElement.textContent = `${totalPendingPrice}€`;
  };

  const calculateTotalPrice = () => {
    total = parseInt(typeSelect.value);

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        total += parseInt(checkbox.value);
      }
    });

    const totalPriceElement = document.querySelector("#totalPrice");
    totalPriceElement.textContent = `${total}€`;
  };

  const addItem = (itemName, category) => {
    if (category === "toppings") {
      toppings.push(itemName);
    } else {
      extras.push(itemName);
    }
  };

  const removeItem = (itemName, category) => {
    if (category === "toppings") {
      toppings = toppings.filter((item) => item !== itemName);
    } else {
      extras = extras.filter((item) => item !== itemName);
    }
  };

  const checkToppings = () => {
    toppings = [];
    extras = [];

    for (const item of checkboxes) {
      const itemName = item.dataset.name;
      const category = item.dataset.category;

      if (item.checked) {
        addItem(itemName, category);
      } else {
        removeItem(itemName, category);
      }
    }
  };

  const displayOrder = () => {
    const customerName = document.querySelector("#customerName").value;
    const orderType = document.querySelector("#order_type");
    const orderToppings = document.querySelector("#order_toppings");
    const orderExtras = document.querySelector("#order_extras");
    const orderName = document.querySelector("#order_name");
    const orderPrice = document.querySelector("#order_price");

    // Ensure toppings and extras are updated before creating the order
    checkToppings();

    orderType.textContent = typeSelect.selectedOptions[0].text;
    orderToppings.textContent = toppings.join(", ");
    orderExtras.textContent = extras.join(", ");
    orderName.textContent = customerName;
    orderPrice.textContent = `${total}€`;

    // Create new order and save to the orders array
    const newOrder = new Order(
      customerName,
      typeSelect.selectedOptions[0].text,
      toppings,
      extras,
      total
    );
    orders.push(newOrder);

    // Save orders to local storage
    localStorage.setItem("orders", JSON.stringify(orders));

    console.log("Orders:", orders);

    // Reset the form
    form.reset();

    // Reset total and recalculate initial price
    total = 0;
    toppings = [];
    extras = [];
    calculateTotalPrice();

    // Update the total price on the pancake picture
    updateTotalPrice();
  };

  form.addEventListener("change", calculateTotalPrice);
  button.addEventListener("click", displayOrder);

  // Update the total price on page load
  updateTotalPrice();
});
