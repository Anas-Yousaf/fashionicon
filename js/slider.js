


// document.addEventListener("DOMContentLoaded", function () {
//   const menSlider = document.querySelector(".men-slider");
//   const womenSlider = document.querySelector(".women-slider");

//   let isDragging = false;
//   let startPosition = 0;
//   let currentTranslate = 0;
//   let prevTranslate = 0;
//   let animationID;
//   let currentIndex = 0;
//   let slideWidth = menSlider.querySelector('div').offsetWidth; // Get the width of one card for movement
//   const autoPlayDelay = 5000; // Auto-play delay in milliseconds

//   // Add touch and mouse events for both sliders
//   [menSlider, womenSlider].forEach(slider => {
//       slider.addEventListener("mousedown", startDrag);
//       slider.addEventListener("touchstart", startDrag);

//       slider.addEventListener("mousemove", drag);
//       slider.addEventListener("touchmove", drag);

//       slider.addEventListener("mouseup", endDrag);
//       slider.addEventListener("touchend", endDrag);
//       slider.addEventListener("mouseleave", endDrag);
//   });

//   // Start autoplay after page load
//   let autoPlayInterval = setInterval(autoPlay, autoPlayDelay);

//   function startDrag(event) {
//       isDragging = true;
//       startPosition = getPositionX(event);
//       animationID = requestAnimationFrame(animation);
//       clearInterval(autoPlayInterval); // Stop autoplay when user interacts
//   }

//   function drag(event) {
//       if (!isDragging) return;
//       const currentPosition = getPositionX(event);
//       currentTranslate = prevTranslate + currentPosition - startPosition;
//   }

//   function endDrag() {
//       isDragging = false;
//       cancelAnimationFrame(animationID);

//       const movedBy = currentTranslate - prevTranslate;

//       // Snap to the next or previous slide
//       if (movedBy < -100 && currentIndex < getTotalSlides() - 1) {
//           currentIndex += 1;
//       }
//       if (movedBy > 100 && currentIndex > 0) {
//           currentIndex -= 1;
//       }

//       setPositionByIndex();
//       autoPlayInterval = setInterval(autoPlay, autoPlayDelay); // Restart autoplay
//   }

//   function getPositionX(event) {
//       return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
//   }

//   function animation() {
//       setSliderPosition();
//       if (isDragging) requestAnimationFrame(animation);
//   }

//   function setSliderPosition() {
//       menSlider.style.transform = `translateX(${currentTranslate}px)`;
//       womenSlider.style.transform = `translateX(${currentTranslate}px)`;
//   }

//   function setPositionByIndex() {
//       currentTranslate = currentIndex * -slideWidth; // Move by the width of one card
//       prevTranslate = currentTranslate;
//       setSliderPosition();
//   }

//   function getTotalSlides() {
//       return menSlider.children.length; // Assuming both men and women sliders have equal number of slides
//   }

//   // Auto-play function to move to the next slide
//   function autoPlay() {
//       if (currentIndex < getTotalSlides() - 1) {
//           currentIndex++;
//       } else {
//           currentIndex = 0; // Loop back to the first slide
//       }
//       setPositionByIndex();
//   }

//   // Adjust slide width on window resize for responsiveness
//   window.addEventListener("resize", () => {
//       slideWidth = menSlider.querySelector('div').offsetWidth; // Recalculate card width
//       setPositionByIndex(); // Reset position based on the new width
//   });

//   // For smooth sliding effect
//   [menSlider, womenSlider].forEach(slider => {
//       slider.style.transition = "transform 0.5s ease-out";
//   });
// });



// // blog slider

// const slides = document.querySelectorAll('.Slide');
// let currentSlide = 1;

// function updateSlides() {
//     slides.forEach((slide, index) => {
//         if (index === currentSlide) {
//             slide.classList.add('active');
//         } else {
//             slide.classList.remove('active');
//         }
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     updateSlides();
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     updateSlides();
// }

// updateSlides(); // Initialize the slider

// // Touch events for mobile swipe functionality
// let touchStartX = 0;
// let touchEndX = 0;

// const slider = document.querySelector('.Slider');

// function handleGesture() {
//     if (touchEndX < touchStartX) {
//         nextSlide(); // Swipe left
//     } else if (touchEndX > touchStartX) {
//         prevSlide(); // Swipe right
//     }
// }

// slider.addEventListener('touchstart', (e) => {
//     touchStartX = e.changedTouches[0].screenX;
// });

// slider.addEventListener('touchend', (e) => {
//     touchEndX = e.changedTouches[0].screenX;
//     handleGesture();
// });





// new slider

const menSlider = document.querySelector('.men-slider');
const nextMen = document.getElementById('nextMen');
const prevMen = document.getElementById('prevMen');
let menIndex = 0;

nextMen.addEventListener('click', () => {
  menIndex++;
  if (menIndex >= menSlider.children.length - 1) {
    menIndex = 0; // Reset to the first item if it reaches the end
  }
  menSlider.style.transform = `translateX(${-menIndex * 300}px)`;
});

prevMen.addEventListener('click', () => {
  menIndex--;
  if (menIndex < 0) {
    menIndex = menSlider.children.length - 1; // Go to the last item if it's the start
  }
  menSlider.style.transform = `translateX(${-menIndex * 300}px)`;
});

// Similar logic for the women slider
const womenSlider = document.querySelector('.women-slider');
const nextWomen = document.getElementById('nextWomen');
const prevWomen = document.getElementById('prevWomen');
let womenIndex = 0;

nextWomen.addEventListener('click', () => {
  womenIndex++;
  if (womenIndex >= womenSlider.children.length - 1) {
    womenIndex = 0;
  }
  womenSlider.style.transform = `translateX(${-womenIndex * 300}px)`;
});

prevWomen.addEventListener('click', () => {
  womenIndex--;
  if (womenIndex < 0) {
    womenIndex = womenSlider.children.length - 1;
  }
  womenSlider.style.transform = `translateX(${-womenIndex * 300}px)`;
});
