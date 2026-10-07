document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function isLight() {
  return root.getAttribute("data-theme") === "light";
}

function syncThemeToggle() {
  const light = isLight();
  themeToggle.setAttribute("aria-pressed", String(light));
  themeToggle.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
}

themeToggle.addEventListener("click", () => {
  const nextTheme = isLight() ? "dark" : "light";
  if (nextTheme === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme");
  }
  try {
    localStorage.setItem("theme", nextTheme);
  } catch (e) {}
  syncThemeToggle();
});

syncThemeToggle();
