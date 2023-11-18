document.addEventListener('DOMContentLoaded', function () {
  const toggleCartBtn = document.getElementById('toggleCartBtn');
  const shoppingCart = document.getElementById('shoppingCart');
  const totalPriceElement = document.createElement('div');
  let totalPrice = 0;

  toggleCartBtn.addEventListener('click', function () {
      shoppingCart.classList.toggle('hidden');
  });

  const updateBtns = document.querySelectorAll('.add-to-cart-btn');

  // Function to show the total price details
  function showPriceDetails() {
      totalPriceElement.style.display = 'block';
  }

  updateBtns.forEach(button => {
      button.addEventListener('click', function () {
          const price = parseFloat(this.dataset.price); // Parse the price to a float

          const pic = this.dataset.pic;
          const name = this.dataset.name;

          // Create elements for the cart items
          const listItem = document.createElement('li');
          listItem.classList.add('CartItem');
          listItem.innerHTML = `
              <div class="CartItemInfo">
                  <img src=${pic} class='CartImg'>
                  <div class="CartItemDetails">
                      <span class="ProductName">${name}</span>
                      <span class="ProductPrice">${price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                  </div>
              </div>
              <div class="CartItemSeparator"></div>
          `;

          // Update total price
          totalPrice += price;

          // Calculate IVA (16% of the total price)
          const iva = totalPrice * 0.16;

          // Calculate subtotal (total price - IVA)
          const subtotal = totalPrice - iva;

          // Update total price displayed in the shopping cart
             totalPriceElement.innerHTML = `
                <div>Subtotal: ${subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                <div>IVA (16%): ${iva.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                Total: ${totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          `;

          // Show the total price details when an item is added
          showPriceDetails();

          // Append the new item to the shopping cart
          const cartItems = document.getElementById('cartItems');
          cartItems.appendChild(listItem);
      });
  });

  // Hide the total price details initially
  totalPriceElement.style.display = 'none';
  totalPriceElement.classList.add('TotalPrice'); // Add a class for styling
  shoppingCart.insertBefore(totalPriceElement, shoppingCart.querySelector('button'));
});
