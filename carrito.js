let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función que muestra los cursos que estan en el carrito
function mostrarCarrito() {
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

// Función que añade el curso al carrito
function agregarLibro() {
  const listaCursos = document.getElementById("libros");

  listaCursos.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("botonCarrito")) {
      let curso = e.target.parentElement.parentElement;
      let infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector("b").textContent,
      };
      carrito.push(infoCurso);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    mostrarCarrito();
  });
  listaCursos.addEventListener("click", () => {
    Toastify({
      text: "Libro ingresado al carrito!",
      duration: 1000,
    }).showToast();
  });
}

function mostrarToasty() {
  const listaCursos = document.getElementById("libros");

  listaCursos.addEventListener("click", () => {
    Toastify({
      text: "Probando toast!",
      duration: 1000,
    }).showToast();
  });
}

mostrarCarrito();
agregarLibro();
