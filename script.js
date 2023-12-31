document.onload = chargingLocalStorage();
var ArrayAlumnos;

function chargingLocalStorage() {
  if (obtenerArrayDeLocalStorage() == null) {
    ArrayAlumnos = [];
  } else {
    ArrayAlumnos = obtenerArrayDeLocalStorage();
  }
}

var ArregloOrdenado = [];
var header = document.querySelector(".header-area");

class Alumno {
  constructor(nom, ape, edad) {
    this.nombre = nom;
    this.apellidos = ape;
    this.edad = edad;
    this.clase = [];
    this.promedio = 0;
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

  guardarArrayEnLocalStorage(ArrayAlumnos)

  //Se limpia el formulario
  document.getElementById("registroAlum").reset();

  // alert(ArrayAlumnos);
}

//Guardado en localStorage
function guardarArrayEnLocalStorage(array) {
  let arraySerializado = JSON.stringify(array);
  localStorage.setItem('Alumnos', arraySerializado);
  console.log(arraySerializado);
}

//Recuperar del localStorage
function obtenerArrayDeLocalStorage() {
  let arraySerializado = localStorage.getItem('Alumnos');
  if (arraySerializado) {
    return JSON.parse(arraySerializado);
  }
  return [];
}

// MODAL REGISTRO
let openModalR = document.getElementById("openModalR");
let modal_registro = document.getElementById("modal-registro");
let closeModalR = document.getElementById("closeR");

openModalR.onclick = function () {
  modal_registro.style.visibility = "visible";
  header.style.visibility = "hidden";
};
closeModalR.onclick = function () {
  modal_registro.style.visibility = "hidden";
  header.style.visibility = "visible";
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
  header.style.visibility = "hidden";
};
closeModalC.onclick = function () {
  modal_clase.style.visibility = "hidden";
  header.style.visibility = "visible";
};

function obtenerNomA() {
  var nombre = prompt("Escriba el nombre del estudiante: ");
  return nombre;
}
function obtenerPromedio(indice) {
  let datosAlumno = ArregloOrdenado[indice].clase;
  let sumaCal = 0;
  let promedio = 0;
  let j = BusquedaSecuencial(ArregloOrdenado[indice].nombre, ArregloOrdenado[indice].apellidos);

  for (i = 0; i < datosAlumno.length; i++) {
    let cal = Number(datosAlumno[i].calificacion);
    sumaCal += cal;
  }
  promedio = sumaCal / datosAlumno.length;
  console.log(promedio)
  //ArregloOrdenado[indice].promedio = promedio;
  ArrayAlumnos[j].promedio = promedio;
}

function RegistroClase() {
  ArregloOrdenado = ArrayAlumnos.sort((x, y) =>
    x.nombre.localeCompare(y.nombre)
  );

  nombre = obtenerNomA();

  const index = busquedaBinariaN(ArregloOrdenado, nombre);
  const i = BusquedaSecuencial(ArregloOrdenado[index].nombre, ArregloOrdenado[index].apellidos)

  var checkbox1 = document.querySelector("#cbox1");
  var checkLengua = document.querySelector("#cbox1").value;
  if (checkbox1.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkLengua, cal);
    //ArregloOrdenado[index].clase.push(NuevaClase);
    ArrayAlumnos[i].clase.push(NuevaClase);
  }

