let palabra1 = "";
let palabra2 = "";


palabra1 = prompt("Escribe la primera palabra:");
palabra2 = prompt("Escribe la segunda palabra y te diré si es anagrama de la 1: ");

//Creamos array caracter a caracter y ordenamos.
let arrayPal1 = palabra1.split("").sort();
let arrayPal2 = palabra2.split("").sort();

function comprobarAnagramas(palabra1, palabra2){
		//Si tienen diferente tamaño ya sabemos que son diferentes.
    if(palabra1.length != palabra2.length){
    		return false;
    }
    
    //Comprobar caracter a caracter que coinciden:
    for(let i = 0; i<arrayPal1.length;i++){
    	if(arrayPal1[i] != arrayPal2[i]){
      	return false;
      }
      return true;
    }
}

 if (comprobarAnagramas(palabra1,palabra2)){
	console.log("Son anagramas. Comprobación: ");
  console.log(arrayPal1);
  console.log(arrayPal2);
}else{
	console.log("No son anagramas. Comprobación:");
  console.log(arrayPal1);
  console.log(arrayPal2);
} 
