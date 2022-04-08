let palabra1 = "";
let palabra2 = "";

palabra1 = prompt("Escribe la primera palabra:");
palabra2 = prompt("Escribe la segunda palabra y te diré si es anagrama de la 1: ");

function comprobarAnagramas(palabra1, palabra2){
		//Si tienen diferente tamaño ya sabemos que son diferentes.
    if(palabra1.length != palabra2.length){
    		return false;
    }
    //Ordenamos las palabras con el metodo sort.
    palabra1.sort;
    palabra2.sort;
    //Comprobar caracter a caracter que coinciden:
    for(let i = 0; i<palabra1.length;i++){
    	if(palabra1[i] != palabra2[i]){
      	return false;
      }
      return true;
    }
}

if (comprobarAnagramas(palabra1,palabra2)){
	console.log("Son anagramas.");
}else{
	console.log("No son anagramas.");
}

//Hay algun error... revisar.