var texto;
var clave;
var cifraClave;
var textoCifrado  = "";

texto = prompt("Escribe un texto: ");

do {
    clave = prompt('Escribe la clave (un número entero)');
    if (isNaN(Number(clave))) {
        alert('No has escrito un número');
    }
} while (isNaN(Number(clave)));

clave = parseInt(clave);

for(i = 0; i<texto.length; i++){
	cifraClave = texto.charCodeAt(i) + clave;
	document.write(String.fromCharCode(cifraClave));
}

