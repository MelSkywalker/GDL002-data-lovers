let selectedPokemon;

const pickPokemon = () => { //Seleccionar un pokemon al azar
    const randomNumber = Math.floor(Math.random()*151);
    selectedPokemon = POKEMON.pokemon[randomNumber];
    return selectedPokemon;
};

const getPokemon = () => { //Recibir el nombre del pokemon a buscar
    selectedPokemon = document.getElementById("searchBar").value;
    return selectedPokemon;
}

const fail = () => {
    alert("Tu búsqueda no coincide con ningún Pokémon, pero aquí tienes un Pokémon al azar :)");
    return pickPokemon();
}

const findPokemon = (data) => { //Encontrar pokemon por nombre
    const pokemonObject = data.find(pokemon => pokemon.name === getPokemon() || pokemon.id == getPokemon());
    console.table(pokemonObject);
    if(pokemonObject == undefined){
        return fail();
    }
        return pokemonObject;
}

const displayInfo = () => { //Mostrar datos del pokemon
    const dataPokemon = findPokemon(window.POKEMON.pokemon)
    document.getElementById("pokeName").innerHTML = dataPokemon.name;
    document.getElementById("pokeNum").innerHTML = dataPokemon.num;
    document.getElementById("pokemonPicture").src = dataPokemon.img;
    document.getElementById("pokeType").innerHTML = dataPokemon.type;
    document.getElementById("pokePreEvolution").innerHTML = findEvolution(dataPokemon,"prev_evolution");
    document.getElementById("pokeEvolution").innerHTML = findEvolution(dataPokemon,"next_evolution");
    document.getElementById("pokeDescription").innerHTML = dataPokemon.description;
    document.getElementById("pokeHeight").innerHTML = dataPokemon.height;
    document.getElementById("pokeWeight").innerHTML = dataPokemon.weight;
    document.getElementById("pokeWeaknesses").innerHTML = dataPokemon.weaknesses;
    document.getElementById("frequencySpawn").innerHTML = dataPokemon.avg_spawns;
    document.getElementById("timeSpawn").innerHTML = dataPokemon.spawn_time;
    document.getElementById("kmEgg").innerHTML = dataPokemon.egg;
    document.getElementById("candies").innerHTML = dataPokemon.candy_count;
}

//Mostrar evoluciones y pre-evoluciones
const findEvolution = (data, evolution) => {
    if(data.hasOwnProperty(evolution)){
        let evolutionArray = [];
        for(let i = 0 ; i < data[evolution].length ; i++){
            evolutionArray.push(data[evolution][i].name);
        }
        return evolutionArray.join();
    } else {
        return "NA";
    }
}

//Función para filtrar
const filterPokemon = (data, whatTofilter, valueToCompare) => {
    return data.filter(pokemon => {
        for(let i = 0 ; i < pokemon[whatTofilter].length ; i++){
            if(pokemon[whatTofilter][i] == valueToCompare){
                return pokemon;
            }
        }
    })             
}
//console.log(filterPokemon(window.POKEMON.pokemon,"type","Normal"));

const orderByNumber = (pokemonList) => {
    return pokemonList;
}

//console.log(orderByNumber(window.POKEMON.pokemon));

//Ordenar por nombre
const orderByName = (pokemonList) => {
    const pokemonArray = [];
    for(let i = 0 ; i < pokemonList.length ; i++){
        pokemonArray.push(pokemonList[i].name);
    }
    return pokemonArray.sort();
}
//console.log(orderByName(window.POKEMON.pokemon));


// EVENT LISTENERS
document.getElementById("searchButton").addEventListener("click",displayInfo); //Llamar al botón BUSCAR


