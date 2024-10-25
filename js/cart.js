function addItemToCart() {
  const shoppingCartItems = document.querySelector(".shopping-cart-items");
  const checkoutItemQty = document.querySelector(".checkout-item-qty");
  const checkoutItemTotal = document.querySelector(".checkout-item-total");
  const checkoutTotalTaxEx = document.querySelector(".checkout-total-tax-ex");
  const checkoutTotalTaxIn = document.querySelector(".checkout-total-tax-in");

  const emptyCart = document.querySelector(".empty-cart-icon"); // Add reference to empty cart icon
  const cartItemFields = document.querySelector('.cart-item-fields');
  const ruler = document.querySelector('.ruler');

  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  if (!cartItems || cartItems.length === 0) {
    console.log("No items in the cart.");
    cartItemFields.innerHTML = ' ';
    ruler.style.display = 'none';
      // Show the empty cart icon
    emptyCart.style.display = 'block';
    
   
    checkoutItemQty.innerHTML = '0 items';
    checkoutItemTotal.innerHTML = '$0';
    checkoutTotalTaxEx.innerHTML = '$0';
    checkoutTotalTaxIn.innerHTML = '$0';
    return;
  }

  let totalCost = 0;
  let totalQty = 0;

  // Iterate over each item and add it to the cart
  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    let itemQty = 1; // Default quantity

    totalCost += item.price * itemQty;
    totalQty += itemQty;

    cartItem.innerHTML = `
      <div class="item-pic">
        <img src="assests/images/products/product ${item.id}.jpg" alt="" />
        <div class="item-title">
          <h6>${item.title}</h6>
          <p>Size: XL</p>
        </div>
      </div>
      <div class="item-price">
        <p>$${item.price}</p>
      </div>
      <div class="item-qty d-flex">
        <input class="item-qty-input" value="${itemQty}" type="number" min="1">
      </div>
      <div class="item-total-price">
        $<span class="item-total">${(item.price * itemQty).toFixed(2)}</span>
        <button class="btn btn-danger btn-sm float-end remove-item" title="Remove item">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;
    shoppingCartItems.appendChild(cartItem);
    const hr = document.createElement("hr");
    shoppingCartItems.appendChild(hr);

    // Add event listener to handle quantity change
    const qtyInput = cartItem.querySelector('.item-qty-input');
    qtyInput.addEventListener('change', (e) => {
      const newQty = parseInt(e.target.value);
      if (newQty < 1) return; // Prevent negative or zero quantities

      itemQty = newQty;
      const newTotalPrice = (item.price * itemQty).toFixed(2);
      cartItem.querySelector('.item-total').textContent = newTotalPrice;

      updateTotals();
    });

    // Add click event listener to remove item
    cartItem.querySelector('.remove-item').addEventListener('click', () => {
      removeCartItem(item.title);
      cartItem.remove();
      location.reload(); //to reload the page
      updateTotals();
    });
  });

  // Update the checkout totals
  updateTotals();

  function updateTotals() {
    let updatedTotalCost = 0;
    let updatedTotalQty = 0;

    document.querySelectorAll('.cart-item').forEach(cartItem => {
      const qtyInput = cartItem.querySelector('.item-qty-input');
      const itemQty = parseInt(qtyInput.value);
      const itemPrice = parseFloat(cartItem.querySelector('.item-price p').textContent.slice(1));

      updatedTotalCost += itemQty * itemPrice;
      updatedTotalQty += itemQty;
    });

    checkoutItemQty.innerHTML = `${updatedTotalQty} items`;
    checkoutItemTotal.innerHTML = `$${updatedTotalCost.toFixed(2)}`;
    checkoutTotalTaxEx.innerHTML = `$${updatedTotalCost.toFixed(2)}`;
    checkoutTotalTaxIn.innerHTML = `$${updatedTotalCost.toFixed(2)}`;
  }
}

addItemToCart();


// Function to remove an item from the cart (localStorage)
function removeCartItem(title) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Filter out the item by title
    cartItems = cartItems.filter(item => item.title !== title);

    // Update localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    console.log(`${title} removed from cart.`);
}

