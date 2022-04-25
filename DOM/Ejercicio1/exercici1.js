/* 

- Nombre d'enllaços de la pàgina.
- Nombre de paràgrafs de la pàgina.
- Adreça a la qual enllaça el penúltim enllaç.
- Adreça a la qual enllaça el darrer enllaç.
- Número d'enllaços que enllacen a http://pr ueb a
- Nombre d'enllaços de tots els paràgrafs

*/

document.addEventListener("DOMContentLoaded" , function(event){
	//Obtener numero enlaces pagina
  let enlacesPagina = document.getElemenyByTagName("a");
  let numeroEnlacesPagina = enlacesPagina.length;
  
  //Obtener numero parrafos
  let parrafosPagina = document.getElemenyByTagName("p");
  let numeroParrafos = parrafosPagina.length;
  
  //Direccion del penultimo enlace
  let direccionPenultimoEnlace = enlacesPagina[numeroEnlacesPagina - 2].href;
  
  //Direccion del ultimo enlace
  let direccionUltimoEnlace = enlacesPagina[numeroEnlacesPagina - 1].href;
  
  //Numero de enlaces a http://prueba
  let numEnlacesPrueba = 0;
  for (let enlace of enlacesPagina){
  		if (enlace.href == "http://prueba"){
      	numEnlacesPrueba++;
      }
  }
  
  //Numero de enlaces de todos los paragrafos
  let numEnlacesParrafo = new Map();
  listaParrafo = 1;
  for (let parrafo of parrafosPagina){
  	numEnlacesParrafo.set(listaParrafo, parrafo.getElemenyByTagName("a").length);
    listaParrafo++;
  }
  
  let divInfo = document.getElementById('info');
  
  let texto = `Nombre enlaces pagina = ${numeroEnlacesPagina} <br>` +
  							`Nombre de parrafos = ${numeroParrafos} <br>` +
                `Penultimo enlace = ${direccionPenultimoEnlace} <br>` +
                `Último enlace = ${direccionUltimoEnlace} <br>` +
                `Enlaces prueba = ${numEnlacesPrueba} <br>`;
  
  //Concatenamos texto con numero de enlaces de todos los paragrafos
  for (let [numParrafo, numEnlaces] of numEnlacesParrafo){
  		texto = texto + `Num enlaces del parrafo ${numParrafo} = ${numEnlaces} <br>`;
  }
  
  divInfo.innerHTML = texto;
  
});