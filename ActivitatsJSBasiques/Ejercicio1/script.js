var respuesta;

respuesta = prompt("Escribe un n�mero");

if (isNaN(respuesta)){
  console.log("No has introducido un n�mero");
}else{
  console.log("Has introducido el n�mero " + respuesta);
}