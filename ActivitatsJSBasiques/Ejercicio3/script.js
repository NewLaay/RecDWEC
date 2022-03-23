//Definición de variables a usar
var nombre;
var apellidos;
var edad;
var salario;
var salarioRecal;

//Incrementos del salario
var salario3 = 1.03;
var salario10 = 1.1;
var salario15 = 1.15;
var sal1100 = 1100;

//Preguntamos datos
nombre = prompt("Nombre:");
apellidos = prompt("Apellidos:");
edad = prompt("Edad:");
salario = prompt("Salario:");

//Recálculo de salario
if(salario > 2000){
	salarioRecal = salario;
}else if(salario > 1000 && salario < 2000){
	if(edad > 45){
		salarioRecal = salario*salario3;
	}else{
		salarioRecal = salario*salario10;
	}
}else if(salario < 1000){
	if(edad<30){
		salarioRecal = sal1100;
	}else if(edad>30 && edad<45){
		salarioRecal = salario*salario3;
	}else if(edad>45){
		salarioRecal = salario*salario15;
	}	
}

console.log(`Nombre: ${nombre} , Apellidos: ${apellidos} , Edad: ${edad} , Salario: ${salarioRecal} `);