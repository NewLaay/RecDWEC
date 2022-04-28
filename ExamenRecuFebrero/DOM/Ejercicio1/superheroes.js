document.addEventListener("DOMContentLoaded", function(event) {
    let jsonObj = {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2020,
        "secretBase": "Super tower",
        "active": true,
        "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
            ]
        }
        ]
    };

    // Obtenemos el header. Ponemos el 0 para que no devuelva array y poder rellenarlo luego.
    let header = document.getElementsByTagName("header")[0];

    // crear h1
    let h1 = document.createElement("h1");

    // crear el parrafo
    let p = document.createElement("p");

    // rellenar el texto a h1 y al parrafo
    h1.innerHTML = jsonObj.squadName;
    p.innerHTML = "Hometown: " + jsonObj.homeTown + " // " + "Formed: " + jsonObj.formed;

    //asignar h1 y el parrafo al header obtenido
    header.appendChild(h1);
    header.appendChild(p);

});