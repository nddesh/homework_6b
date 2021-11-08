document.getElementById('cartItems').innerHTML = localStorage.getItem("cartCounter");

// Add item to Cart page
// document.querySelector('ogAdd').onclick = addItem();
// document.querySelector('blAdd').onclick = addItem();
// document.querySelector('wlAdd').onclick = addItem();
// document.querySelector('ogVAdd').onclick = addItem();
// document.querySelector('psAdd').onclick = addItem();
// document.querySelector('cpAdd').onclick = addItem();
var cart = JSON.parse(localStorage.getItem("cartItems"));
addItem();

function addItem() {
  var cart = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cart)

  for (i=0; i<cart.length; i++) {
    var newElement = document.createElement("div");
    
    newElement.innerHTML = `
    <div>
      <img src='${cart[i].image}' alt="${cart[i].name} Roll"></img>
      <div id="middle">
        <h2>${cart[i].name}</h2>
        <div id="specs">
          <h3>Glaze: ${cart[i].glaze}</h3>
          <h3>Quantity: ${cart[i].quant}</h3>
        </div>
        <button id="delete">Delete</button>
      </div>
      <h2 class="price">${cart[i].price}</h2>
    </div>
    `

    document.querySelector('#leftContent').appendChild(newElement);
  }
}
