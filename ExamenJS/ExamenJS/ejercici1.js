/**
 * Función que comprueba si se cumple un patrón de los que tiene almacenados. Es necesario indicar que patrón vamos a 
 * escoger para realizar la comprobación con las siguientes etiquetas: 
 *      1. Si es un número de registro: numeroRegistro
 *      2. Si es un nombre: nombre
 *      3. Si es un número de la seguridad social: numeroSS
 *      4. Si es una dirección: direccion
 * @param {*} elementoAComprobar - Elemento que debe cumplir el patrón que se indique.
 * @param {String} tipoComprobacion - Indica que tipo de elemento se quiere comprobar: numeroRegistro, nombre, numeroSS o direccion
 * @returns {boolean} - Devuelve true si se cumple el patrón y false si no se cumple.
 */
const comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    //Comenzar con 3 mayusculas y continuar con 3 numeros
    let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/;
    //Solo letras. Comenzar con una palabra que tenga la 1 mayuscula y el resto en minusculas
    //Continua con un espacio y una o dos letras mayusculas seguidas de un punto.
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚ][a-záéíóú]+ [A-ZÁÉÍÓÚ]{1,2}\.$/;
   //ser un numero entre el 0 y el 999999999
   let patronNumeroSS = /^[0-9]{1,9}$/; 
   /* Comenzar por C/ o Av.
b. El nombre de la vía sólo debe contener letras.
c. El nombre de la vía puede tener mínimo una palabra o más separadas por espacios.
d. La primera palabra del nombre de la vía ha de comenzar por mayúsculas.
e. Debe contener el número del edificio separado del nombre de la vía por una coma.
f. El número del edificio sólo puede contener números.
g. No hay un máximo de número de edificio.
*/
    let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚ][a-záéíóú]+ ?[a-záéíóú]*, [0-9]+$/; 

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
    
    return patrones.get(tipoComprobacion).test(elementoAComprobar);
}
