document.addEventListener('DOMContentLoaded', () => {
  updateCartCounter();
  favouritesItemsCount();
});



// close the alert
const alertClose = document.querySelector('#alert-close');
alertClose.addEventListener('click',()=>{
  console.log('alert closed');
  const alert = document.querySelector('.alert');
  alert.style.display = 'none';
});



// men section data dynamically adding
menProducts.forEach((product)=>{
    console.log(product);
    const menProductCard = document.createElement('div');
    menProductCard.classList.add('men-product-card');
    const menSlider = document.querySelector('.men-slider');
    menProductCard.innerHTML = `
          <div class="men-product-card-img">
            <img src="assests/images/products/product ${product.id}.jpg" alt="Product Image">
            <div class="popular-hover-overlay">
              <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="men-product-card-info">
            <h3 class="men-product-card-title">
                ${product.title}
            </h3>
            <div class="popular-product-rating">
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p class="men-product-card-price">$${product.price}</p>
            <div class="hover-icons">
                <button>Add to cart</button>
                <i class="fa-regular fa-heart fav-icon"></i>
            </div>
        </div>
           
    `;
    menSlider.appendChild(menProductCard);







    //the add to cart product data store into the local storage here

    let cartBtn = menProductCard.querySelector('button');

    cartBtn.addEventListener('click',(event)=>{

      event.stopPropagation();
      let cartItemDetails = {
        id : product.id,
        title : product.title,
        price : product.price,
        imgUrl : product.imageURL
      }
      // get the cart Items from the local storage
      let cartItems = JSON.parse(localStorage.getItem('cartItems') ) || [];
      // push the new item into the array
      cartItems.push(cartItemDetails);
      // save the updated cart Items back to the local stoarge
      storeProductData(cartItems);
      // update the cart Counter
      updateCartCounter();
      //pop up display
      checkOutPopUp(cartItemDetails);
      const proceedPopUp = document.querySelector('.proceed-pop-up');
      proceedPopUp.style.display = 'flex';
    });




    // event listen to show the preview of the product

        

menProductCard.addEventListener('click',(event)=>{

  // fisrt get the data of the product

  event.stopPropagation();

  let productDetails = {
    id : product.id,
    title : product.title,
    price : product.price,
    description : product.description
  };
  
  //now store the data into the local storage to shift

  localStorage.setItem("PreviewProductData",JSON.stringify(productDetails));



  // window.open("productPreview.html");

  window.open("productPreview.html");




  // event to add  the items into the favourite tab

  const favBtn = menProductCard.querySelector('.fav-icon');

  favBtn.addEventListener('click',(event)=>{
  event.stopImmediatePropagation();

  //store the products details 

  let favouriteProductDetails = {
    id : product.id,
    title : product.title,
    price : product.price,
    description : product.description
  };

  //first get the data from the local storage if any?

  let favouriteItems = JSON.parse(localStorage.getItem("favouriteItems")) || [];

  //now push the favourite Product details into the array

  favouriteItems.push(favouriteProductDetails);

  //now store the details into the local storage

  localStorage.setItem("favouriteItems",JSON.stringify(favouriteItems));

  alert("item Added to favourite Tab");


//the rest of the work is now performed on the favourites js file

favouritesItemsCount();

  });



  

});


      

   
});


// function to store the product details into the local storage when we click add to cart button



function storeProductData(cartItem){
  localStorage.setItem("cartItems",JSON.stringify(cartItem));
}



//function to update cart Counter

function updateCartCounter(){
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [] ;
  const cartCounter = document.querySelector('.cart-badge');
  cartCounter.textContent = cartItems.length;
}


function favouritesItemsCount() {
  let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
  const heartBadge = document.querySelector('.heart-badge');
  heartBadge.textContent = favouriteItems.length;
}


