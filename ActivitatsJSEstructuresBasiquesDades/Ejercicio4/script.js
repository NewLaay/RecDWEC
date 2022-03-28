const MAX_VECES = 1000;
var numMin = 1;
var numMax = 10;
let mapa = new Map();
var numero;

//Creación del mapa con las 10 claves.
for(i = 1; i<=numMax; i++){
		mapa.set(i,0);
}

//Sacar número aleatorio e incluirlo en el Mapa actualizando sus repeticiones
for(i=1; i<=MAX_VECES; i++){
	numero = parseInt(Math.random()*(numMax)+numMin);
  mapa.set(numero, (mapa.get(numero)+1));
}

document.write("Repeticiones de números");
document.write ("<br>");

for(i = 1; i<=numMax; i++){
	document.write(`Número ${i} : ${mapa.get(i)} <br>`);
}