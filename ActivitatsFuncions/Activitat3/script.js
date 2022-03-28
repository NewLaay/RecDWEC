var numero;
var min = 1;
var max = 1000;

function esPrimo(numero){
	for(i = 2; i*i<=numero; i++){
  	if(numero % i == 0){
    		return false;
      }
  }
  document.write(numero);
  document.write("<br>");
}

function numsPrimos(){
	document.write("Los primeros 1000 números primos son:")
  document.write("<br>");
	for(let i = 3; i<max; i++){
  	esPrimo(i);
  }
}

numsPrimos();