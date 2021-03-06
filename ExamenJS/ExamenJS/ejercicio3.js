function Paciente(numeroRegistro,nombreCompleto,numeroSS,direccion){

	this.comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {

    let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/;
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚ][a-záéíóú]+ [A-ZÁÉÍÓÚ]{1,2}\.$/;
  	let patronNumeroSS = /^[0-9]{1,9}$/; 
    let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚ][a-záéíóú]+ ?[a-záéíóú]*, [0-9]+$/; 

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
    
    return patrones.get(tipoComprobacion).test(elementoAComprobar);
	}
  
	this.modificarNumeroRegistro = function(nuevoNumeroRegistro){
  	if(this.comprobarPatrones(nuevoNumeroRegistro,'numeroRegistro')){
    	this.numeroRegistro = nuevoNumeroRegistro;
    }
  }
  
  this.modificarNombreCompleto = function(nuevoNombreCompleto){
  	if(this.comprobarPatrones(nuevoNombreCompleto,'nombre')){
    	this.nombreCompleto = nuevoNombreCompleto;
    }
  }
  
  this.modificarNumeroSS = function(nuevoNumeroSS){
  	if(this.comprobarPatrones(nuevoNumeroSS,'numeroSS')){
    	this.numeroSS = nuevoNumeroSS;
    }
  }
  
  this.modificarDireccion = function(nuevaDireccion){
  	if(this.comprobarPatrones(nuevaDireccion,'direccion')){
    	this.direccion = nuevaDireccion;
    }
  }
  
   this.imprimirNumeroRegistro = function () {
        return numeroRegistro;
    }

    this.imprimirNombrecompleto = function () {
        return nombreCompleto;
    }

    this.imprimirNumeroSS = function () {
        return numeroSS;
    }

    this.imprimirDireccion = function () {
        return direccion;
    }

    if (this.comprobarPatrones(numeroRegistro, 'numeroRegistro')) {
        this.numeroRegistro = numeroRegistro;
    } else {
        this.numeroRegistro = "";
    }

    if (this.comprobarPatrones(nombreCompleto, 'nombre')) {
        this.nombreCompleto = nombreCompleto;
    } else {
        this.nombreCompleto = "";
    }

    if (this.comprobarPatrones(numeroSS, 'numeroSS')) {
        this.numeroSS = numeroSS;
    } else {
        this.numeroSS = "";
    }

    if (this.comprobarPatrones(direccion, 'direccion')) {
        this.direccion = direccion;
    } else {
        this.direccion = "";
    }
     
}

const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

var numeroRegistroPaciente;
var nombrePaciente;
var numeroSSPaciente;
var direccionPaciente;
const agendaPacientes = new Map();
var contadorPacientes = 0;

// cosas que varian: las variables. 
//Cosas que no varian: los paréntesis del número, la flecha. Si se pusiera una variable nueva, el formato debería mantenerse

// el mapa tiene como clave el número de registro y como valor el nombre, número de ss y la dirección.
// Habrá que separar las 2 cosas y después trocear el valor, guardando cada parte en una variable

for (let[numeroRegistro,datos] of registroPacientes){
		contadorPacientes++;
    numeroRegistroPaciente = numeroRegistro;
     // al hacer split el string se convierte en 3 arrays, la primera posición [0] es el nombre del paciente
    //  datos.split(" (")[0]; == representa la primera parte, el nombre
   nombrePaciente = datos.split(" (")[0];
    // la parte que está entre los paréntesis del split no aparecerá. El array se convierte en uno de 2 valores con la información que queda. Al poner el [0] final solo saca el primero de esos valores, que es el numero
    // el [1] representa la segunda parte, que contiene número [0] y direccion [1]
    numeroSSPaciente = datos.split(" (")[1].split(") -> ")[0];
    // saca la parte que falta (direccion)
    direccionPaciente = datos.split(" (")[1].split(") -> ")[1]

    //poner los pacientes en un set, con un contador y creando objetos paciente
    agendaPacientes.set(contadorPacientes, new Paciente(numeroRegistroPaciente, nombrePaciente, numeroSSPaciente, direccionPaciente));
    
}

console.log(agendaPacientes);
