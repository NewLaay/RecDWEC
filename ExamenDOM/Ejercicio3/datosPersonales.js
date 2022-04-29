function validarDatos(formularioId){
	
  let form = document.getElementById("formulario");
  
  //HACEMOS LA PARTE DE DATOS PERSONALES
  let datosPersonales = document.getElementById("divDatosPersonales");
  let nombre = datosPersonales.getElementsByTagName("input")[0].value;
  let apellidos = datosPersonales.getElementsByTagName("input")[1].value;
  
  let recuadroNombre = datosPersonales.getElementsByTagName("input")[0];
  let recuadroApellidos = datosPersonales.getElementsByTagName("input")[1];
  
  let error = false;
  //Si en algún campo no se ha introducido texto, mostrar un mensaje de error bajo del
	//botón y cambiar el fondo del campo texto erróneo a rojo.
  if (nombre == null || nombre == "" || typeof nombre != 'string' || !isNaN(nombre)){
  	recuadroNombre.style.backgroundColor = 'red';
    error = true;
  }
  if (apellidos == null || apellidos == "" || typeof apellidos != 'string' || !isNaN(apellidos)){
  	recuadroApellidos.style.backgroundColor = 'red';
    error = true;
  }
  //Crear un br debajo de VALIDAR (creamos dos para que quede mejor)
  let br = document.createElement("br");
  datosPersonales.appendChild(br);
  let br2 = document.createElement("br");
  datosPersonales.appendChild(br2);
  //Si cualquiera de los dos tiene un error, crear el mensaje de error debajo de VALIDAR
  if(error){
  	let labelError = document.createElement("label");
    labelError.innerHTML = "TIENES UN ERROR!";
    datosPersonales.appendChild(labelError);
  }else{
  	let labelDatos = document.createElement("label");
    labelDatos.innerHTML = nombre + " " + apellidos;
    datosPersonales.appendChild(labelDatos);
  }
  
  //HACEMOS LA PARTE DE RANGO DE EDAD
  let rangoEdad = document.getElementById(divRangoEdad);
	
}