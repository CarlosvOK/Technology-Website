document.addEventListener('DOMContentLoaded', function () {
    // Configura las animaciones de ScrollReveal para otros elementos
    var sr = ScrollReveal();

    sr.reveal(".menu", {
      duration: 2000,
    });

    sr.reveal(".carousel-inner", {
      duration: 2000,
    });

    sr.reveal(".video", {
      duration: 500,
    });

    sr.reveal("#ilusp", {
      duration: 4000,
      rotate: {
        x: 1,
        y: 180,
      },
    });

    sr.reveal(".product-title", {
      duration: 3000,
    });
    sr.reveal(".price", {
      duration: 3000,
    });

    sr.reveal(".featured__tag-h", {
      duration: 2000,
    });

    sr.reveal(".featured__tag", {
      duration: 2000,
    });

    sr.reveal(".content-box", {
      duration: 2000,
    });

    // Activa las animaciones cuando la página se carga
    ScrollReveal().sync();
});
