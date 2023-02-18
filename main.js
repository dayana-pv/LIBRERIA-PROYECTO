const libros = [
  {
    id: 1,
    nombre: "Naturaleza Fria",
    autor: "Shepherd, Megan",
    precio: 19,
  },
  {
    id: 2,
    nombre: "Ready Player One",
    autor: "Cline, Ernest",
    precio: 99,
  },
  {
    id: 3,
    nombre: "Una Llanura Tenebrosa",
    autor: "Reeve, Philip",
    precio: 20,
  },
  {
    id: 4,
    nombre: "Después de la Nieve",
    autor: "Crockett, S. D.",
    precio: 30,
  },
];

function registrarUsuario() {
  let usuario = prompt("Ingrese el nombre de su usuario");
  let correo = prompt("Ingrese su correo");
  if (usuario !== "" && correo !== "") {
    alert(`Hola ${usuario}, tu correo "${correo}" ha sido registrado!`);
    mostrarLibros();
    comprarLibro();
  } else {
    alert(
      `Debe registrar su usuario y correo para poder ingresar a la libreria!`
    );
  }
}

function mostrarLibros() {
  let mensaje = `  Bienvenida a la Libreria!!
  Los Libros que tenemos disponibles son: 
  `;
  for (let index = 0; index < libros.length; index++) {
    mensaje += `
        Nombre: ${libros[index].nombre}
        Autor: ${libros[index].autor}
        Precio: S/.${libros[index].precio}
     `;
  }
  alert(mensaje);
}

function comprarLibro() {
  let libro = prompt("Escriba el nombre del libro que desea comprar:");
  if (libro !== "") {
    for (let index = 0; index < libros.length; index++) {
      if (libro === libros[index].nombre) {
        resultado = true;
        break;
      } else {
        resultado = false;
      }
    }
  } else {
    alert("Debe ingresar el nombre del libro");
  }

  if (resultado == true) {
    let libroPedido = prompt(
      "El libro se encuentra disponible, ¿Le gustaria comprarlo?"
    );
    if (libroPedido.toLowerCase() === "si") {
      alert(
        "Se enviara los datos para el proceso de pago a su correo. Gracias por su compra!"
      );
    } else {
      alert("Puede seguir buscando los libros que le gusten");
    }
  } else {
    alert("El libro no se encuentra disponible por el momento");
  }
}

registrarUsuario();
