class Alumno {
    constructor (nom, ape, edad) {
        this.nombre = nom;
        this.apellidos = ape;
        this.edad = edad;
        this.clase = []
    }

    presentacion() {
        console.log( " Hola, me llamo "+this.nombre+" "+this.apellidos+" y tengo "+this.edad);
    }
}

var ArrayAlumnos = [];

function RegistroAlumno(){

    //Se obtienen los datos del alumno
    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    //Los datos se guardan como propiedades del objeto
    let NuevoAlumno = new Alumno(nom,ape,edad);

    //Se agrega el alumno a la lista de alumnos
    ArrayAlumnos.push(NuevoAlumno);

    //Se limpia el formulario
    document.getElementById("registroAlum").reset();
}

function ImprimirListaAlumnos() {
    // for (let i = 0; i < ArrayAlumnos.length; i++) {
    //     const element = ArrayAlumnos[i];
    //     console.log(element);
    // }

    console.table(ArrayAlumnos);
}

class Clase {
    constructor (nomClase, cal) {
        this.nombreClase = nomClase;
        this.calificacion = cal;
    }
}

var numAlumno = 1;

function RegistroClase() {

        var checkbox1 = document.querySelector("#cbox1");
        var checkLengua = document.querySelector("#cbox1").value;
        if (checkbox1.checked) {
            let cal = prompt("Escriba la calificación del alumno: ");
            let NuevaClase = new Clase (checkLengua,cal);
            ArrayAlumnos[numAlumno].clase = NuevaClase;
        }

        var checkbox2 = document.querySelector("#cbox2");
        var checkMatematicas = document.querySelector("#cbox2").value;
        if (checkbox2.checked) {
            let cal = prompt("Escriba la calificación del alumno: ");
            let NuevaClase = new Clase (checkMatematicas,cal);
            ArrayAlumnos[numAlumno].clase = NuevaClase;
        }

        var checkbox3 = document.querySelector("#cbox3");
        var checkBiologia = document.querySelector("#cbox3").value;
        if (checkbox3.checked) {
            let cal = prompt("Escriba la calificación del alumno: ");
            let NuevaClase = new Clase (checkBiologia,cal);
            ArrayAlumnos[numAlumno].clase = NuevaClase;
        }

        var checkbox4 = document.querySelector("#cbox4");
        var checkGeografia = document.querySelector("#cbox4").value;
        if (checkbox4.checked) {
            let cal = prompt("Escriba la calificación del alumno: ");
            let NuevaClase = new Clase (checkGeografia,cal);
            ArrayAlumnos[numAlumno].clase = NuevaClase;
        }

        var checkbox5 = document.querySelector("#cbox5");
        var checkTecnologia = document.querySelector("#cbox5").value;
        if (checkbox5.checked) {
            let cal = prompt("Escriba la calificación del alumno: ");
            let NuevaClase = new Clase (checkTecnologia,cal);
            ArrayAlumnos[numAlumno].clase = NuevaClase;
        }

        var checkbox6 = document.querySelector("#cbox6");
        var checkArtes = document.querySelector("#cbox6").value;
        if (checkbox6.checked) {
            let cal = prompt("Escriba la calificación del alumno: ");
            let NuevaClase = new Clase (checkArtes,cal);
            ArrayAlumnos[numAlumno].clase = NuevaClase;
        }

        var checkbox7 = document.querySelector("#cbox7");
        var checkIngles = document.querySelector("#cbox7").value;
        if (checkbox7.checked) {
            let cal = prompt("Escriba la calificación del alumno: ");
            let NuevaClase = new Clase (checkIngles,cal);
            ArrayAlumnos[numAlumno].clase = NuevaClase;
        }

        console.table(ArrayAlumnos)
}



