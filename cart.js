document.getElementById('cartItems').innerHTML = localStorage.getItem("cartCounter");
var cart = JSON.parse(localStorage.getItem("cartItems"));

function addItem() {
  cart = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cart)

  for (i=0; i<cart.length; i++) {
    var newElement = document.createElement("div");
    newElement.id = 'item';
    
    newElement.innerHTML = `
      <img src='${cart[i].image}' alt="${cart[i].name} Roll"></img>
      <div id="middle">
        <h2>${cart[i].name}</h2>
        <div id="specs">
          <h3>Glaze: ${cart[i].glaze}</h3>
          <h3>Quantity: ${cart[i].quant}</h3>
        </div>
        <button id="delete" onclick="deleteItem(this)">Delete</button>
      </div>
      <h2 class="price">${cart[i].price}</h2>
    `
    document.querySelector('#leftContent').appendChild(newElement);
  }
}

function deleteItem(e) {
  console.log(e);
  e.parentNode.parentNode.remove();
}