document.getElementById('dibuixarTriangle').addEventListener('click',() => {
	let triangulo = document.getElementById("opciones").value;
  let rdo = "";
	for (let i = 1; i<=triangulo; i++){
  	for(let j = 0; j<i; j++){
    	rdo += '#';
    }
    rdo += "\n";
  }
	
  let rdoInverso = "";
  for (let i = 1; i<=triangulo; i++){
  	for(let j = 0; j < triangulo - 1; j++){
    	rdoInverso += " ";
    }
    for(let k = 0; k<i; k++){
    	rdoInverso += "#";
    }
    rdoInverso += "\n";
  }
  
  //REVISAR EJERCICIO
});
