document.addEventListener("DOMContentLoaded", function () {
  function initializeAOS() {
    if (window.innerWidth >= 768) {
      // Example for screens wider than 768px
      AOS.init();
    } else {
      AOS.refreshHard(); // Refresh AOS to remove animations
    }
  }

  initializeAOS(); // Initialize on load

  window.addEventListener("resize", function () {
    initializeAOS(); // Re-initialize on resize
  });
});
