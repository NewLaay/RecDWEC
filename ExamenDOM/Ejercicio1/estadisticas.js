document.addEventListener("DOMContentLoaded", function(event) {
    let cabecera = ['LETRA','NºVECES','%APARICIONES'];

    // INTRODUCIR CÓDIGO AQUÍ
    let divTabla = document.getElementById("divTabla");
		
    let tabla = document.createElement("table");
    divTabla.appendChild(tabla);
    
    let tr = document.createElement("tr");
    tabla.appendChild(tr);
    
    for (let i = 0; i<cabecera.length; i++){
    	let th = document.createElement("th");
      th.style.textAlign = "center";
      th.style.width = "250px";
      th.innerHTML = cabecera[i];
     	tr.appendChild(th);
    }
    
    
 });