  var checkbox2 = document.querySelector("#cbox2");
  var checkMatematicas = document.querySelector("#cbox2").value;
  if (checkbox2.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkMatematicas, cal);
    //ArregloOrdenado[index].clase.push(NuevaClase);
    ArrayAlumnos[i].clase.push(NuevaClase);
  }

  var checkbox3 = document.querySelector("#cbox3");
  var checkBiologia = document.querySelector("#cbox3").value;
  if (checkbox3.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkBiologia, cal);
    //ArregloOrdenado[index].clase.push(NuevaClase);
    ArrayAlumnos[i].clase.push(NuevaClase);
  }

  var checkbox4 = document.querySelector("#cbox4");
  var checkGeografia = document.querySelector("#cbox4").value;
  if (checkbox4.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkGeografia, cal);
    //ArregloOrdenado[index].clase.push(NuevaClase);
    ArrayAlumnos[i].clase.push(NuevaClase);
  }

  var checkbox5 = document.querySelector("#cbox5");
  var checkTecnologia = document.querySelector("#cbox5").value;
  if (checkbox5.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkTecnologia, cal);
   // ArregloOrdenado[index].clase.push(NuevaClase);
    ArrayAlumnos[i].clase.push(NuevaClase);
  }

  var checkbox6 = document.querySelector("#cbox6");
  var checkArtes = document.querySelector("#cbox6").value;
  if (checkbox6.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkArtes, cal);
    //ArregloOrdenado[index].clase.push(NuevaClase);
    ArrayAlumnos[i].clase.push(NuevaClase);
  }

  var checkbox7 = document.querySelector("#cbox7");
  var checkIngles = document.querySelector("#cbox7").value;
  if (checkbox7.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkIngles, cal);
    //ArregloOrdenado[index].clase.push(NuevaClase);
    ArrayAlumnos[i].clase.push(NuevaClase);
  }

  var checkbox8 = document.querySelector("#cbox8");
  var checkFilosofia = document.querySelector("#cbox8").value;
  if (checkbox8.checked) {
    let cal = prompt("Escriba la calificación del alumno: ");
    let NuevaClase = new Clase(checkFilosofia, cal);
    //ArregloOrdenado[index].clase.push(NuevaClase);    
    ArrayAlumnos[i].clase.push(NuevaClase);
  } 

  obtenerPromedio(index);
  guardarArrayEnLocalStorage(ArrayAlumnos);
}

function BusquedaSecuencial(nom, ape){
  let aux = ArregloOrdenado
  for(let i = 0; i<aux.length; i++){
    if(aux[i].nombre == nom && aux[i].apellidos == ape){
      return i;
    }
  }
}

// MODAL VER ALUMNOS Y ORDENAR POR CALIFIACIÓN
function ordenarAscendente() {
  ArregloOrdenado = ArrayAlumnos.sort(function (x, y) {
    return x.promedio - y.promedio;
  });
}
function ordenarDescendente() {
  ArregloOrdenado = ArrayAlumnos.sort(function (x, y) {
    return y.promedio - x.promedio;
  });
}

function VerAlumnos(arreglo) {
  var text = "";
  let array = arreglo;
  for (var i = 0; i < array.length; i++) {
    text += "<li>" + array[i].nombre + " " + array[i].apellidos + "</li>";
  }
  document.querySelector("#listaAlumnos").innerHTML = text;
}

let checkAscendente = document.querySelector("#ascendente");
let checkDescendente = document.querySelector("#descendente");

checkAscendente.onclick = function () {
  if (checkAscendente.checked) {
    checkDescendente.checked = false;
    document.querySelector("#listaAlumnos").innerHTML = "";
    ordenarAscendente();
    VerAlumnos(ArregloOrdenado);
  }
};
checkDescendente.onclick = function () {
  if (checkDescendente.checked) {
    checkAscendente.checked = false;
    document.querySelector("#listaAlumnos").innerHTML = "";
    ordenarDescendente();
    VerAlumnos(ArregloOrdenado);
  }
};

let openModalM = document.getElementById("openModalM");
let modal_matricula = document.getElementById("modal-matricula");
let closeModalM = document.getElementById("closeM");

openModalM.onclick = function () {
  modal_matricula.style.visibility = "visible";
  header.style.visibility = "hidden";
  VerAlumnos(ArrayAlumnos);
};
closeModalM.onclick = function () {
  modal_matricula.style.visibility = "hidden";
  header.style.visibility = "visible";
};


