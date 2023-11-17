
document.addEventListener('DOMContentLoaded', function() {
    const toggleCartBtn = document.getElementById('toggleCartBtn');
    const shoppingCart = document.getElementById('shoppingCart');
  
    toggleCartBtn.addEventListener('click', function() {
      shoppingCart.classList.toggle('hidden');
    });
  });

document.addEventListener('DOMContentLoaded', function () {
  const updateBtns = document.querySelectorAll('.add-to-cart-btn');

  updateBtns.forEach(button => {
    button.addEventListener('click', function () {
      const productId = this.dataset.product;
      const action = this.dataset.action;
      console.log('Button clicked. Product ID:', productId, ' add');
    });
  });
});

