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

