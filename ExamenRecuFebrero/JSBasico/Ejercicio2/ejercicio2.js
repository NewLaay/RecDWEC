let entero;
let tarjeta;
let fecha;
let pedido;

entero = /^[0-9]+$/;

let pruebaEntero1 = entero.test(1); //true
let pruebaEntero2 = entero.test(648798); //true
let pruebaEntero3 = entero.test(-4); //false
let pruebaEntero4 = entero.test(3.5); //false
/*
console.log(pruebaEntero1);
console.log(pruebaEntero2);
console.log(pruebaEntero3);
console.log(pruebaEntero4);
*/

tarjeta = /^(((2131)|(1800))[0-9]{11})|((35)[0-9]{14})$/;

let pruebaTarjeta1 = tarjeta.test(213111111111111); //true
let pruebaTarjeta2 = tarjeta.test(180000000000000); //true
let pruebaTarjeta3 = tarjeta.test(3588888888888888); //true
let pruebaTarjeta4 = tarjeta.test(18000); //false
let pruebaTarjeta5 = tarjeta.test(354444444444444); //false
let pruebaTarjeta6 = tarjeta.test(5648759856321456); //false
let pruebaTarjeta7 = tarjeta.test(350000000000000); //false
/*
console.log(pruebaTarjeta1);
console.log(pruebaTarjeta2);
console.log(pruebaTarjeta3);
console.log(pruebaTarjeta4);
console.log(pruebaTarjeta5);
console.log(pruebaTarjeta6);
console.log(pruebaTarjeta7);
*/

fecha = /^((0[1-9])|([12][0-9])|(3[01]))(\/)((0[1-9])|(1[0-2]))(\/)([0-9]{4})$/;

let pruebaFecha1 = fecha.test("25/11/2005"); //true
let pruebaFecha2 = fecha.test("01/13/1994"); //false
let pruebaFecha3 = fecha.test("32/01/0989"); //false
let pruebaFecha4 = fecha.test("01/01/2001"); //true
/*
console.log(pruebaFecha1);
console.log(pruebaFecha2);
console.log(pruebaFecha3);
console.log(pruebaFecha4);
*/

pedido = /^PO((\s[0-9]{2}\-[0-9]{4})|(\-[0-9]{2}\-[0-9]{4})|(#\s[0-9]{2}\s[0-9]{4})|(#[0-9]{2}\-[0-9]{4})|(\s[0-9]{6}))$/;

let pruebaPedido1 = pedido.test("PO 123456"); //true
let pruebaPedido2 = pedido.test("PO123456T"); //false
let pruebaPedido3 = pedido.test("PO#12-3456"); //true
let pruebaPedido4 = pedido.test("PO 12-3456"); //true
let pruebaPedido5 = pedido.test("P123456"); //false
let pruebaPedido6 = pedido.test("PO-12-3456"); //true
/*
console.log(pruebaPedido1);
console.log(pruebaPedido2);
console.log(pruebaPedido3);
console.log(pruebaPedido4);
console.log(pruebaPedido5);
console.log(pruebaPedido6);
*/
