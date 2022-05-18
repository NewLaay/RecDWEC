//FUNCION BUSCAR PALABRA Y SUBRAYAR LA PRIMERA(lo hago asi para no tener que repetir codigo...)
function buscarPalabra(){
    const btnEscribir = document.getElementById("escribir");
    //Cogemos la palabra que queremos buscar y subrayar.
    const palabra = btnEscribir.value;
    var parrafo1 = document.getElementById("parrafo");

    //Declaramos innerHTML como el contenido que tiene el parrafo.
    var innerHTML = parrafo1.innerHTML;
    //Declaramos index para saber en que posicion del parrafo se encuentra la palabra buscada
    var index = innerHTML.indexOf(palabra);
    //Si no encuentra la posición devuelve un -1, si es mayor que uno quiere decir que existe.
    if(index>=0){
        //innerHTML.substring(0,index) va a mostrar el texto que va desde el inicio hasta llegar al index de la palbra que queremos subrayar
        //innerHTML.substring(index, index+palabra.length) ira desde el index hasta el length de la palabra. Sera lo que vamos a subrayar
        //innerHTML.substring(index + palabra.length) ira desde la primera palabra a todo el texto.
        //Hacemos que la palabra vaya con la clase subrayada segun el HTML y le pasamos al parrafo un nuevo INNERHTML
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+palabra.length) + "</span>" + innerHTML.substring(index + palabra.length);
        parrafo1.innerHTML = innerHTML;
    }
}

//FUNCION MARCAR PALABRAS
function marcarPalabras(){
    const btnEscribir = document.getElementById("escribir");
    const palabra = btnEscribir.value;
    var parrafo1 = document.getElementById("parrafo");

    var innerHTML = parrafo1.innerHTML;
    var index = innerHTML.indexOf(palabra);
    if(index>=0){
        //Con la funcion split dividimos el parrafo entre las diferentes partes en las que se encuentra la palabra para luego unir la palabra con la etiqueta mark
        parrafo1.innerHTML = innerHTML.split(palabra).join('<mark>'+palabra+'</mark>');
    }
    
}

//FUNCION CONTAR PALABRAS : ¿POR QUE NO FUNCIONA SI USO OTRA FUNCION ANTES? -> por que las funciones de antes modifican las clases (higlight y mark) y se modifica el arrayString
function contarPalabras(){
	var parrafo1 = document.getElementById("parrafo").innerHTML;
  const btnEscribir = document.getElementById("escribir");
  const palabra = btnEscribir.value;
 //Hacemos el toString primero ya que si no nos sale problema de que split no es una función.. Y separamos el parrafo por palabras, de forma que nos quede un array de palabras, que luego podemos recorrer para contar las palabras.
 
 var arrayString = parrafo1.toString().split(" ");
 let contadorPalabra = 0;
 for(let i = 0; i<arrayString.length; i++){
 	if(palabra == arrayString[i]){
  	contadorPalabra++;
	 	}
   }
 let parrafoPalabras = document.createElement("p");
 parrafoPalabras.innerHTML = `La palabra ${palabra} sale un total de ${contadorPalabra} veces`;
let h1 = document.getElementsByTagName("h1")[0];
h1.appendChild(parrafoPalabras);
}


//FUNCION ESTADISTICA PALABRAS: recorrer el array de palabras y contar una a una. Si ya existe, añadir uno al contador de esa palabra.
//Añadir las diferentes palabras con un SET
//Como borrar los espacios y las comas?...
function estadisticaPalabras(){
	var parrafo1 = document.getElementById("parrafo").innerHTML;
  var arrayString = parrafo1.toString().split(" ");
  var totalPalabras = arrayString.length;
  let mapaPalabras = new Map();
  
  let h1 = document.getElementsByTagName("h1")[0];
  //CREAR TABLA QUE IRA EN EL DOCUMENTO
  let tabla = document.createElement("table");
  h1.appendChild(tabla);
  let trEncabezado = document.createElement("tr");
  tabla.appendChild(trEncabezado);
  let th1 = document.createElement("th");
  th1.innerHTML = "PALABRA";
  let th2 = document.createElement("th");
  th2.innerHTML = "N.VECES";
  let th3 = document.createElement("th");
  th3.innerHTML = "ESTADÍSTICA";
  trEncabezado.appendChild(th1);
  trEncabezado.appendChild(th2);
  trEncabezado.appendChild(th3);
  
  //ARRAY para asignar a palabra la posicion
  for(let i = 0; i<arrayString.length; i++){
  	let palabra = arrayString[i].toLowerCase();
   //OTRO ARRAY PARA RECORRER EL ARRAY Y COMPROBAR CON LA PALABRA DADA LAS DEMAS, Y INCREMENTAR EL CONTADOR
   	let contadorPalabra = 0;
   	for (let j = 0; j<arrayString.length;j++){
   		if(palabra == arrayString[j]){
    		contadorPalabra++;
    		}
      }
		mapaPalabras.set(palabra,contadorPalabra);
	}
  let claves = mapaPalabras.keys();
  let valores = mapaPalabras.values();
  let numPalabrasTot = mapaPalabras.size;
 for(let estadistica of mapaPalabras){
 	let trEstadistica = document.createElement("tr");
  tabla.appendChild(trEstadistica);
  let th1 = document.createElement("th");
  th1.innerHTML = estadistica[0];
  let th2 = document.createElement("th");
  th2.innerHTML = estadistica[1];
  let th3 = document.createElement("th");
  th3.innerHTML = (estadistica[1])/numPalabrasTot;
  trEstadistica.appendChild(th1);
  trEstadistica.appendChild(th2);
  trEstadistica.appendChild(th3);
 }
}