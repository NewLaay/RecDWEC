const arrayAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const mapaAbecedarioUnicode = new Map();

let contador = 0;
for (let i=9398; i<=9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);
    contador++;
}

//CODIGO A RESOLVER
let arrayLetras = [];
let arrayLetrasOrdenadas = [];
let setLetrasSinRepetir = new Set();

let numero = 0;

for (let i = 0; i<20; i++){
	numero = Math.floor(Math.random()*26);
  arrayLetras.push(arrayAbecedario[numero]);
  setLetrasSinRepetir.add(arrayAbecedario[numero]);
}

arrayLetrasOrdenadas = arrayLetras.slice();
arrayLetrasOrdenadas.sort();

document.write(`<h1>20 lletres aleatòries</h1>`);
document.write(`<p>`);
for(let letra of arrayLetras){
	document.write(mapaAbecedarioUnicode.get(letra));
}
document.write(`</p>`);
document.write(`<h1>Lletres ordenades</h1>`);
document.write(`<p>`);
for(let letra of arrayLetrasOrdenadas){
	document.write(mapaAbecedarioUnicode.get(letra));
}
document.write(`</p>`);
document.write(`<h1>${setLetrasSinRepetir.size} lletres sense repetir</h1>`);
document.write(`<p>`);
for(let letra of setLetrasSinRepetir){
	document.write(mapaAbecedarioUnicode.get(letra));
}
document.write(`</p>`);