womenProducts.forEach((product)=>{
    const womenProductCard = document.createElement('div');
    womenProductCard.classList.add('women-product-card');
    const womenSlider = document.querySelector('.women-slider');
    womenProductCard.innerHTML = `
    <div class="men-product-card-img">
            <img src="assests/images/products/product ${product.id}.jpg" alt="Product Image">
            <div class="popular-hover-overlay">
              <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="men-product-card-info">
            <h3 class="men-product-card-title">
                ${product.title}
            </h3>
            <div class="popular-product-rating">
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p class="men-product-card-price">$${product.price}</p>
            <div class="hover-icons">
                <button>Add to cart</button>
                <i class="fa-regular fa-heart fav-icon"></i>
            </div>
        </div>
    `;
    womenSlider.appendChild(womenProductCard);


        //the add to cart product data store into the local storage here

        let cartBtn = womenProductCard.querySelector('button');

        cartBtn.addEventListener('click',(event)=>{
          event.stopPropagation();
          let cartItemDetails = {
            id : product.id,
            title : product.title,
            price : product.price,
            imgUrl : product.imageURL
          }
          // get the cart Items from the local storage
          let cartItems = JSON.parse(localStorage.getItem('cartItems') ) || [];
          // push the new item into the array
          cartItems.push(cartItemDetails);
          // save the updated cart Items back to the local stoarge
          storeProductData(cartItems);
          // update the cart Counter
          updateCartCounter();
          //pop up display
          checkOutPopUp(cartItemDetails);
          const proceedPopUp = document.querySelector('.proceed-pop-up');
          proceedPopUp.style.display = 'flex';
        });
        

        //to show the product preview
        
        womenProductCard.addEventListener('click',(event)=>{

          // fisrt get the data of the product
        
          event.stopPropagation();
        
          let productDetails = {
            id : product.id,
            title : product.title,
            price : product.price,
            description : product.description
          };
          
          //now store the data into the local storage to shift
        
          localStorage.setItem("PreviewProductData",JSON.stringify(productDetails));



        
          window.open("productPreview.html");
        
          
        
        });



         // event to add  the items into the favourite tab

  const favBtn = womenProductCard.querySelector('.fav-icon');

  favBtn.addEventListener('click',(event)=>{
  event.stopImmediatePropagation();

  //store the products details 

  let favouriteProductDetails = {
    id : product.id,
    title : product.title,
    price : product.price,
    description : product.description
  };

  //first get the data from the local storage if any?

  let favouriteItems = JSON.parse(localStorage.getItem("favouriteItems")) || [];

  //now push the favourite Product details into the array

  favouriteItems.push(favouriteProductDetails);

  //now store the details into the local storage

  localStorage.setItem("favouriteItems",JSON.stringify(favouriteItems));

  alert("item Added to favourite Tab");


//the rest of the work is now performed on the favourites js file

favouritesItemsCount();



  });




        
    
});



// customer Reviews js



  document.addEventListener("DOMContentLoaded", function () {
    let current = 0;
    const cards = document.querySelectorAll('.review-card');

    if (!cards.length) return; // Ensure cards exist

    function updateCards() {
      cards.forEach((card, index) => {
        card.classList.remove('active', 'next', 'prev');
        if (index === current) {
          card.classList.add('active');
        } else if (index === (current + 1) % cards.length) {
          card.classList.add('next');
        } else if (index === (current + 2) % cards.length) {
          card.classList.add('prev');
        }
      });
    }

    // Initial setup
    updateCards();

    // Rotate the cards every 4 seconds
    setInterval(() => {
      current = (current + 1) % cards.length;
      updateCards();
    }, 4000);
  });



// notification popup js


//function to generate the random product id

function randomProdductId ()  {
  return Math.floor(Math.random()*19)+1;
}


//function to change the notification product details

function productDetails() {
  const popUp =  document.querySelector('.notify-product-title');
  const popImg = document.querySelector('#notify-product-img')
  allProducts.forEach(p=>{
    if(p.id==randomProdductId()){
      popUp.innerHTML  = `${p.title}`;
      popImg.src = `assests/images/products/product ${p.id}.jpg`;
    }
  })
  
}

 
// Function to generate a random time ago (e.g., "x minutes ago")
function randomTimeAgo() {
  const randomMinutes = Math.floor(Math.random() * 60) + 1; // Generate a number between 1 and 60
  return `${randomMinutes} minutes ago`;
}

// Function to show the popup notification
function showPopup() {
  productDetails();
  const notification = document.getElementById('notification');
  notification.style.display = 'block';
  
  // Update the time ago text with random time
  const timeAgo = document.getElementById('time-ago');
  timeAgo.textContent = randomTimeAgo();

  // Automatically close the popup after 5 seconds
  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000);
}

// Function to manually close the popup
function closePopup() {
  const notification = document.getElementById('notification');
  notification.style.display = 'none';
}

// Show the popup every 10 seconds
setInterval(showPopup, 10000);

// Initial call to show the popup
showPopup();




function checkOutPopUp(item){
  const popImg = document.querySelector('.pop-img');
  popImg.src = `assests/images/products/product ${item.id}.jpg`;
  const popUpTitle = document.querySelector('.pop-up-title');
  const popUpPrice = document.querySelector('.pop-up-price');
  popUpPrice.innerHTML = `Price : $${item.price}`;
  popUpTitle.innerHTML = `Title : ${item.title}`;
}





//close the pop up

const popUpClose = document.querySelector('.pop-up-close');

