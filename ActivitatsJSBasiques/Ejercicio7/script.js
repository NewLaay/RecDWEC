var respuesta;
var factorial = 1;

respuesta = prompt("Escribe un número");

if(isNaN(respuesta)){
	console.log("No has escrito un número");
}else{
	 for(var i = 1; i <= respuesta; i++){
		factorial = factorial * i;
	}
	console.log(`El factorial de ${respuesta} es ${factorial}`);
}