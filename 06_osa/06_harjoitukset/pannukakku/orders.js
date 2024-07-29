document.addEventListener("DOMContentLoaded", () => {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  const ordersContainer = document.querySelector("#ordersContainer");

  const renderOrders = () => {
    ordersContainer.innerHTML = "";
    orders.forEach((order, index) => {
      if (order.status === "pending") {
        const orderDiv = document.createElement("div");
        orderDiv.className = "order";
        orderDiv.innerHTML = `
          <p>Name: ${order.customerName}</p>
          <p>Type: ${order.pancakeType}</p>
          <p>Toppings: ${order.toppings.join(", ")}</p>
          <p>Extras: ${order.extras.join(", ")}</p>
          <p>Total: ${order.total}€</p>
          <p>Status: ${order.status}</p>
          <button data-index="${index}" class="complete-order-btn">Mark as Complete</button>
        `;
        ordersContainer.appendChild(orderDiv);
      }
    });
  };

  ordersContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-order-btn")) {
      const index = e.target.dataset.index;
      const orderDiv = e.target.closest(".order");

      orderDiv.classList.add("fade-out");

      orderDiv.addEventListener("transitionend", () => {
        orders[index].status = "complete";
        localStorage.setItem("orders", JSON.stringify(orders));
        renderOrders();
      });
    }
  });

  renderOrders();
});
