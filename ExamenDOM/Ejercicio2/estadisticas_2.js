const conteoLetras = new Map();

function mostrarEstadisticas(textareaId){
    // INTRODUCIR CÓDIGO AQUÍ
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
