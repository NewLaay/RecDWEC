var nCombinaciones = 50;
var setNumeros = new Set();

document.write("Loter�a primitiva: 50 combinaciones.");
document.write('<br>');

for(i = 1; i <= nCombinaciones; i++){
	document.write("Combinaci�n n�mero " + i + " :");

	do {
        setNumeros.add(parseInt(Math.random()*49) + 1);
    } while (setNumeros.size<6)
    
    for (numero of setNumeros){
    document.write(numero + ',');
    }
    document.write('<br>');
    
    setNumeros.clear();

}
  

