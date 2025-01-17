// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML; 
  const quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = price * quantity;
  let subtotalHolder = product.querySelector('.subtotal span')
  subtotalHolder.innerText = subtotalPrice;
  return subtotalHolder.innerText;
}


function calculateAll() {
   // ITERATION 2
  // ITERATION 3
  const products = document.querySelectorAll('.product');
  let totalPrice = 0; 
  products.forEach((product) => totalPrice += +updateSubtotal(product)); 
  document.querySelector('#total-value span').innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let product = target.parentNode.parentNode;
  let parent = document.querySelector("tbody");
  parent.removeChild(product);

  calculateAll();

}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
})

