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

var ArrayAlumnos = [];

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
}
