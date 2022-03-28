function Punto(coordX,coordY){
    this.x = coordX;
    this.y = coordY;

    this.cambiar = (coordX, coordY) => {
        this.x = coordX;
        this.y = coordY;
    }

    this.copia = () => {
        new Punto(this.x, this.y);
    }

    this.obtenerDistancia = (punto2) => {
        return Math.sqrt(
            Math.pow(Math.abs(this.x - punto2.x),2) +
            Math.pow(Math.abs(this.y - punto2.y),2)
        );
    };

    this.sumar = function(punto2){
        new Punto(this.x + punto2.x, this.y + punto2.y);
    }

    this.toString = function(){
    return (`(${this.x},${this.y})`);
    }

}


var p = new Punto(1,2); 
console.log("p: " + p.toString()) // Salida: (1,2)
var q = new Punto(6,-3);
console.log("q: " + q.toString()); //Salida: (6,-3)

p.cambiar(-5,2);

//var r = p.copia();
//console.log("r: " + r.toString());
//r.x = 9;

//console.log("p: " + p.toString()); // Salida: (-5,2)
//console.log("r: " + r.toString()); // Salida: (9,2)

//var s = p.suma(r);
//console.log("s: " + s.toString()); // Salida: (4,4)

console.log("Distancia entre p y q: " + p.obtenerDistancia(q)); // Salida: 12.08