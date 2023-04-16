let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función que muestra los libros que estan en el carrito
function mostrarCarrito() {
  let totalCosto = [];
  const agregarLibro = document.getElementById("listarCarrito");
  agregarLibro.innerHTML = ``;

  carrito.forEach((item) => {
    let libroCarrito = document.createElement("tr");
    libroCarrito.innerHTML = `
                  <td class="p-2"
                  >
                    <img src="${item.imagen}" width=50>
                  </td>
                  <td class="p-2 text-sm align-middle">${item.titulo}</td>
                  <td class="p-2 text-sm text-center align-middle">$${item.precio}</td>
                  <td class="p-2 text-sm text-center align-middle">${item.cantidad}</td>
                  <td class="p-2"><i data-id="${item.id}" class="fa-solid fa-circle-xmark fa-lg borrar-libro" style="color: #0e7490;"></i></td>
                `;
    agregarLibro.append(libroCarrito);
    totalCosto.push(item.cantidad * item.precio);
  });

  let totalCostoCarrito = 0;
  totalCosto.forEach(function (item) {
    totalCostoCarrito += item;
  });
  const carritoTotal = document.getElementById("carritoTotal");
  if (carrito.length > 0) {
    carritoTotal.innerHTML = `<span class="my-5 p-10 text-lg"><span class="font-extrabold pr-3">Total: </span>$${totalCostoCarrito}</span>`;
  } else {
    carritoTotal.innerHTML = ``;
  }
}

// Función que añade el libro al carrito
function agregarLibro() {
  const listaCursos = document.getElementById("libros");

  listaCursos.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("botonCarrito")) {
      let curso = e.target.parentElement.parentElement;
      let infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector("span").textContent,
        id: curso.querySelector("button").getAttribute("data-id"),
        cantidad: 1,
      };

      if (carrito.some((curso) => curso.id === infoCurso.id)) {
        carrito.map((curso) => {
          if (curso.id === infoCurso.id) {
            curso.cantidad++;
          }
        });
      } else {
        carrito.push(infoCurso);
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    mostrarCarrito();
  });
  listaCursos.addEventListener("click", () => {
    Toastify({
      text: "Libro ingresado al carrito!",
      duration: 800,
      style: {
        background: "linear-gradient(to left, #00b09b, #0E7490)",
      },
      offset: {
        y: 50,
      },
    }).showToast();
  });
}

// Función que elimina el libro del carrito
function eliminarLibro() {
  let eliminarLibro = document.getElementById("listarCarrito");
  eliminarLibro.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("borrar-libro")) {
      const cursoId = e.target.getAttribute("data-id");

      carrito = carrito.filter((curso) => curso.id !== cursoId);
      localStorage.setItem("carrito", JSON.stringify(carrito));

      mostrarCarrito();
    }
  });
}

mostrarCarrito();
eliminarLibro();
agregarLibro();
