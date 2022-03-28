
respuesta = prompt("Escribe el límite de Fibonacci a mostrar");
if(isNaN(respuesta)){
    alert("No has introducido un número");
    respuesta = prompt("Escribe el límite de Fibonacci a mostrar");
}
respuesta = parseInt(respuesta);

function GenerarFibonacci(respuesta){
    var respuesta;
    var arrayFibo = [0,1];
    for(var i = 2; i<respuesta; i++){
        arrayFibo[i] = arrayFibo[i-2] + arrayFibo[i-1];
    }
    document.write(arrayFibo);
}

GenerarFibonacci(respuesta);
