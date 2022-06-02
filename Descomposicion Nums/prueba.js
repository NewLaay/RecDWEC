let numero  = parseInt(prompt("Escribe un número"));

let c500 = 0, c200 = 0, c100 = 0, c50 = 0, c20 = 0, c10 = 0, c5 = 0, c2 = 0, c1= 0;


while(numero>0){
    if(numero>=500){
        c500++;
        numero = numero - 500;
        continue;
    }else if(numero>=200){
        c200++;
        numero = numero - 200;
        continue;
    }
    else if(numero>=100){
        c100++;
        numero = numero - 100;
        continue;
    }else if(numero>=50){
        c50++;
        numero = numero - 50;
        continue;
    }else if(numero>=20){
        c20++;
        numero = numero - 20;
        continue;
    }else if(numero>=10){
        c10++;
        numero = numero - 10;
        continue;
    }else if(numero>=5){
        c5++;
        numero = numero - 5;
        continue;
    }else if(numero>=2){
        c2++;
        numero = numero - 2;
        continue;
    }else if(numero>=1){
        c1++;
        numero = numero - 1;
        continue;
    }
}

console.log(`Billetes de 500 : ${c500}`);
console.log(`Billetes de 200 : ${c200}`);
console.log(`Billetes de 100 : ${c100}`);
console.log(`Billetes de 50 : ${c50}`);
console.log(`Billetes de 20 : ${c20}`);
console.log(`Billetes de 10 : ${c10}`);
console.log(`Billetes de 5 : ${c5}`);
console.log(`Monedas de 2 : ${c2}`);
console.log(`Monedas de 1 : ${c1}`);