// MODAL BUSQUEDA ALUMNOS

function busquedaBinariaN(datos, valor) {
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

function busquedaBinariaA(datos, valor) {
  let izquierda = 0;
  let derecha = datos.length - 1;

  while (izquierda <= derecha) {
    let mitad = Math.floor((izquierda + derecha) / 2);
    let dato = datos[mitad].apellidos;    

    if (dato === valor) {
      resultado = true;
      return mitad;
    } else if (valor > dato) {
      izquierda = mitad + 1;
    } else {
      derecha = mitad - 1;
    }
    console.log(datos[mitad].apellidos)
  }
  console.log(ArrayAlumnos)
  return -1;
}

function imprimirDatosAlumno(indice) {
  var text = "";
  var title1 = "";
  var title2 = "";
  var clases = "";
  for (var i = 0; i < ArregloOrdenado.length; i++) {
    if (i === indice) {
      title1 = "Información general: ";
      text =
        "<li>" +
        "Nombre: " +
        ArregloOrdenado[i].nombre +
        "</li>" +
        "<li>" +
        "Apellidos: " +
        ArregloOrdenado[i].apellidos +
        "</li>" +
        "<li>" +
        "Edad: " +
        ArregloOrdenado[i].edad +
        " años " +
        "</li>" +
        "<li>" +
        "Promedio: " +
        ArregloOrdenado[i].promedio +
        "</li>";
      for (let j = 0; j < ArregloOrdenado[i].clase.length; j++) {
        title2 = "Clases actuales: ";
        clases +=
          "<li>" +
          "Materia: " +
          ArregloOrdenado[i].clase[j].nombreClase +
          "</li>" +
          "<li>" +
          "Calificación Final: " +
          ArregloOrdenado[i].clase[j].calificacion +
          "</li>";
      }
    }
  }
  document.querySelector("#title1").innerHTML = title1;
  document.querySelector("#datosAlumno").innerHTML = text;
  document.querySelector("#title2").innerHTML = title2;
  document.querySelector("#clasesA").innerHTML = clases;
}

function BusquedaAlumnos() {
  ArregloOrdenado = ArrayAlumnos.sort((x, y) =>
    x.nombre.localeCompare(y.nombre)
  );

  const valor = document.getElementById("nombre1").value;

  const index1 = busquedaBinariaN(ArregloOrdenado, valor);
  const index2 = busquedaBinariaA(ArregloOrdenado, valor);

  if (index1 == -1 && index2 == -1) {
    alert("Elemento no encontrado");
  } else if (index1 != -1) {
    obtenerPromedio(index1);
    imprimirDatosAlumno(index1);
  } else if (index2 != -1) {
    obtenerPromedio(index2);
    imprimirDatosAlumno(index2);
  }
}

let openModalB = document.getElementById("openModalB");
let modal_busqueda = document.getElementById("modal-busqueda");
let closeModalB = document.getElementById("closeB");

openModalB.onclick = function () {
  modal_busqueda.style.visibility = "visible";
  header.style.visibility = "hidden"; 
};
closeModalB.onclick = function () {
  modal_busqueda.style.visibility = "hidden";
  header.style.visibility = "visible";
};

//MODAL PARA CREAR GRUPOS... 

function obtenerLetraG() {
  var letraGrupo = prompt("Escriba la letra del grupo que desea inscribirse: ");
  return letraGrupo;
}

function ObtenerDatosGrupo() {
  let nombreA = obtenerNomA();
  let letraG = obtenerLetraG();
  
}



let openModalG = document.getElementById("openModalG");
let modal_grupos = document.getElementById("modal-grupos");
let closeModalG = document.getElementById("closeG");

openModalG.onclick = function () {
  modal_grupos.style.visibility = "visible";
  header.style.visibility = "hidden";
};
closeModalG.onclick = function () {
  modal_grupos.style.visibility = "hidden";
  header.style.visibility = "visible";
};

