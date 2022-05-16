var preguntas = [['�Cu�l es la capital de Austria?', 'Viena'], //0,1
									['�Cu�l es la capital de Noruega?', 'Oslo'], // 1,1
									['�Qu� lengua se habla en Madagascar?', 'Malgache'], //2,1
									['�C�mo se llaman los habitantes de Panam�?','Paname�os'] //3,1
							];
              

let body = document.getElementsByTagName("body")[0];

let h1 = document.createElement("h1");
h1.innerHTML = "Responde a las preguntas."
body.appendChild(h1);

//GENERAR UNA PRIMERA PREGUNTA ALEATORIA.
let preguntaRandom1 = document.createElement("p");
let numRandom = Math.floor(Math.random()*4);
preguntaRandom1.innerHTML = preguntas[numRandom][0];
//Hacemos un SET de las preguntas para no repetirlas que nos servir� para no repetir la pregunta cuando cliquemos en siguiente pregunta.
let setPreguntas = new Set();
setPreguntas.add(preguntas[numRandom]);
body.appendChild(preguntaRandom1);

//
let inputRespuesta1 = document.createElement("input");
inputRespuesta1.type = "text";
inputRespuesta1.setAttribute("respuesta" , numRandom);
let validarRespuesta1 = document.createElement("input");
validarRespuesta1.type = "button";
validarRespuesta1.value = "Aceptar";
validarRespuesta1.style.marginLeft = "10px";
validarRespuesta1.id = numRandom;

preguntaRandom1.innerHTML = preguntas[numRandom][0] + "    ";
  body.appendChild(preguntaRandom1);
  preguntaRandom1.appendChild(inputRespuesta1);
  let aSolucion = document.createElement("a");
  aSolucion.style.margin = "2px";
  aSolucion.setAttribute("solucion",numRandom);
  preguntaRandom1.appendChild(aSolucion);
  preguntaRandom1.appendChild(validarRespuesta1);

  //BOTON SIGUIENTE PREGUNTA
  let btnSiguiente = document.createElement("input");
  btnSiguiente.type = "button";
  btnSiguiente.value = "Siguiente pregunta";
  btnSiguiente.disabled = false;
  btnSiguiente.setAttribute("pregunta", numRandom);
  body.appendChild(btnSiguiente);

  //A�adimos event listener a boton
  btnSiguiente.addEventListener('click',(e)=>{
    if(e.target.type != 'button')  return;
    siguientePregunta();
   })

   //A�adimos event listener al boton de validar respuesta
   validarRespuesta1.addEventListener('click',(e)=>{
    if(e.target.type != 'button')  return;
    validarRespuesta(e.target.id);
    
   })

   //Funcion siguiente pregunta, funcionara hasta que se hayan leido todas las preguntas(no se haya pulsado mas de 3 veces el contador)
   function siguientePregunta(){
     let contadorBoton = 0;
     //Si el contador del boton es 3, ha mostrado todas las preguntas y se deshabilita. Si no, mostramos otra pregunta aleatoria que no haya salido antes.
      let numRandom2 = Math.floor(Math.random()*4);
      if(!setPreguntas.has(preguntas[numRandom2]) && contadorBoton<3){
        setPreguntas.add(preguntas[numRandom2]);
        preguntaRandom1.innerHTML = preguntas[numRandom2][0] + "   ";
        inputRespuesta1.setAttribute("respuesta",numRandom2);
        inputRespuesta1.value = "";
        validarRespuesta1.id = numRandom2;
        aSolucion.setAttribute("solucion",numRandom2);
        preguntaRandom1.appendChild(inputRespuesta1);
        preguntaRandom1.appendChild(aSolucion);
        let mensajeSolucion2 = document.querySelector('[solucion]');
        mensajeSolucion2.innerHTML = "";
        preguntaRandom1.appendChild(validarRespuesta1);
        btnSiguiente.setAttribute("pregunta",numRandom2);
        contadorBoton++;
      }
    }
   

   //Funcion que validar� respuesta en funcion del ID seleccionado.
function validarRespuesta(resID){

  //Declaramos respuesta como el valor con QuerySelector que nos da el atributo del ID seleccionado
  //El metodo CSS.escape nos permite devolver el valor de ID 
  //Si recordamos, realizamos un SetAttribute para implantarlo (inputRespuesta.setAttribute("respuesta", i);)
  let respuesta = document.querySelector('[respuesta=' + CSS.escape(resID) + "]").value;
  let mensajeSolucion = document.querySelector('[solucion=' + CSS.escape(resID) + "]");
  //Si la respuesta es correcta, comparamos con el arrayBidimensional en la 2 posicion, que son las respuestas. Creamos el mensaje que queremos.
  
  let mensajeP = "";
  let respuestaCorrecta = preguntas[resID][1];
   if(respuesta == respuestaCorrecta){
     mensajeP = "�CORRECTO!";
    mensajeSolucion.innerHTML = mensajeP;
     return true;
   }else {
     mensajeP = "Lo sentimos, la respuesta correcta es " + respuestaCorrecta + ".";
    mensajeSolucion.innerHTML = mensajeP;
     return false; 
   }
  
  }