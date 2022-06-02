/*
Crea una aplicació web que demani contínuament números fins que l'usuari indiqui el número zero.
Al final indicarà la mitjana dels números introduïts.
Si en algun moment no és un número el que escriu l'usuari, se li demana de nou.
Si cancel·la qualsevol quadre de lectura, el programa acaba i s'indica que l'usuari ha cancel·lat i no es mostrarà la mitjana.

*/

var suma = 0;
var contador = 0;

do{
    var numero = prompt("Introduce un número:");
    if(Number(numero) == numero){
        numero = Number(numero);
        suma = suma + numero;
        contador++;
    } else{
        if(numero!=undefined){
            numero = prompt("No has introducido un número. Introducelo:");
        }
    }
}while(numero != 0);

console.log(`La media es ${suma/(contador-1)}`);