function agregarTabla(){
	let nFilas = document.getElementById("filas").value;
  let nColumnas = document.getElementById("columnas").value;
  
  let divResultado = document.getElementById("resultado");
  let tabla = document.createElement("table");
  tabla.style.border = "black 2px solid";
  
  var numHTML = 0;
  
  for(let i = 0;i<nFilas; i++){
  	let tr = document.createElement("tr");
    if(i % 2 == 0){
    	tr.style.backgroundColor = "#00ffff";
    }
    for(let j = 0; j<nColumnas; j++){
    	let td = document.createElement("td");
      td.innerHTML = j + 1 + numHTML;
      td.style.textAlign = "center";
      td.style.border = "black 2px solid";
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
    numHTML = numHTML + parseInt(nColumnas);
  }
  divResultado.appendChild(tabla);
 	
  document.getElementById("boton").disabled = true;
}