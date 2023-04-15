function mostrarLibros(libros) {
  let container = document.getElementById("libros");
  container.innerHTML = ``;

  libros.forEach((item) => {
    let libro = document.createElement("div");
    libro.innerHTML = `
    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img src=${item.imagen} >
        <div class="px-6 py-4">
          <h4 class="font-bold text-xl mb-2 librosEstilos" >${item.nombre}</h4>
          <p class="text-gray-700 text-base">${item.autor}</p>
          <b>$${item.precio}</b>
          <button class="botonCarrito inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 mt-2 bg-cyan-700 text-base leading-6 font-medium text-white " >Agregar al carrito</button>
        </div>
    </div>
    `;
    container.append(libro);
  });
}

function registrarLibros() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        mostrarLibros(data);
      });
    });
}

function buscarLibro() {
  let formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        let inputs = e.target.children;
        let libroObtenido = data.filter(
          (libro) =>
            libro.nombre.toLowerCase() === inputs[0].value.toLowerCase()
        );

        if (libroObtenido.length > 0) {
          mostrarLibros(libroObtenido);
        } else {
          Swal.fire({
            title: "No se ha encontrado ningun resultado",
            width: 610,
            padding: "3em",
            color: "#374151",
            background: "rgb(244 245 247)",
            confirmButtonColor: "#0E7490",
            backdrop: `
          rgba(22, 78, 99,0.1)
        `,
          });
        }
      });
  });
}

registrarLibros();
buscarLibro();
