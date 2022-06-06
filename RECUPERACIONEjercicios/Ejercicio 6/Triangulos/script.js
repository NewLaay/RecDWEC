// Declaración de variables
var numCatetos, resultado;

function agregarTriangulos(numCatetos) {

  numCatetos = document.getElementById('catet').value;;
  resultado = document.getElementById("salida");

  trianguloNormal(numCatetos);
  trianguloInvertido(numCatetos);

}

// Imprime en pantalla el primer triángulo con ángulo el recto a la izquierda de la pantalla
function trianguloNormal(numCatetos) {

  for (let i = 1; i <= numCatetos; i++) {
    for (let j = numCatetos - i; j < numCatetos; j++) {
      resultado.innerHTML += "#";
      resultado.style.fontWeight = "bolder";
      resultado.style.color = "#dc143c"
    }
    resultado.innerHTML += "<br>";
  }
}

// Imprime en pantalla el segundo triángulo con ángulo el recto a la derecha de la pantalla
function trianguloInvertido(numCatetos) {

  for (let i = 1; i <= numCatetos; i++) {
    for (let k = i; k < numCatetos; k++) {
      resultado.innerHTML += "&nbsp ";
    }
    for (let j = numCatetos - i; j < numCatetos; j++) {
      resultado.innerHTML += "#";
    }
    resultado.innerHTML += "<br>";
    document.getElementById("boton").disabled = true; // Deshabilita el botón una vez generados los triángulos
  }
}
