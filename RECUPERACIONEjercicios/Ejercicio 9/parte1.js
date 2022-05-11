var preguntas = [['¿Cuál es la capital de Austria?', 'Viena'], //0,1
									['¿Cuál es la capital de Noruega?', 'Oslo'], // 1,1
									['¿Qué lengua se habla en Madagascar?', 'Malgache'], //2,1
									['¿Cómo se llaman los habitantes de Panamá?','Panameños'] //3,1
							];
              
//Mostrar en el navegador las preguntas junto con un cuadro de texto para introducir las respuestas
let body = document.getElementsByTagName("body")[0];

let h1 = document.createElement("h1");
h1.innerHTML = "Responde a las preguntas."
body.appendChild(h1);
for (let i = 0; i<preguntas.length;i++){
	let p = document.createElement("p");
  p.id = `idPregunta${i}`; //Crear id para la pregunta
  let inputRespuesta = document.createElement("input"); //Cuadro de texto para poner la respuesta
  inputRespuesta.type = "text";
  inputRespuesta.id = `idRespuesta${i}`; //Crear id para la respuesta
  let validarRespuesta = document.createElement("input"); //Validar respuesta
  validarRespuesta.type = "button";
  validarRespuesta.value = "Aceptar";
  validarRespuesta.onclick ="comprobarRespuesta(p.id, inputRespuesta.id)";
  
 p.innerHTML = preguntas[i][0] + "    ";
  body.appendChild(p);
  p.appendChild(inputRespuesta);
  p.appendChild(validarRespuesta);
  
}

function comprobarRespuesta(pregunta,respuesta){
	
}