// let pokemonItemTemp = `<div class="pokemonItem">
// <figure>
//   <img src="{pokemon.img}">
// </figure>
// <div class="pokemonNum Item">
//   <span># {pokemon.num}</span>
// </div>
// <div class="pokemonName Item">
//   <span>{pokemon.name}</span>
// </div>
// </div>`
// const replaceItemValues = (pokemon) => {
//     return pokemonItemTemp
//     .replace("{pokemon.img}",pokemon.img)
//     .replace("{pokemon.num}",pokemon.num)
//     .replace("{pokemon.name}",pokemon.name)
// }
// let pokemonItems = document.getElementById("pokemonItems");
// const displayPokemonItem = (pokemon) => {
//     let pokemonHtml = pokemon.map(pokemon => replaceItemValues(pokemon)).join(" ");
//     pokemonItems.innerHTML = pokemonHtml;
// }


//Ordenar por número
// const orderByNumber = (pokemonList) => {
//     //console.log(pokemonList);
//     const pokemonArray = [];
//     for(let i = 0 ; i < pokemonList.length ; i++){
//         pokemonArray.push("#" + pokemonList[i].num + " " + pokemonList[i].name);
//     }
//     return pokemonArray;   
// }

// const findPokemon = () => { //Encontrar pokemon por nombre
//     pokemonObject = POKEMON.pokemon.find(pokemonName => pokemonName.name === getPokemon());
//     console.table(pokemonObject);
//     return pokemonObject;
// }

// const findPokemonNum = () => { //Encontrar pokemon por numero
//     pokemonObject = POKEMON.pokemon.find(pokemonId => pokemonId.id == getPokemon());
//     console.table(pokemonObject);
//     return pokemonObject;
// }

// const displayPokemon = () => { //Realizar búsqueda
//     findPokemon();
//     if(pokemonObject == undefined){
//         findPokemonNum();
//         displayInfo();
//     } else {
//         displayInfo();
//     }
// }



// const filterType = (typeToFilter) => {
//     console.log(POKEMON.pokemon.filter(x => x.type[0] === typeToFilter || x.type[1] === typeToFilter));
// }
// filterType("Fire");

// const filterWeaknesses = (data, weaknesses) => {
//     const arrayWeaknesses = [];
//     for(let i = 0 ; i <= data.length ; i++){
//         for(let j = 0 ; i <= data[i].weaknesses.length ; j++){
//             if(data[i].weaknesses[j] == weaknesses){
//                 arrayWeaknesses.push(data[i]);
//                 break;
//             }
//         }    
//     }
//     console.log(arrayWeaknesses);
    
// }

// filterWeaknesses(POKEMON.pokemon, "Water");

// const filterPokemon = (data, whatTofilter, valueToCompare) => {
    
//     return data.filter(pokemon => pokemon[whatTofilter].forEach(pokemon => {pokemon == valueToCompare}));
// }




//let filteredArray = POKEMON.pokemon.filter(x => x.type[0] == "Poison" || x.type[1] == "Poison");
// console.log(filteredArray);

/*const printPokemon = (itemToPrint) => {
    document.getElementsByClassName("pokemonInfo").innerHTML = itemToPrint;
}*/

// const filterArray = () => {
//     //let searchType = "Poison";
//     for(let i = 0 ; i <= 2 ; i++){
//         let filteredArray = POKEMON.pokemon.filter(x => x.type[i] == "Poison");
//         console.log(filteredArray);
//     }
// }
// filterArray();

//const searchPokemon = POKEMON.pokemon.find(pokemonName => pokemonName.name === selectedPokemon); //Buscar un pokemon por nombre
//console.table(searchPokemon);

/* ESTA FUNCIONABA SOLO CON NOMBRE, AUN SIN NUM OR FAVOR NO LA CAGUES
const displayPokemon = () => {
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
var displayPokemon = POKEMON.pokemon.find(function(pokemonName) {
    return pokemonName.name == "Charmander";
}); 
*/



//const displayPokemon = POKEMON.pokemon.find(wantedPokemon => wantedPokemon.name == document.getElementById("searchBar").value);
/*
const displayPokemon = POKEMON.pokemon.find(function(pokemonName) {
    return pokemonName.name == document.getElementById("searchBar").value;
}
);

document.getElementById('searchButton').addEventListener('click',displayPokemon,false);
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


