function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100; // Reduced slightly for better mobile triggering
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Attach to both scroll and load events
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal); // Critical for Vercel deployments

// Run once immediately
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