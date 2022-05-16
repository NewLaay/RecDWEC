function generarLista(){
	let tabla = document.getElementById("tabla");
  
  //Obtenemos el total de etiquetas "td" que tiene nuestro documento para recorrerlas una a una y hacer la lista
  let tdTotal = document.querySelectorAll("td").length;
  let tdS = document.querySelectorAll("td");
  //Creamos la lista
  let lista = document.createElement("ul");
  let resultado = document.getElementById("resultado");
  for (let i = 0; i<tdTotal; i++){
  	let textoTd = tdS[i].innerHTML;
    let li = document.createElement("li");
    let liTexto = document.createTextNode(textoTd);
    li.appendChild(liTexto);
    lista.appendChild(li);
  }
  // Insertamos la lista antes del elemento con ID "resultado" en su primera posición
 resultado.insertBefore(lista, resultado.children[0]);
 document.getElementById('boton').disabled = true
}