var respuesta;
var factorial = 1;

respuesta = prompt("Escribe un n�mero");

if(isNaN(respuesta)){
	console.log("No has escrito un n�mero");
}else{
	 for(var i = 1; i <= respuesta; i++){
		factorial = factorial * i;
	}
	console.log(`El factorial de ${respuesta} es ${factorial}`);
}