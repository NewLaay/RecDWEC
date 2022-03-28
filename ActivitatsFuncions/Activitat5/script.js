const arrayPalabras = [];
const mapa = new Map();
let mapaCons;

var palabra = prompt("Escribe una palabra");
while(palabra != null && palabra != ""){
		arrayPalabras.push(palabra);
		palabra = prompt("Escribe una palabra");
}

function repeticionesMapa(arrayPalabras){
		for(let clave of arrayPalabras){
    		//Añadir repetición si ya tenemos una clave asignada
      if(mapa.get(clave)!=undefined){
      	mapa.set(clave,(mapa.get(clave)+ 1));
      	//Si no está asignada, la asignamos 
      }else{
      	mapa.set(clave,1);
      }
    }
    return mapa;
}

mapaCons = repeticionesMapa(arrayPalabras);

for([palabra,cont] of mapa){
	document.write(`${palabra}, ${cont} repeticiones`);
  document.write("<br>");
}
