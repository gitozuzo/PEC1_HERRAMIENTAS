document.addEventListener("DOMContentLoaded", () => {
  // Verifica si estás en la página donde necesitas AOS
  if (window.location.pathname.includes("detalle.html")) {
    // Inicializa AOS solo en la página detalle.html
    AOS.init();
  }
});
