// let selectedPokemon;
// let pokemonObject;

// const pickPokemon = () => { //Seleccionar un pokemon al azar
//     const randomNumber = Math.floor(Math.random()*151);
//     selectedPokemon = POKEMON.pokemon[randomNumber];
//     return selectedPokemon;
// };

// const getPokemon = () => { //Recibir el nombre del pokemon a buscar
//     selectedPokemon = document.getElementById("searchBar").value;
//     return selectedPokemon;
// }

// const findPokemonName = () => { //Encontrar pokemon por nombre
//     pokemonObject = POKEMON.pokemon.find(pokemonName => pokemonName.name === getPokemon());
//     console.table(pokemonObject);
//     return pokemonObject;
// }

// const findPokemonNum = () => { //Encontrar pokemon por numero
//     pokemonObject = POKEMON.pokemon.find(pokemonId => pokemonId.id == getPokemon());
//     console.table(pokemonObject);
//     return pokemonObject;
// }

// const findPokemon = () => { //Realizar búsqueda
//     findPokemonName();
//     if(pokemonObject == undefined){
//         findPokemonNum();
//         showInfo();
//     } else {
//         showInfo();
//     }
// }

// let showInfo = () => { //Mostrar datos del pokemon
//     document.getElementById("pokeName").innerHTML = pokemonObject.name;
//     document.getElementById("pokeNum").innerHTML = pokemonObject.num;
//     document.getElementById("pokemonPicture").src = pokemonObject.img;
//     document.getElementById("pokeType").innerHTML = pokemonObject.type;
//     //document.getElementById("pokeEvolution").innerHTML = //leer todo el arreglo e imprimir (map? filter?)
//     document.getElementById("pokeDescription").innerHTML = pokemonObject.description + pokemonObject.height + pokemonObject.weight;
//     document.getElementById("pokeWeaknesses").innerHTML = pokemonObject.weaknesses;
//     document.getElementById("frequencySpawn").innerHTML = pokemonObject.avg_spawns;
//     document.getElementById("timeSpawn").innerHTML = pokemonObject.spawn_time;
//     document.getElementById("kmEgg").innerHTML = pokemonObject.egg;
//     document.getElementById("candies").innerHTML = pokemonObject.candy_count;

// }


// // EVENT LISTENERS
// document.getElementById("searchButton").addEventListener("click",findPokemon); //Llamar al botón BUSCAR