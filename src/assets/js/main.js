// Mobile nav toggle — fullscreen overlay
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("navbar-menu");

if (navToggle && navMenu) {
  const iconOpen = navToggle.querySelector(".nav-icon-open");
  const iconClose = navToggle.querySelector(".nav-icon-close");

  const openMenu = () => {
    navMenu.classList.remove("nav-closed");
    document.body.style.overflow = "hidden";
    if (iconOpen) iconOpen.classList.add("hidden");
    if (iconClose) iconClose.classList.remove("hidden");
    navToggle.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    navMenu.classList.add("nav-closed");
    document.body.style.overflow = "";
    if (iconOpen) iconOpen.classList.remove("hidden");
    if (iconClose) iconClose.classList.add("hidden");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// Scroll-triggered animations via Intersection Observer
(function () {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) {
    // Show everything immediately if user prefers reduced motion
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("animate-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const delay = parseInt(el.dataset.animDelay || "0", 10);

        setTimeout(() => {
          el.classList.add("animate-visible");
        }, delay);

        observer.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".animate-on-scroll, .md-animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
})();
