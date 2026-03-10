/* photography.js */

document.addEventListener("DOMContentLoaded", () => {
  // Get the lightbox elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-lightbox");

  // Get all images inside the gallery
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Loop through images and add click event
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src; // Sets the lightbox image to the clicked image's source
    });
  });

  // Close the lightbox when clicking the 'X'
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close the lightbox when clicking anywhere outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});

