document.addEventListener("DOMContentLoaded", () => {
  // Verifica si estás en la página donde necesitas AOS
  if (window.location.pathname.includes("detalle.html")) {
    // Inicializa AOS solo en la página detalle.html
    AOS.init();
  }

  if (window.location.pathname.includes("presentacion.html")) {
    // Inicializa AOS solo en la página detalle.html
    const youtubeWrappers = document.querySelectorAll(".youtube-wrapper");

    youtubeWrappers.forEach((wrapper) => {
      const videoId = wrapper.getAttribute("data-video-id");
      const playButton = wrapper.querySelector(".youtube-play-button");

      playButton.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.setAttribute(
          "src",
          `https://www.youtube.com/embed/${videoId}?autoplay=1`
        );
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute("allowfullscreen", "true");
        iframe.setAttribute("title", "YouTube video player");
        iframe.style.width = "100%";
        iframe.style.height = "100%";

        // Elimina la miniatura y el botón, y añade el iframe
        wrapper.innerHTML = "";
        wrapper.appendChild(iframe);
      });
    });
  }
});
