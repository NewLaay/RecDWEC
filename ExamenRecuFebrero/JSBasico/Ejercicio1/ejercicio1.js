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

let squadName = jsonObj.squadName;
console.log(`-----------------------${squadName.toUpperCase()}-------------------------`);
console.log(`--------Ciudad de origen: ${jsonObj.homeTown} // Fecha origen: ${jsonObj.formed}-------`);
for (member of jsonObj.members){
	console.log(`Nombre: ${member.name}`);
  console.log(`Edad: ${member.age}`);
  console.log(`Identidad secreta: ${member.secretIdentity}`);
  console.log(`Poderes: ${member.powers}`);
  console.log("--------------");
}