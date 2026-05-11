const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");

  navToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");

    navToggle.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});