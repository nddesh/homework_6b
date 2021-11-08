window.onload = function() {
    localStorage.setItem("glaze", "Original");
    localStorage.setItem("quant", "1");
    localStorage.setItem("cartCounter", '0');
    document.getElementById('cartItems').innerHTML = localStorage.getItem("cartCounter");
}