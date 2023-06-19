var ArrayAlumnos = [];
var ArregloOrdenado = [];

class Alumno {
  constructor(nom, ape, edad) {
    this.nombre = nom;
    this.apellidos = ape;
    this.edad = edad;
    this.clase = [];
  }

  presentacion() {
    console.log(
      " Hola, me llamo " +
        this.nombre +
        " " +
        this.apellidos +
        " y tengo " +
        this.edad
    );
  }
}

function RegistroAlumno() {
  //Se obtienen los datos del alumno
  let nom = document.getElementById("nombre").value;
  let ape = document.getElementById("apellidos").value;
  let edad = document.getElementById("edad").value;

  //Los datos se guardan como propiedades del objeto
  let NuevoAlumno = new Alumno(nom, ape, edad);

  //Se agrega el alumno a la lista de alumnos
  ArrayAlumnos.push(NuevoAlumno);

  //Se limpia el formulario
  document.getElementById("registroAlum").reset();

  console.table(ArrayAlumnos);
  alert(ArrayAlumnos);
}

// MODAL REGISTRO
let openModalR = document.getElementById("openModalR");
let modal_registro = document.getElementById("modal-registro");
let closeModalR = document.getElementById("closeR");

openModalR.onclick = function () {
  modal_registro.style.visibility = "visible";
};
closeModalR.onclick = function () {
  modal_registro.style.visibility = "hidden";
};

class Clase {
  constructor(nomClase, cal) {
    this.nombreClase = nomClase;
    this.calificacion = cal;
  }
}

//MODAL REGISTRO CLASE
let openModalC = document.getElementById("openModalC");
let modal_clase = document.getElementById("modal-clase");
let closeModalC = document.getElementById("closeC");

openModalC.onclick = function () {
  modal_clase.style.visibility = "visible";
};
closeModalC.onclick = function () {
  modal_clase.style.visibility = "hidden";
};

function obtenerNumA() {
  var numAlumno = prompt("Escriba su numero de alumno");
  numAlumno -= 1;
  return numAlumno;
}

function RegistroClase() {
  
  numAlumno = obtenerNumA();

  var checkbox1 = document.querySelector("#cbox1");
  var checkLengua = document.querySelector("#cbox1").value;
  if (checkbox1.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkLengua, cal);
    ArrayAlumnos[numAlumno].clase.push(NuevaClase);
  }

  var checkbox2 = document.querySelector("#cbox2");
  var checkMatematicas = document.querySelector("#cbox2").value;
  if (checkbox2.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkMatematicas, cal);
    ArrayAlumnos[numAlumno].clase.push(NuevaClase);
  }

  var checkbox3 = document.querySelector("#cbox3");
  var checkBiologia = document.querySelector("#cbox3").value;
  if (checkbox3.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkBiologia, cal);
    ArrayAlumnos[numAlumno].clase.push(NuevaClase);
  }

  var checkbox4 = document.querySelector("#cbox4");
  var checkGeografia = document.querySelector("#cbox4").value;
  if (checkbox4.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkGeografia, cal);
    ArrayAlumnos[numAlumno].clase.push(NuevaClase);
  }

  var checkbox5 = document.querySelector("#cbox5");
  var checkTecnologia = document.querySelector("#cbox5").value;
  if (checkbox5.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkTecnologia, cal);
    ArrayAlumnos[numAlumno].clase.push(NuevaClase);
  }

  var checkbox6 = document.querySelector("#cbox6");
  var checkArtes = document.querySelector("#cbox6").value;
  if (checkbox6.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkArtes, cal);
    ArrayAlumnos[numAlumno].clase.push(NuevaClase);
  }

  var checkbox7 = document.querySelector("#cbox7");
  var checkIngles = document.querySelector("#cbox7").value;
  if (checkbox7.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkIngles, cal);
    ArrayAlumnos[numAlumno].clase.push(NuevaClase);
  }

  var checkbox8 = document.querySelector("#cbox7");
  var checkFilosofia = document.querySelector("#cbox7").value;
  if (checkbox8.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkFilosofia, cal);
    ArrayAlumnos[numAlumno].clase.push(NuevaClase);
  }

  console.table(ArrayAlumnos);
}

// MODAL VER ALUMNOS

function VerAlumnos() {
  var text = "";
  for (var i = 0; i < ArrayAlumnos.length; i++) {
    text +=
      "<li>" +
      ArrayAlumnos[i].nombre +
      " " +
      ArrayAlumnos[i].apellidos +
      "</li>";
  }
  document.querySelector("#listaAlumnos").innerHTML = text;
}

let openModalM = document.getElementById("openModalM");
let modal_matricula = document.getElementById("modal-matricula");
let closeModalM = document.getElementById("closeM");

openModalM.onclick = function () {
  modal_matricula.style.visibility = "visible";
  VerAlumnos();
};
closeModalM.onclick = function () {
  modal_matricula.style.visibility = "hidden";
};

function EscogerAlumnos() {
  var text = "";
  for (var i = 0; i < ArrayAlumnos.length; i++) {
    text +=
      "<p>" +
      ArrayAlumnos[i].nombre +
      " " +
      ArrayAlumnos[i].apellidos +
      "</p>" +
      '<input type="checkbox" id="' +
      ArrayAlumnos[i] +
      '" value="' +
      ArrayAlumnos[i].nombre +
      '">';
  }
  document.querySelector("#segundo").innerHTML = text;
}

// Ehhhh, me enredé y ya no supe como crear esta función...se queda incompleta
function CrearGrupo() {
  EscogerAlumnos();
}

function busquedaBinaria(datos, valor) {
  let izquierda = 0;
  let derecha = datos.length - 1;

  while (izquierda <= derecha) {
    let mitad = Math.floor((izquierda + derecha) / 2);
    let dato = datos[mitad].nombre;

    if (dato === valor) {
      resultado = true;
      return mitad;
    } else if (valor > dato) {
      izquierda = mitad + 1;
    } else {
      derecha = mitad - 1;
    }
  }
  return -1;
}

function BusquedaPorNombre() {
  ArregloOrdenado = ArrayAlumnos.sort((x, y) =>
    x.nombre.localeCompare(y.nombre)
  );

  const nombre = document.getElementById("nombre1").value;
  let datosAlumno = [];

  console.log(busquedaBinaria(ArregloOrdenado, nombre));
  indice = busquedaBinaria(ArregloOrdenado, nombre);

  if (indice == -1) {
    alert("Elemento no encontrado");
  } else {
    datosAlumno = ArregloOrdenado[indice];
    console.table(datosAlumno);
    console.log(indice);
  }
}
