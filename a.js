// Simple typing effect
const typingText = document.querySelector(".typing");
const words = ["Photographer", "Designer", "Creator"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function typeEffect() {
  currentWord = words[i];
  typingText.textContent = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(typeEffect, 700);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);




// contact.js



function validateForm(event) {
  event.preventDefault(); // Prevents the page from refreshing on submit

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check for empty fields
  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields before submitting.");
    return false;
  }

  // Basic email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("📧 Please enter a valid email address.");
    return false;
  }

  // Success message
  alert("✅ Message sent successfully!");
  
  // Optional: Clear the form after submission
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return true;
}


  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

