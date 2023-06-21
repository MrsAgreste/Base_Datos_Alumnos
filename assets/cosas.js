function ImprimirListaAlumnos() {
  console.table(ArrayAlumnos);
}
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
