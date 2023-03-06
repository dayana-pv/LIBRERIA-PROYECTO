//Clase donde estaran los libros
class Libros {
  constructor(id, imagen, nombre, autor, precio) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.autor = autor;
    this.precio = precio;
  }
}
/*
let libro1 = new Libros(
  1,
  "https://m.media-amazon.com/images/I/51f06+ruiBL.jpg",
  "Cuento de hadas",
  "Stephen King ",
  58
);
let libro2 = new Libros(
  2,
  "https://m.media-amazon.com/images/I/51U2m0naGNL.jpg",
  "La biblioteca de los muertos",
  "Glenn Cooper",
  45
);
let libro3 = new Libros(
  3,
  "https://m.media-amazon.com/images/I/51ZgzA2+miL.jpg",
  "La ciudad y los perros",
  "Mario Vargas Llosa",
  52
);
let libro4 = new Libros(
  4,
  "https://m.media-amazon.com/images/I/51x8R0epKTL.jpg",
  "La casa de los espíritus",
  "Isabel Allende",
  39
);

let libros = [libro1, libro2, libro3, libro4];

localStorage.setItem("libros", JSON.stringify(libros));
*/
let librosStorage = JSON.parse(localStorage.getItem("libros"));

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

function buscarLibro() {
  let formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;

    let libroObtenido = librosStorage.filter(
      (libro) => libro.nombre.toLowerCase() === inputs[0].value.toLowerCase()
    );

    if (libroObtenido.length > 0) {
      mostrarLibros(libroObtenido);
    } else {
      let container = document.getElementById("libros");
      container.innerHTML = ``;
    }
  });
}

mostrarLibros(librosStorage);
buscarLibro();
