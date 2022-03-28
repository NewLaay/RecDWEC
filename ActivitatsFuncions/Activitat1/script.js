var numero;
var numMin = 1;
var numMax = 10000;

//Creacion de la función para determinar si es par o impar.
function parImpar(numero){
	if(numero % 2 == 0){
  	document.write(`El número ${numero} es par.`);
    document.write("<br>");
  }else{
  	document.write(`El número ${numero} es impar.`);
    document.write("<br>");
  }
}

//Creacion de la funcion para generar 500 numeros aleatorios y indicar si es par o impar
function numerosAleatorios(){
	for(i = 1; i<=500; i++){
  		numero = parseInt(Math.random()*(10000-1)+1);
      parImpar(numero);
  }
}

numerosAleatorios();