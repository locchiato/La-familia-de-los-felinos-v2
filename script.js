const body = document.querySelector("body");

function alternarTema() {
    body.classList.toggle("dark");
}

const contenedor = document.querySelector(".contenedor");

listadoFelinos.forEach((felino) => {
    let template = `
    <div class="item">
      <img src="${felino.imgUrl}">
      <h2>${felino.title}</h2>
      <p>
        ${felino.description}
      </p>
    </div>
    `;

    contenedor.innerHTML += template;
});