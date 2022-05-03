document.addEventListener("DOMContentLoaded", function(event) {

let p = document.createElement("p");
let body = document.getElementsByTagName("body")[0];
p.innerHTML = "Introdueix la longitud del catet: "
body.appendChild(p);

let labelLongitud = document.createElement("input");
body.appendChild(labelLongitud);

});