function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();

const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

const textElement = document.getElementById("typewriter");
const professions = [
  "CS Undergraduate",
  "Frontend Developer",
  "UI/UX Enthusiast",
];

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 300;

function typeEffect() {
  const currentProfession = professions[professionIndex];
  
  if (isDeleting) {
    // Remove characters
    textElement.textContent = currentProfession.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // Faster when deleting
  } else {
    // Add characters
    textElement.textContent = currentProfession.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150;
  }

  // If word is complete
  if (!isDeleting && charIndex === currentProfession.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at the end of the word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    professionIndex = (professionIndex + 1) % professions.length;
    typeSpeed = 500; // Pause before starting next word
  }

  setTimeout(typeEffect, typeSpeed);
}

// Start the effect
document.addEventListener("DOMContentLoaded", typeEffect);