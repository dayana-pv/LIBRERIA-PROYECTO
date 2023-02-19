let libros = [
  {
    id: 1,
    imagen: "imagenes/naturalezaFria.jpg",
    nombre: "Naturaleza Fria",
    autor: "Shepherd, Megan",
    precio: 19,
  },
  {
    id: 2,
    imagen: "imagenes/readyPlayerOne.jpg",
    nombre: "Ready Player One",
    autor: "Cline, Ernest",
    precio: 99,
  },
  {
    id: 3,
    imagen: "imagenes/llanuraTenebrosa.jpg",
    nombre: "Una Llanura Tenebrosa",
    autor: "Reeve, Philip",
    precio: 20,
  },
  {
    id: 4,
    imagen: "imagenes/despuesDeNieve.jpg",
    nombre: "Después de la Nieve",
    autor: "Crockett, S. D.",
    precio: 30,
  },
  {
    id: 5,
    imagen: "imagenes/readyPlayerOne2.jpg",
    nombre: "Ready Player One",
    autor: "Cline, Ernest",
    precio: 99,
  },
  {
    id: 6,
    imagen: "imagenes/elExorcista.jpg",
    nombre: "El Exorcista",
    autor: "Blatty, William Peter",
    precio: 59,
  },
  {
    id: 7,
    imagen: "imagenes/laCiudadYLosPerros.jpg",
    nombre: "La Ciudad y los Perros",
    autor: "Vargas Llosa, Mario",
    precio: 49,
  },
  {
    id: 8,
    imagen: "imagenes/mickey7.jpg",
    nombre: "Mickey7",
    autor: "Ashton, Edward",
    precio: 50,
  },
];

function mostrarLibros(libros) {
  let container = document.getElementById("libros");
  container.innerHTML = ``;

  libros.forEach((item) => {
    let libro = document.createElement("div");
    libro.innerHTML = `
    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img class="object-contain h-30 w-full" src=${item.imagen} >
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2" >${item.nombre}</div>
          <p class="text-gray-700 text-base">${item.autor}</p>
          <b>$${item.precio}</b>
        </div>
    </div>
    `;
    container.append(libro);
  });
}

function buscarLibro() {
  let formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;

    let libroObtenido = libros.filter(
      (libro) => libro.nombre.toLowerCase() === inputs[0].value.toLowerCase()
    );

    if (libroObtenido.length > 0) {
      mostrarLibros(libroObtenido);
    } else {
      alert(`El libro "${inputs[0].value}" no se encuentra en el sistema`);
    }
  });
}

mostrarLibros(libros);
buscarLibro();
