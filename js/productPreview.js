
document.addEventListener('DOMContentLoaded', () => {
     // now i get the data from the local stoarge 
  const previewProductData = JSON.parse(localStorage.getItem("PreviewProductData"));
 
  const productPreviewImg = document.querySelector('.product-preview-img');

  const productPreviewTitle = document.querySelector('.product-preview-title');
  
  const productPreviewPrice  = document.querySelector('.product-preview-price');
  
  const productPreviewDescription = document.querySelector('.product-preview-description');
  
  
  function showPreviewProductDetails() {
      productPreviewTitle.innerHTML=previewProductData.title;
      productPreviewPrice.innerHTML= `Price:$ ${previewProductData.price}`;
      productPreviewImg.src = `assests/images/products/product ${previewProductData.id}.jpg`
      productPreviewDescription.innerHTML = previewProductData.description;
  
  }
  


  showPreviewProductDetails();

  //access the add to cart button

  const cartBtn = document.querySelector('.product-preview-cart-button');
  cartBtn.addEventListener('click',()=>{
    //get the array of the get Items

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let cartProductDetails = {
        id : previewProductData.id,
        title : previewProductData.title,
        price : previewProductData.price,
        imgURL : " "
    };

    cartItems.push(cartProductDetails);

    //store the data into the add to cart item

    localStorage.setItem("cartItems",JSON.stringify(cartItems));


    //pop up display
    checkOutPopUp(cartProductDetails);
    const proceedPopUp = document.querySelector('.proceed-pop-up');
    proceedPopUp.style.display = 'flex';


  });//cart btn event
});


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
  


  function updateCartCounter(){
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [] ;
    const cartCounter = document.querySelector('.cart-badge');
    cartCounter.textContent = cartItems.length;
  }

  updateCartCounter();

  function favouritesItemsCount() {
    let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
    const heartBadge = document.querySelector('.heart-badge');
    heartBadge.textContent = favouriteItems.length;
  }

  favouritesItemsCount();














