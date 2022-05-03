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

var paciente1 = new Paciente("AAA024", "Fernández M.", "(321790059)", "C/Recoletos, 50");
console.log(paciente1.imprimirDireccion());

var paciente2 = new Paciente("BCD827", "Ruíz P.", "(100973253)", "C/Esquerdo izquierdo, 103");
//console.log(paciente2);

var paciente3 = new Paciente("YUN835", "Benítez E.", "(154811767)", "Av.Argentina, 5");
//console.log(paciente3);