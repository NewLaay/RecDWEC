const conteoLetras = new Map();

function mostrarEstadisticas(textareaId){
    // INTRODUCIR CÓDIGO AQUÍ
    //txtarea sera el valor que tenga el texto introducido por el usuario.
    let txtarea = document.getElementById("textarea").value;
    //Llamada a la funcion contarLetras en función del texto pasado y creación de numLetras.
    let numLetras = contarLetras(txtarea);
    //Creacion de los datos según las letras.
    let datos = crearDatosEstadisticas(numLetras);
    
    //CREACION DE LA TABLA
    let tBody = document.createElement("tbody");
    let table = document.getElementsByTagName("table")[0];
    table.appendChild(tBody);
    
    for (let i = 0; i<datos.length; i++){
    	let tr = document.createElement("tr");
      tBody.appendChild(tr);
      for(let j = 0; j<datos[i].length;j++){
      	let td = document.createElement("td");
        td.innerHTML = datos[i][j];
        tr.appendChild(td);
      }
    }
}

function contarLetras(texto) {
    let numLetrasTotal = 0;
    let patron = /^[a-zA-Z]$/
    
    for (let letra of texto.toLowerCase()) {
        if (patron.test(letra)){
            if (!conteoLetras.has(letra)) {
                conteoLetras.set(letra, 1);
            } else {
                conteoLetras.set(letra, conteoLetras.get(letra) + 1);
            }
            numLetrasTotal++;
        }
    }

    return numLetrasTotal;
}

function crearDatosEstadisticas(numLetrasTotal){
    let arrayDatos = new Array();
    for (let [letra,conteo] of conteoLetras) {
        arrayDatos.push([letra, conteo, (conteo/numLetrasTotal).toFixed(2)]);
    }

    return arrayDatos;
}


