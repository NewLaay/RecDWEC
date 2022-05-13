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
  inputRespuesta.setAttribute("respuesta", i); //Crear id para la respuesta

  	
 p.innerHTML = preguntas[i][0] + "    ";
  body.appendChild(p);
  p.appendChild(inputRespuesta);
  let aSolucion = document.createElement("a");
  aSolucion.style.margin = "2px";
  aSolucion.setAttribute("solucion",i);
  p.appendChild(aSolucion);
  
}

 let validarRespuesta = document.createElement("input"); //Validar respuesta
  validarRespuesta.type = "button";
  validarRespuesta.value = "Aceptar";
  validarRespuesta.style.marginLeft = "10px";
  body.appendChild(validarRespuesta);

//Añadimos un evento al hacer click: Si no es de tipo boton (si no clicamos en aceptar) no hacemos nada
// Si es de tipo boton, llamamos a la funcion validarRespuesta con la id de la respuesta
document.addEventListener('click',(e)=>{
 if(e.target.type != 'button') return;
 validarRespuestas();
})

//Funcion que validará las respuestas.
function validarRespuestas(){
	for(let i = 0; i<preguntas.length; i++){
  	let respuesta = document.querySelector('[respuesta=' + CSS.escape(i) + "]").value;
    let respuestaCorrecta = preguntas[i][1];
    
    let pRespuesta = document.createElement("p");
    let mensajeRespuesta = `Número de pregunta ${i + 1}: `;
    if (respuesta == respuestaCorrecta){
    	mensajeRespuesta += "¡CORRECTO!";
    }else{
    	mensajeRespuesta += "Lo sentimos, la respuesta correcta es " + respuestaCorrecta;
    }
    pRespuesta.innerHTML = mensajeRespuesta;
    body.appendChild(pRespuesta);
  }
}
