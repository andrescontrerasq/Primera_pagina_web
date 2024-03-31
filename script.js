//alert("Hola este es mi Javascript");

//let nombre = "Andres";

//var nombre1 = "Andres";

//const nombre2 = "Andres";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);


//SELECCIONAR ELEMENTOS

//let contenidoTitulo = "Nombre";
//let titulo = document.querySelector(".logo");
//titulo.innerHTML = contenidoTitulo;
//console.log(titulo);

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);
//if(textoTitulo === "Nombre") {
  //titulo.innerHTML = "Otro";
//} else {
  //console.log("no se cumple");
//}

//Funciones

//let carrera = "Ingeniero Industrial";

//let parrafo = document.querySelector(".parrafo2")

//function cambiarTexto(carrera){
    //let contenido = `${carrera} (PUCP) con experiencia en áreas de producción, logística y comercial. Capacidad para resolver problemas de manera creativa y trabajar eficientemente en equipos multidisciplinarios. Comprometido con la excelencia y el logro de resultados sobresalientes. Poseo conocimientos teóricos y prácticos necesarios para el diseño, mejora de procesos y gestión de la cadena de suministros (Supply chain).`;
    //return contenido;};

//parrafo.innerText = cambiarTexto(carrera);

//Barra de navegacion

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
