function Persona(nombre,apellidos,sexo,vivo,edad,direccion,numTelefonos,titulos){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.sexo = sexo;
    this.vivo = vivo;
    this.edad = edad;
    this.direccion = direccion; //ARRAY
    this.numTelefonos = numTelefonos; //ARRAY
    this.titulos = titulos; //ARRAY
}

//PERSONA 1
let direccion1 = {
    "Calle" : "Pasarratos, 18",
    "Población" : "Palma",
    "Provincia" : "Palma",
    "CP" : "07005"
}

let telefonos11 = {
    "Tipo" : "casa",
    "Número" : "888888888"
}

let telefonos12 = {
    "Tipo" : "móvil",
    "Número" : "654654654"
}

let telefonos1 = new Array();
telefonos1.push(telefonos11,telefonos12);

let titulos1 = ["sr.","dr."];

let persona1 = new Persona("Juan","Pérez","masculino","sí",27,direccion1,telefonos1,titulos1);
//console.log(persona1);

//PERSONA 2
let direccion2 = {
    "Calle" : "Luna, 18",
    "Población" : "Inca",
    "Provincia" : "Inca",
    "CP" : "017013"
}

let telefonos2 = {
    "Tipo": "trabajo",
    "Número" : "655655655"
}

let titulos2 = [];

let persona2 = new Persona("Ana","Verdi","femenino","si",44,direccion2,telefonos2,titulos2);
//console.log(persona2);

//ARRAY DE TOTAL DE PERSONAS (FORMATO JSON)
let personas = new Array();
personas.push(persona1,persona2);
//console.log(personas);



//PARTE 2 DEL EJERCICIO - PARTE 2

let body = document.getElementsByTagName("body")[0];

let h1 = document.createElement("h1");
h1.innerHTML = "PARTE 2 DEL EJERCICIO";
body.appendChild(h1);

let select = document.createElement("select");
select.id = "idSelect";
body.appendChild(select);

//Bucle para recorrer el array y mostrar nombre y apellidos
for(let i = 0; i<personas.length; i++){
    let option = document.createElement("option");
    option.innerHTML = personas[i].nombre + " " + personas[i].apellidos; //Mostrar nombre y apellidos de cada opción
    option.value = `value${i}`; //Establecemos un valor a cada opción
    select.appendChild(option);
}

let botonMostrar = document.createElement("button");
botonMostrar.type = "button";
botonMostrar.style.marginLeft = "15px";
botonMostrar.innerHTML = "Mostrar datos";
botonMostrar.onclick = mostrarDatos;
body.appendChild(botonMostrar);

//Funcion mostrarDatos
function mostrarDatos(){
  let selection = document.getElementById("idSelect");
  let valorSeleccionado = selection.value;
  for(let i = 0; i<personas.length; i++){
      //Mostrar los datos de la persona seleccionada
      if(valorSeleccionado == `value${i}`){
         
        let table = document.createElement("table");
        body.appendChild(table);

        let tr1 = document.createElement("tr");
        table.appendChild(tr1);
        let keysSeleccionadas = (Object.keys(personas[i]));
        for( let key of keysSeleccionadas){
            let thKey = document.createElement("th");
            thKey.innerHTML = key;
            tr1.appendChild(thKey);
        }

        let tr2 = document.createElement("tr");
        table.appendChild(tr2);
        let valoresSeleccionados = (Object.values(personas[i]));
        for(let valores of valoresSeleccionados){
            let tdValor = document.createElement("td");
            tdValor.innerHTML = valores;
            tr2.appendChild(tdValor);
        }

      }
  }
}


