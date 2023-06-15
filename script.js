class Alumno {
    constructor (nom, ape, edad) {
        this.nombre = nom;
        this.apellidos = ape;
        this.edad = edad;
    }

    presentacion() {
        console.log( " Hola, me llamo "+this.nombre+" "+this.apellidos+" y tengo "+this.edad);
    }
}

function RegistroAlumno(){
    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    let NuevoAlumno = new Alumno(nom,ape,edad);

    NuevoAlumno.presentacion()
}


