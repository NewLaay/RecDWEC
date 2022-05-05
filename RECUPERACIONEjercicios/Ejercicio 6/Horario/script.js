document.addEventListener("DOMContentLoaded", function(event) {
//Creacion de objeto Date en JS.
var hoy = new Date();

//Determinar la fecha. getDate da el dia, getMonth el mes (del 0 al 11) y luego el año.
var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
//Determinar la hora
var hora = hoy.getHours() + ':' + hoy.getMinutes();

//Condicionales para mostrar en la página web.
var horaEstricta = hoy.getHours();
var diaEstricto = hoy.getDay(); //Devuelve 1-7 en función del dia de la semana
var dia = hoy.getDay();
var mes = hoy.getMonth()+1;

//Asociar mes a nombre
switch(mes){
	case 1: mes = "Enero";
  break;
  case 2 : mes = "Febrero";
  break;
  case 3 : mes = "Marzo";
  break;
  case 4 : mes = "Abril";
  break;
  case 5 : mes = "Mayo";
  break;
  case 6 : mes = "Junio";
  break;
  case 7 : mes = "Julio";
  break;
  case 8 : mes = "Agosto";
  break;
  case 9 : mes = "Septiembre";
  break;
  case 10 : mes = "Octubre";
  break;
  case 11: mes = "Noviembre";
  break;
  case 12 : mes = "Diciembre";
  break;
  }

switch(dia){
	case 1: dia = "Lunes";
  break;
  case 2 : dia = "Martes";
  break;
  case 3 : dia = "Miércoles";
  break;
  case 4 : dia = "Jueves";
  break;
  case 5 : dia = "Viernes";
  break;
}

//CREACION DEL DOM PARA RELLENAR LA PAGINA
let h1 = document.createElement("h1");
let body = document.getElementsByTagName("body")[0];
let p1 = document.createElement("p");
let p2 = document.createElement("p");

if(horaEstricta >= 9 && horaEstricta <= 14 && diaEstricto >= 1 && diaEstricto <= 5){
	h1.innerHTML = "BIENVENIDO!!";
  p1.innerHTML = "Són las " + hora;
  p2.innerHTML = "Hoy es " + dia + ", " + hoy.getDate() + " de " + mes + " de " + hoy.getFullYear();
}else{
	h1.innerHTML = "PÁGINA CERRADA";
}

body.appendChild(h1);
body.appendChild(p1);
body.appendChild(p2);
});