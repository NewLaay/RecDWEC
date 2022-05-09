let datosPersonales = document.getElementById("divDatosPersonales");
let br = document.createElement("br");
 datosPersonales.appendChild(br);
  let br2 = document.createElement("br");
 datosPersonales.appendChild(br2)
 
function validarDatos(formularioId){
	
  let form = document.getElementById("formulario");
  
  //HACEMOS LA PARTE DE DATOS PERSONALES
  let datosPersonales = document.getElementById("divDatosPersonales");
  let nombre = datosPersonales.getElementsByTagName("input")[0].value;
  let apellidos = datosPersonales.getElementsByTagName("input")[1].value;
  
  let recuadroNombre = datosPersonales.getElementsByTagName("input")[0];
  let recuadroApellidos = datosPersonales.getElementsByTagName("input")[1];
  
  let error = false;
 // Si en algún campo no se ha introducido texto, mostrar un mensaje de error bajo del
//	botón y cambiar el fondo del campo texto erróneo a rojo.
  if (nombre == null || nombre == "" || typeof nombre != 'string' || !isNaN(nombre)){
  	recuadroNombre.style.backgroundColor = 'red';
    error = true;
  }else{
  	recuadroNombre.style.backgroundColor = 'white';
  }
  if (apellidos == null || apellidos == ""  || typeof apellidos != 'string' || !isNaN(apellidos)){
  	recuadroApellidos.style.backgroundColor = 'red';
    error = true;
  }else{
  	recuadroApellidos.style.backgroundColor = 'white';
  }
 // Crear un br debajo de VALIDAR (creamos dos para que quede mejor)
// let br = document.createElement("br");
 //datosPersonales.appendChild(br);
 // let br2 = document.createElement("br");
// datosPersonales.appendChild(br2);
  //Si cualquiera de los dos tiene un error, crear el mensaje de error debajo de VALIDAR
  if(error){
  	let labelError = document.createElement("label");
    labelError.innerHTML = "TIENES UN ERROR!";
    datosPersonales.appendChild(labelError);
  }else{
  	let labelDatos = document.createElement("label");
    labelDatos.innerHTML = nombre + " "  + apellidos;
    datosPersonales.appendChild(labelDatos);
  }
  
  //HACEMOS LA PARTE DE RANGO DE EDAD
  let rangoEdad = document.getElementById("divRangoEdad");

  //Creamos los botones para ver cual es el que esta checkeado.
  let btn1418 = document.getElementById("adolescencia");
  let btn1926 = document.getElementById("juventud");
  let btn2759 = document.getElementById("adultez");
  let btnMayor = document.getElementById("mayor");

  //Creamos 2 br
  let br3 = document.createElement("br");
  rangoEdad.appendChild(br3);

  let mensaje = "";

  if(btn1418.checked){
    mensaje = "Te encuentras en el rango de edad " + btn1418.value;
    rangoEdad.style.backgroundColor = "rgba(238, 130, 238, 0.192)";
  } else if(btn1926.checked){
    mensaje = "Te encuentras en el rango de edad " + btn1926.value;
   rangoEdad.style.backgroundColor = "rgba(238, 130, 238, 0.192)";
  }else if(btn2759.checked){
    mensaje = "Te encuentras en el rango de edad " + btn2759.value;
   rangoEdad.style.backgroundColor = "rgba(238, 130, 238, 0.192)";
  }else if(btnMayor.checked){
    mensaje = "Te encuentras en el rango de edad " + btnMayor.value;
   rangoEdad.style.backgroundColor = "rgba(238, 130, 238, 0.192)";
  }else{
    mensaje = "Falta la Edad!";
    rangoEdad.style.backgroundColor = "red";
  }

  let mensajeEdad = document.createElement("label");
  mensajeEdad.innerHTML = mensaje;
  rangoEdad.appendChild(mensajeEdad);

	
}