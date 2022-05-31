let arrayNumeros = [];
let numero = 0;
//Generar array con 20 numeros aleatorios del 1 al 50
for (let i = 0; i<20; i++){
	let numero = Math.floor(Math.random()*(50-1+1)+1);
  arrayNumeros.push(numero);
}

console.log(arrayNumeros);
//Recorrer el array de numeros generados para rellenar con asteriscos
for(let i = 0; i<arrayNumeros.length; i++){
let respuesta = "";
let numTriangulos = 0;
	for(let j = 0; j<arrayNumeros[i];j++){
  	numTriangulos = arrayNumeros[i];
    respuesta = respuesta + "*";
  }
  console.log(respuesta);
}