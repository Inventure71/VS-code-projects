// Initialize AOS for animations on scroll
AOS.init({
    duration: 800,  // Animation duration in ms
    once: true,     // Whether animation should happen only once
  });
  
  // Dynamically update footer year
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
  