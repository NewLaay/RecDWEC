const MAX_VECES = 1000;
var numMin = 1;
var numMax = 10;
let mapa = new Map();
var numero;

//Creaci�n del mapa con las 10 claves.
for(i = 1; i<=numMax; i++){
		mapa.set(i,0);
}

//Sacar n�mero aleatorio e incluirlo en el Mapa actualizando sus repeticiones
for(i=1; i<=MAX_VECES; i++){
	numero = parseInt(Math.random()*(numMax)+numMin);
  mapa.set(numero, (mapa.get(numero)+1));
}

document.write("Repeticiones de n�meros");
document.write ("<br>");

for(i = 1; i<=numMax; i++){
	document.write(`N�mero ${i} : ${mapa.get(i)} <br>`);
}