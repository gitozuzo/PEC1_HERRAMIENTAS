console.log("1");
document.addEventListener("DOMContentLoaded", () => {
  console.log("2");
  // Verifica si estás en la página donde necesitas AOS
  if (window.location.pathname.includes("detalle")) {
    // Inicializa AOS solo en la página detalle.html
    console.log("3");
    AOS.init();
  }

  console.log("4");
});
