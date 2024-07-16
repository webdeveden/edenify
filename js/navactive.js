document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const navItems = document.querySelectorAll(".nav__item > a");
  const sections = document.querySelectorAll("section[id]");

  // Function to get the header height
  const getHeaderHeight = () => header.offsetHeight;

  // Function to highlight the active nav item
  const highlightNavItem = () => {
    let scrollPos = window.scrollY + getHeaderHeight() + 1; // Offset by header height

    sections.forEach((section) => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.offsetHeight;
      let sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navItems.forEach((navItem) => {
          navItem.classList.remove("active");
          if (navItem.getAttribute("href").includes(sectionId)) {
            navItem.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNavItem);
  window.addEventListener("resize", highlightNavItem); // Recalculate on resize

  // Initial call to highlight the correct nav item on page load
  highlightNavItem();
});
