const projetoTitulo = document.querySelectorAll(".projeto");

for (let i = 0; i < projetoTitulo.length; i++) {
  const imagem = projetoTitulo[i].getAttribute("aria-controls");
  const imageHover = document.getElementById(imagem);
  if (window.matchMedia("(min-width: 600px)").matches) {
    projetoTitulo[i].addEventListener("mouseover", function () {
      imageHover.style.display = "inline-block";
    });
    projetoTitulo[i].addEventListener("mouseout", function () {
      imageHover.style.display = "none";
    });
  }
}
