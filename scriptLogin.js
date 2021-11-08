document.getElementById('cartItems').innerHTML = localStorage.getItem("cartCounter");

window.onload = function() {
  init();
}

const tabs = document.getElementById('loginNames').children;
const loginContent = document.getElementById('loginTabs').children;


//on page load
function init() {
  selection(loginContent);
  loginContent[0].setAttribute("class", "visible");
  tabs[1].style.backgroundColor = "#ffffff";
  tabs[0].style.backgroundColor = "#F0F1F5";
}

function selection(e) {
  for (i=0; i<e.length; i++) {
      e[i].setAttribute("class", "invisible");
  }
}


//LOGIN SELECTION

document.getElementById('logBut').addEventListener('click', function(e) { 
  selection(loginContent);
  loginContent[0].setAttribute("class", "visible");
  tabs[0].style.backgroundColor = "#F0F1F5";
  tabs[1].style.backgroundColor = "#ffffff";
}, false);

document.getElementById('signBut').addEventListener('click', function(e) { 
  selection(loginContent);
  loginContent[1].setAttribute("class", "visible");
  tabs[0].style.backgroundColor = "#ffffff";
  tabs[1].style.backgroundColor = "#F0F1F5";
}, false);