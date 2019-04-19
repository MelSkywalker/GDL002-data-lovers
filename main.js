let selectedPokemon;
let pokemonObject;

const pickPokemon = () => { //Seleccionar un pokemon al azar
    const randomNumber = Math.floor(Math.random()*151);
    selectedPokemon = POKEMON.pokemon[randomNumber];
    return selectedPokemon;
};

const getPokemon = () => { //Recibir el nombre del pokemon a buscar
    selectedPokemon = document.getElementById("searchBar").value;
    return selectedPokemon;
}

const findPokemonName = () => { //Encontrar pokemon por nombre
    pokemonObject = POKEMON.pokemon.find(pokemonName => pokemonName.name === getPokemon());
    console.table(pokemonObject);
    return pokemonObject;
}

const findPokemonNum = () => { //Encontrar pokemon por numero
    pokemonObject = POKEMON.pokemon.find(pokemonId => pokemonId.id == getPokemon());
    console.table(pokemonObject);
    return pokemonObject;
}

const findPokemon = () => { //Realizar búsqueda
    findPokemonName();
    if(pokemonObject == undefined){
        findPokemonNum();
        showInfo();
    } else {
        showInfo();
    }
}

let showInfo = () => { //Mostrar datos del pokemon
    document.getElementById("pokeName").innerHTML = pokemonObject.name;
    document.getElementById("pokeNum").innerHTML = pokemonObject.num;
    document.getElementById("pokemonPicture").src = pokemonObject.img;
    document.getElementById("pokeType").innerHTML = pokemonObject.type;
    //document.getElementById("pokeEvolution").innerHTML = //leer todo el arreglo e imprimir (map? filter?)
    document.getElementById("pokeDescription").innerHTML = pokemonObject.description + pokemonObject.height + pokemonObject.weight;
    document.getElementById("pokeWeaknesses").innerHTML = pokemonObject.weaknesses;
    document.getElementById("frequencySpawn").innerHTML = pokemonObject.avg_spawns;
    document.getElementById("timeSpawn").innerHTML = pokemonObject.spawn_time;
    document.getElementById("kmEgg").innerHTML = pokemonObject.egg;
    document.getElementById("candies").innerHTML = pokemonObject.candy_count;

}


// EVENT LISTENERS
document.getElementById("searchButton").addEventListener("click",findPokemon); //Llamar al botón BUSCAR



/*const printPokemon = (itemToPrint) => {
    document.getElementsByClassName("pokemonInfo").innerHTML = itemToPrint;
}*/

//const searchPokemon = POKEMON.pokemon.find(pokemonName => pokemonName.name === selectedPokemon); //Buscar un pokemon por nombre
//console.table(searchPokemon);

/* ESTA FUNCIONABA SOLO CON NOMBRE, AUN SIN NUM OR FAVOR NO LA CAGUES
const findPokemon = () => {
    const pokemonInfo = POKEMON.pokemon.find(pokemonName => pokemonName.name === getPokemonName());
    console.table(pokemonInfo);
    return pokemonInfo;
}
*/

/* ESTA SI FUNCIONA
const getName = () => {
    selectedPokemon = document.getElementById("searchBar").value;
    console.log(selectedPokemon);
    return selectedPokemon;
}

let searchPokemon = POKEMON.pokemon.find(pokemonName => pokemonName.name === selectedPokemon);
console.table(searchPokemon);
*/

//const pokeArray = ["img","num","name","type","next_evolution","prev_evolution","description","weaknesses","height","weight","spawn_chance","spawn_time","egg","candy_count"]

//const showProperties = searchPokemon.forEach();


/*const searchPokemon = POKEMON.pokemon.find(function(pokemonName){
    if(pokemonName.name === selectedPokemon){
        return true;
    }
});
*/

/*
const chosePokemon = (chosenPokemon) => {
    return chosePokemon;
}

console.log(POKEMON.pokemon.find(chosePokemon).type);

*/
//This variable shows the complete array of the pokemon selected
/*
var findPokemon = POKEMON.pokemon.find(function(pokemonName) {
    return pokemonName.name == "Charmander";
}); 
*/



//const findPokemon = POKEMON.pokemon.find(wantedPokemon => wantedPokemon.name == document.getElementById("searchBar").value);
/*
const findPokemon = POKEMON.pokemon.find(function(pokemonName) {
    return pokemonName.name == document.getElementById("searchBar").value;
}
);

document.getElementById('searchButton').addEventListener('click',findPokemon,false);
*/
//POKEMON.pokemon.find(wantedPokemon);

/*
const pokeArray = [num, name, type, description];

const showRandom = () => {
    randomPokem.
};

const showPoke = () => {
    document.getElementsByClassName("pokemonInfo").innerHTML = rpokeArray.forEach(element => {
        
    });
}
*/

/*
const showRandomPokemon = () => {
    pickPokemon();
    document.getElementById("pokemonNumber").innerHTML = "#"+randomPokemon.num;
    document.getElementById("pokemonName").innerHTML = randomPokemon.name;
}


showRandomPokemon();
*/
/*
pickPokemon();
console.log(randomPokemon.name);
console.log(randomPokemon.num);
console.log(randomPokemon.type);
console.log(randomPokemon.weaknesses);
*/


