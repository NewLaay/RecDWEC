var respuesta;

respuesta = prompt("Escribe un número");

if (isNaN(respuesta)){
  console.log("No has introducido un número");
}else{
  console.log("Has introducido el número " + respuesta);
}