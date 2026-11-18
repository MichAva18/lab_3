// Pink Bloom — menú móvil, año dinámico y consultas de productos.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const toast = document.querySelector(".toast");

// Abrir y cerrar el menú en pantallas pequeñas.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

// Cerrar el menú al elegir una sección.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});

// Mostrar el año actual automáticamente.
document.querySelector("#year").textContent = new Date().getFullYear();

// Mensaje breve al pulsar el botón de consulta de cada producto.
let toastTimer;
document.querySelectorAll(".quick-view").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = encodeURIComponent(`Hola Pink Bloom, quiero consultar sobre: ${product}.`);
    window.open(`https://wa.me/50378894286?text=${message}`, "_blank", "noopener");
    toast.textContent = `Abriendo WhatsApp para consultar: ${product}.`;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3200);
  });
});
