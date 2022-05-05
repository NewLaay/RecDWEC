let select = document.getElementById("listaFecha");

//Creacion de fechas dinamicamente
for(let i = 1940; i<=2042; i++){
	let option = document.createElement("option");
  option.innerHTML = i;
  select.appendChild(option);
}



//Funcion muestra info



//Objeto creado en el ejercicio 2
function Anyo(year){
//Propiedad
	this.anyoRef = year;
  
  //Metodos
	this.bisiesto = function(){
  	if ((this.anyoRef % 4 == 0 && this.anyoRef % 100 != 0) || (this.anyoRef % 400 == 0)){
  	return true;
  } else {
  	return false;
  }
  };
  
  this.semanaSanta = function(){
  	let M;
let N;
let dia;
let mes;
let pascua;
if(this.anyoRef>1583 && this.anyoRef<1699) { M=22; N=2; } 
 else if (this.anyoRef>1700 && this.anyoRef<1799) { M=23; N=3; }
 else if (this.anyoRef>1800 && this.anyoRef<1899) { M=23; N=4; }
 else if (this.anyoRef>1900 && this.anyoRef<2099) { M=24; N=5; }
 else if (this.anyoRef>2100 && this.anyoRef<2199) { M=24; N=6; }
 else if (this.anyoRef>2200 && this.anyoRef<2299) { M=25; N=0; } 
 let a = this.anyoRef % 19; 
 let b = this.anyoRef % 4;
 let c = this.anyoRef % 7;
 let d = ((19*a) + M) % 30;
 let e = ((2*b) + (4*c) + (6*d) + N) % 7;
 let f = d + e;
 if (f < 10) { dia = f + 22; mes = 3; } 
 else  {  dia = f - 9;  mes = 4; }
 if(dia==26 && mes==4){ dia = 19; }
 if(dia==25 && mes==4 && d==28 && e==6 && a>10){
  dia = 18;
 }
pascua = new Date(this.anyoRef,mes-1,dia);
return pascua;
  };
  
  this.diaNavidad = function(year){
  		//el dia de Navidad es el 25 de Diciembre
  //Month va de 0 a 11 (por eso restamos 1)
  let navidad = new Date(this.anyoRef,12-1,25);
 	let dia = navidad.getDay();
  switch (dia){
  //Va de 0 a 6 la funcion getDay
  case 1 : dia = "Lunes";
  break;
  case 2 : dia = "Martes";
  break;
  case 3: dia = "Miercoles";
  break;
  case 4: dia = "Jueves";
  break;
  case 5: dia = "Viernes";
  break;
  case 6: dia = "Sabado";
  break;
  case 0: dia = "Domingo";
  break;
  }
 return dia;
  };
  
}