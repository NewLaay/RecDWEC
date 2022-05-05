document.getElementById("validar").addEventListener('click',() => {
	const respuesta1 = document.getElementById("pregunta1").value;
  const respuesta2 = document.getElementById("pregunta2").value;
  const respuesta3 = document.getElementById("pregunta3").value;
  const respuesta4 = document.getElementById("pregunta4").value;
  
  let resultado = 0;
  if(respuesta1 == 1){
  	resultado = resultado + 1;
  }
  if (respuesta2 == 3){
  	resultado = resultado + 1;
  }
  if(respuesta3 == 3){
  	resultado = resultado + 1;
  }
  if(respuesta4 == 1){
  	resultado = resultado + 1;
  }
  
  let rdoP = document.getElementById("resultadoValidar");
  rdoP.innerHTML = `Tens un ${resultado} sobre 4`;
  
});