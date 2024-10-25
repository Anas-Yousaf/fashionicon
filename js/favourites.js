


function addItemsToFavourites(){
    //first get the items form the local storage

    let favouriteItems = JSON.parse(localStorage.getItem("favouriteItems"));

    if(!favouriteItems || favouriteItems.length === 0){
        const favProductSectionRow = document.querySelector('.fav-product-section-row');
        const emptyFavIcon = document.querySelector('.empty-fav-icon');
        emptyFavIcon.style.display = 'block';
        return;
    }


    favouriteItems.forEach((product)=>{


     






        const favProductSectionRow = document.querySelector('.fav-product-section-row');
        const favProductCard = document.createElement('div');
        favProductCard.classList.add('fav-product-card');
        favProductCard.innerHTML = ` 
         <div class="fav-product-image">
              <img
                src="assests/images/products/product ${product.id}.jpg"
                alt="Product Image"
              />
              <div class="fav-hover-overlay">
                <i class="fas fa-search"></i>
              </div>
            </div>
            <div class="fav-product-info">
              <h3 class="fav-product-title">
                ${product.title}
              </h3>
              <div class="fav-product-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p class="fav-product-price">$${product.price}</p>
            </div>
            <div class="fav-actions">
              <button class="fav-add-to-cart">Add to cart</button>
              <div class="fav-favourite">
                <i class="fas fa-heart"></i>
              </div>
            </div>
        `;

        favProductSectionRow.appendChild(favProductCard);




              
    //the add to cart product data store into the local storage here

    let cartBtn = favProductCard.querySelector('button');

    cartBtn.addEventListener('click',(event)=>{

      event.stopPropagation();
      let cartItemDetails = {
        id : product.id,
        title : product.title,
        price : product.price,
        imgUrl : " "
      }
      // get the cart Items from the local storage
      let cartItems = JSON.parse(localStorage.getItem('cartItems') ) || [];
      // push the new item into the array
      cartItems.push(cartItemDetails);


      //store this product into the local  storage

      localStorage.setItem('cartItems',JSON.stringify(cartItems));
      alert("item added");
      updateCartCounter();
      addItemToCart();
      
    });


    //to remove the items from the favourite tabs

    const favIcon = favProductCard.querySelector('.fav-favourite i');

    favIcon.addEventListener('click',(event)=>{
      event.stopPropagation();
     // alert("item removed"); //add just to check the working
      removeFavItem(product.title);
      location.reload();
      favCard.remove();
    });
    });

  
}


addItemsToFavourites();


//function to remove the favourite item

function removeFavItem (title) {
  let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];

  //filter out the item by title
  favouriteItems = favouriteItems.filter(item => item.title !== title);

  localStorage.setItem("favouriteItems",JSON.stringify(favouriteItems));
  alert("Favourite Item removed");
}







         // to show the preview of the product 

         const cards = document.querySelectorAll('.fav-product-card');

         cards.forEach(function(card){
          card.addEventListener('click',function(event){
            event.stopPropagation();
            const img = card.querySelector('.fav-product-image img');
            const imgUrl = img.getAttribute('src');
            // Use regex to extract the number from the image file name
            const numberMatch = imgUrl.match(/product\s*(\d+)\.jpg/);
            const productNumber = numberMatch ? numberMatch[1] : null; // Extract the number, or null if not found
            let productDetails = {
              id: " ",
              title : " ",
              price : " ",
              description : " "
            };
            
            allProducts.forEach((product)=>{
              if(productNumber == product.id){
                productDetails.id = product.id;
                productDetails.title = product.title;
                productDetails.price = product.price;
                productDetails.description = product.description;
              }
            });//function to extract the products details that is clicked

            //store this products into the local storage
            localStorage.setItem('PreviewProductData',JSON.stringify(productDetails));
            window.open('productPreview.html');
            
          });
         });