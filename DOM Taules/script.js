function crearTablaColores(tablaColores,numColores){
	//Valor de numFilas
  let numFilas = document.getElementById("numColores").value;
  
  //Condicional de que numFilas tiene que ser >1 y <20 y número
  if(!isNaN(numFilas) && numFilas >= 1 && numFilas <= 20){
  	//Tendremos que rellenar la tabla con el número de filas deseado
    let tabla = document.getElementById("tablaColores");
    
    //Nº columnas
    let numColumnas = tabla.rows[0].cells.length;
    
    //Agregar las nuevas filas con la función crearTabla
    tabla.appendChild(crearTabla(numFilas,numColumnas));
    
    //Asignar colores con la función RandomColors
    let colores = randomColors(numFilas);
    
    //Introducimos los datos en la tabla con la función
    introducirDatosTabla(tabla,colores);
  }
  
  //Deshabilitar la celda de numColores
  document.getElementById(numColores).setAttribute("disabled","disabled");
  
  vaciarInputs();
}

function crearTabla(numFila,numColumna){
	//Crear el tbody
  let tBody = document.createElement("tbody");
  
  //Bucle para rellenar el tBody
  for (let i = 0; i<numFila; i++){
  	//Crear tr para la fila
    let tr = document.createElement("tr");
    //Rellenar tr con columnas (bucle)
    for(let j = 0; j<numColumna; j++){
    	let td = document.createElement("td");
      tr.appendChild(td);
    }
    tBody.appendChild(tr);
  }
  return tBody;
}

function randomColors(numFilas){
	//Creacion array de colores aleatorios
  let randomColors = [];
  
  for (let i = 0; i<numFilas; i++){
  	rojo = Math.floor(Math.random()*256);
    verde = Math.floor(Math.random()*256);
    azul = Math.floor(Math.random()*256);
    
    randomColors[i] = [rojo,verde,azul];
  }
  
  return randomColors;
}

function introducirDatosTabla(tabla,datos){
	//Le restamos 1, la primera fila no la contamos
  let filas = tabla.rows.length - 1;
  
  //Recorrer las filas
  for (let i = 0; i<filas; i++){
  	//Celdas que hay en cada fila
    let columnas = tabla.rows[i].cells.length;
   	//Recorrer las columnas
    for (let j = 0; j<columnas; j++){
    	//Rellenar las 3 primeras con número, y la última con el color resultante
      if((columnas - 1) != j){
      	//Primera fila no cuenta
        tabla.rows[i+1].cells[j].innerHTML = datos[i][j];
      }else{
      	tabla.rows[i+1].cells[j].style.backgroundColor = "rgb(" + datos[i][0] + "," + datos[i][1] + "," + datos[i][2] + ")";
      }
    }
  }
}


function permutarFilas(tablaColores,fila1,fila2){

    // Elemento tabla
    let tabla = document.getElementById(tablaColores)

    // Valor input fila1
    let numFila1 = document.getElementById(fila1).value

    // Valor input fila2
    let numFila2 = document.getElementById(fila2).value

    // Numero de filas totales
    let numFilas = tabla.rows.length;

    /* 
        Condicional:
            -Deben ser numeros
            -Numeros diferenteslet color2 = tabla.rows[numFila2]
            -Debe estar creada la tabla
    */
    if (!isNaN(numFila1) && !isNaN(numFila2) && numFila1 != numFila2 && numFilas > 1){
        /* 
            Condicional:
                -Numero1 entre 1 y maximo de filas
                -Numero2 entre 1 y maximo de filas
        */
        if(numFila1 >= 1 && numFila1 < numFilas && numFila2 >= 1 && numFila2 < numFilas){

            // Elemento tbody es 0 si añades un thead a la primera fila sino seria 1
            let tbody = tabla.getElementsByTagName("tbody")[0]

            // Fila 1
            let color1 = tabla.rows[numFila1]

            // Fila 2
            let color2 = tabla.rows[numFila2]

            // Posicion 1
            let pos1 = tbody.childNodes[numFila1]

            // Posicion 2
            let pos2 = tbody.childNodes[numFila2]

            // Insertar fila 1 en posicion 2
            tbody.insertBefore(color1,pos2)

            // Insertar fila 2 en posicion 1
            tbody.insertBefore(color2,pos1)
        }
    }

    vaciarInputs()

}

function cambiarFondo(tablaColores, filaFondo){
	let tabla = document.getElementById(tablaColores);
  
  let fila = document.getElementById(filaFondo).value;
  
  let numFilas = tabla.rows.length;
  
  if(!isNaN(fila) && fila >= 1 && fila <= numFilas && numFilas>= 1){
  	let columna = tabla.rows[fila].cells.length-1;
    
    let estilo = tabla.rows[fila].cells[columna].style.backgroundColor;
    
    document.body.style.backgroundColor = estilo;
  }
  vaciarInputs();
}

function vaciarInputs(){
	inputs=document.getElementsByTagName("INPUT")
    for (let i=0;i<inputs.length;i++){
        if (inputs[i].type=="text"){
            inputs[i].value=null;
        }
    }
}

