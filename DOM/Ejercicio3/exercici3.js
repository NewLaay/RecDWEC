document.addEventListener("DOMContentLoaded", function(event){
	let textoParrafoNuevo;
  let posicionParrafoNuevo;
  
  do{
  	textoParrafoNuevo = prompt("Escribe el texto del nuevo p�rrafo");
  }while(textoParrafoNuevo == "" || textoParrafoNuevo == null);
  
  do{
  	posicionParrafoNuevo = parseInt(prompt("Escribe la posici�n del nuevo p�rrafo"));
  }while(posicionParrafoNuevo < 1 || posicionParrafoNuevo > 10);
  
 let listaParrafos = document.getElementsByTagName('li');
    
    
    let nodoNuevoParrafo = document.createElement('li');
    nodoNuevoParrafo.setAttribute('style', 'font-weight:bold;');
    // nodoNuevoParrafo.setAttribute('')
    // let nodoNegrita = document.createElement('strong');
    let nodoNegrita = document.createElement('b');
    let nodoTexto = document.createTextNode(textoParrafoNuevo);
    
    /* 1a opci�n negrita 
    nodoNegrita.appendChild(nodoTexto);
    nodoNuevoParrafo.appendChild(nodoNegrita);
    */

    nodoNuevoParrafo.appendChild(nodoTexto);

    let nodoOl = document.getElementsByTagName('ol')[0];
    let nodoADesplazar = listaParrafos[posicionParrafoNuevo - 1];
    nodoOl.insertBefore(nodoNuevoParrafo,nodoADesplazar);
  
});