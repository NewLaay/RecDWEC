function esBisiesto(year){
	//El año es bisiesto si se verifica mínimo uno de los siguientes caso:
	//CASO A: es divisible por 4, pero  no por 100,
	//CASO B: es divisible por 400.
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
  	return true;
  } else {
  	return false;
  }
}

//Codigo reutilizado...
function semanaSanta(year){
let M;
let N;
let dia;
let mes;
let pascua;
if(year>1583 && year<1699) { M=22; N=2; } 
 else if (year>1700 && year<1799) { M=23; N=3; }
 else if (year>1800 && year<1899) { M=23; N=4; }
 else if (year>1900 && year<2099) { M=24; N=5; }
 else if (year>2100 && year<2199) { M=24; N=6; }
 else if (year>2200 && year<2299) { M=25; N=0; } 
 let a = year % 19; 
 let b = year % 4;
 let c = year % 7;
 let d = ((19*a) + M) % 30;
 let e = ((2*b) + (4*c) + (6*d) + N) % 7;
 let f = d + e;
 if (f < 10) { dia = f + 22; mes = 3; } 
 else  {  dia = f - 9;  mes = 4; }
 if(dia==26 && mes==4){ dia = 19; }
 if(dia==25 && mes==4 && d==28 && e==6 && a>10){
  dia = 18;
 }
pascua = new Date(year,mes-1,dia);
return pascua;
}


function diaNavidad(year){
	//el dia de Navidad es el 25 de Diciembre
  //Month va de 0 a 11 (por eso restamos 1)
  let navidad = new Date(year,12-1,25);
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
}
