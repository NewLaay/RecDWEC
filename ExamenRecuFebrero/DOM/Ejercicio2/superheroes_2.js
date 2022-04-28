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

    function borrarBotonInsertar() {
        let boton = document.getElementById('insertar');
        boton.parentNode.removeChild(boton);

    }

    function insertarSuperheroes(superheroes) {

        //Cogemos elemento section
        let section = document.getElementById(superheroes);

	 //Creacion de miembros con el JSON
        let members = jsonObj.members;
        console.log(members);

        for (let i = 0; i < members.length; i++) {

            //Segun el CSS -> section article para cada elemento de memmber (deducimos por width 33%)
            let article = document.createElement("article");
	
	//Creacion del h2 con el nombre de cada miembro y lo asignamos a article
            let h2 = document.createElement("h2");
            h2.innerHTML = members[i].name;
            article.appendChild(h2);
           
	//Creacion de los 3 parrafos que dicen las características de los superheroes.
            let p1 = document.createElement("p");
            p1.innerHTML = "Secret Identity: " + members[i].secretIdentity;
            article.appendChild(p1);

            let p2 = document.createElement("p");
            p2.innerHTML = "Age: " + members[i].age;
            article.appendChild(p2);

            let p3 = document.createElement("p");
            p3.innerHTML = "Superpowers: ";
            article.appendChild(p3);

            //Creacion de los poderes para cada miembro
            let poderes = members[i].powers;
            console.log(poderes);

            //Creacion de lista desordenada para cada miembro (lo llamamos como el CSS)
            let ul = document.createElement("ul");

            //Recorrer los poderes de cada miembro y crear el elemento de cada lista.
            for (let j = 0; j< poderes.length; j++) {

                let li = document.createElement("li") ;
                li.innerHTML = poderes[j];
 		//Colgar los li de la lista
                ul.appendChild(li);
		//Colgar la lista del article
                article.appendChild(ul);
            }

            //Añadir cada elemento a section
            section.appendChild(article);
            
        }
 	//Una vez añadidos los superHeroes, borrar el boton de insertar.
        borrarBotonInsertar();

    }