let carrito = [];

const listaCursos = document.getElementById("libros");

listaCursos.addEventListener("click", agregarLibro);

// Función que añade el curso al carrito
function agregarLibro(e) {
  e.preventDefault();
  if (e.target.classList.contains("botonCarrito")) {
    let curso = e.target.parentElement.parentElement;
    let infoCurso = {
      imagen: curso.querySelector("img").src,
      titulo: curso.querySelector("h4").textContent,
      precio: curso.querySelector("b").textContent,
    };
    carrito.push(infoCurso);
    console.log(carrito);
    const agregarLibro = document.getElementById("listarCarrito");
    agregarLibro.innerHTML = ``;
    carrito.forEach((item) => {
      let libroCarrito = document.createElement("tr");
      libroCarrito.innerHTML = `
                  <td class="p-2"
                  >
                    <img src="${item.imagen}" width=50>
                  </td>
                  <td class="p-2">${item.titulo}</td>
                  <td class="p-2">${item.precio}</td>
                `;
      agregarLibro.append(libroCarrito);
    });
  }
}