popUpClose.addEventListener('click',()=>{
  const proceedPopUp = document.querySelector('.proceed-pop-up');
  proceedPopUp.style.display = 'none';
});


//code to add popular item to the cart


// Select all 'Add to cart' buttons
const addToCartButtons = document.querySelectorAll('.popular-add-to-cart');

// Loop through each button and add a click event listener
addToCartButtons.forEach(function(button) {

  button.addEventListener('click', function(event) {
    event.stopPropagation();

    let productDetails = {
      id: " ",
      title : " ",
      price : " ",
      imgUrl : " "
    };
    // Find the closest .popular-product-card element
    const productCard = this.closest('.popular-product-card');
    
    // Get the image element inside the .popular-product-image div
    const productImage = productCard.querySelector('.popular-product-image img');
    
    // Get the src attribute of the image
    const imageSrc = productImage.getAttribute('src');
    
    // Use regex to extract the number from the image file name
    const numberMatch = imageSrc.match(/product\s*(\d+)\.jpg/);
    const productNumber = numberMatch ? numberMatch[1] : null; // Extract the number, or null if not found
    
    console.log("Image Source:", imageSrc);
    console.log("Product Number:", productNumber); // Log the extracted number
    allProducts.forEach((product)=>{
      if(productNumber==product.id){
        productDetails.id = product.id;
        productDetails.title = product.title;
        productDetails.price = product.price;
      }
    });//function to extract the products details that is clicked
    //first get the cart items from the storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    //now push the product details in it
    cartItems.push(productDetails);
    //now again store the cartItems into the local storage
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    //also show the popup of proceed to checkout
    // update the cart Counter
    updateCartCounter();
    //pop up display
    checkOutPopUp(productDetails);
    const proceedPopUp = document.querySelector('.proceed-pop-up');
    proceedPopUp.style.display = 'flex';
  });
});



////code to add popular item to the cart 


const popularFavButtons = document.querySelectorAll('.popular-favourite i');

popularFavButtons.forEach( function(btn){

  btn.addEventListener('click',function(event){
    event.stopPropagation();
    //now get the id for the product that is clicked
    let productDetails = {
      id: " ",
      title : " ",
      price : " ",
      imgUrl : " "
    };
    // Find the closest .popular-product-card element
    const productCard = this.closest('.popular-product-card');
    
    // Get the image element inside the .popular-product-image div
    const productImage = productCard.querySelector('.popular-product-image img');
    
    // Get the src attribute of the image
    const imageSrc = productImage.getAttribute('src');
    
    // Use regex to extract the number from the image file name
    const numberMatch = imageSrc.match(/product\s*(\d+)\.jpg/);
    const productNumber = numberMatch ? numberMatch[1] : null; // Extract the number, or null if not found
    
    console.log("Image Source:", imageSrc);
    console.log("Product Number:", productNumber); // Log the extracted number
    allProducts.forEach((product)=>{
      if(productNumber==product.id){
        productDetails.id = product.id;
        productDetails.title = product.title;
        productDetails.price = product.price;
      }
    });//function to extract the products details that is clicked

    //now get the favItems form the local storage

    let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];

    //now push the products details in it

    favouriteItems.push(productDetails);

    //now again store the favItems into the local storage

    localStorage.setItem('favouriteItems',JSON.stringify(favouriteItems));
    alert('Item added to Favourite');
    favouritesItemsCount();



  });
   
});

//code to popular product preview

const popularProductCards = document.querySelectorAll('.popular-product-card');

popularProductCards.forEach(function(card){
  card.addEventListener('click',function(event){

    let productDetails = {
      id: " ",
      title : " ",
      price : " ",
      imgUrl : " ",
      description: " "
    };
    
    event.stopPropagation();
     // Get the image element inside the .popular-product-image div
     const productImage = card.querySelector('.popular-product-image img');
    
     // Get the src attribute of the image
     const imageSrc = productImage.getAttribute('src');
     
     // Use regex to extract the number from the image file name
     const numberMatch = imageSrc.match(/product\s*(\d+)\.jpg/);
     const productNumber = numberMatch ? numberMatch[1] : null; // Extract the number, or null if not found
     
     console.log("Image Source:", imageSrc);
     console.log("Product Number:", productNumber); // Log the extracted number


     allProducts.forEach((product)=>{
      if(productNumber==product.id){
        productDetails.id = product.id;
        productDetails.title = product.title;
        productDetails.price = product.price;
        productDetails.description = product.description;
      }
    });//function to extract the products details that is clicked

    //store the product details into the local storage for product preview

    localStorage.setItem('PreviewProductData',JSON.stringify(productDetails));

    window.open('/productPreview.html');

  });
});








