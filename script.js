document.documentElement.classList.add("js");

const revealedItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -5% 0px",
  }
);

revealedItems.forEach((item) => revealObserver.observe(item));

const header = document.querySelector(".site-header");

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 24) {
      header.style.background = "rgba(251, 246, 239, 0.9)";
      header.style.borderColor = "rgba(22, 19, 17, 0.12)";
    } else {
      header.style.background = "rgba(251, 246, 239, 0.7)";
      header.style.borderColor = "rgba(22, 19, 17, 0.08)";
    }
  },
  { passive: true }
);
