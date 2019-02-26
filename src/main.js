// let selectedPokemon;
// let type;
// let typeValue;
let globalPokemon;
//Seleccionar un pokemon al azar
const pickPokemon = () => { 
    const randomNumber = Math.floor(Math.random()*151);
    let selectedPokemon = POKEMON.pokemon[randomNumber];
    return selectedPokemon;
};

//Recibir el nombre del pokemon a buscar
const getPokemon = () => { 
    let selectedPokemon = document.getElementById("searchBar").value;
    document.getElementById("divCPcalc").innerHTML = "";
    return selectedPokemon;
}

//Mostrar alert y Pokémon random si se introduce un número o nombre no válido
const fail = () => {
    alert("Tu búsqueda no coincide con ningún Pokémon, pero aquí tienes un Pokémon al azar :)");
    return pickPokemon();
}

//Encontrar pokemon por nombre o número
const findPokemon = (data) => { 
    const pokemonObject = data.find(pokemon => pokemon.name === getPokemon() || pokemon.id == getPokemon());
        // console.table(pokemonObject);
    if(pokemonObject == undefined){
        return fail();
    }
        return pokemonObject;
}

//Agregar divs para cada Pokémon de una lista
const showPokemonList = (listToDisplay) => {
    const pokemonList = document.getElementById("pokemonList");
    for(let i = 0 ; i < listToDisplay.length ; i++){
        const pokemonDiv = document.createElement("div");
        const pokemonLabel = document.createElement("label");
        const pokemonImg = document.createElement("img");
        const pokemonLink = document.createElement("a");
        pokemonDiv.className = "pokemonElement";

        pokemonLabel.appendChild(document.createTextNode(listToDisplay[i].num+" "));
        pokemonLabel.appendChild(document.createTextNode(listToDisplay[i].name));
        pokemonDiv.appendChild(pokemonLabel);
        pokemonList.appendChild(pokemonDiv);
        
        pokemonImg.src = listToDisplay[i].img;
        pokemonDiv.appendChild(pokemonImg);
        pokemonList.appendChild(pokemonDiv);

        pokemonLink.href = document.getElementById("pokemonCard");
        pokemonDiv.appendChild(pokemonLink);
        pokemonList.appendChild(pokemonDiv);
        
        pokemonDiv.addEventListener("click",function(){
            console.log("hola");
            displayScreen("details");
            displayInfo(listToDisplay[i]);
        });
    }
}

const calculateMaxCP = (pokemonObj) => {
    document.getElementById("divCPcalc").innerHTML = "";
    const cpPokemon = document.getElementById("divCPcalc");
    const cp = document.getElementById("idInputCP").value;
    if(pokemonObj.multipliers.length == 1){
        const cpLabel = document.createElement("label");
        const cpValue = Math.ceil(pokemonObj.multipliers[0]*cp);
        cpLabel.appendChild(document.createTextNode(cpValue));
        cpPokemon.appendChild(cpLabel);
    } else {
        for(let i = 0 ; i < pokemonObj.multipliers.length ; i++){
            if(i == pokemonObj.multipliers.length-1){
                const cpLabel = document.createElement("label");
                const cpValue = Math.ceil(pokemonObj.multipliers[i]*cp);
                cpLabel.appendChild(document.createTextNode(" Hasta: " +cpValue));
                cpPokemon.appendChild(cpLabel);
            } else{
                const cpLabel = document.createElement("label");
                const cpValue = Math.ceil(pokemonObj.multipliers[i]*cp);
                
                cpLabel.appendChild(document.createTextNode(cpValue));
                cpPokemon.appendChild(cpLabel);
            }
        }
    }
    document.getElementById("idInputCP").value = "";
}

const displayScreen = (screenName) => {
    if (screenName === "details") {
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");
        displayList.style.display = "none";
        displayPokemonCard.style.display = "block";
        displayPokemonCP.style.display = "block";
        // displayInfo(findPokemon(window.POKEMON.pokemon));
        // llamar a displayInfo
        return;
    }
    if(screenName === "search") {
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");
        displayList.style.display = "none";
        displayPokemonCard.style.display = "block";
        displayPokemonCP.style.display = "block";
        displayInfo(findPokemon(window.POKEMON.pokemon));
        // llamar a displayInfo
        return;
    }
    if (screenName === "list") {
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");
        displayList.style.display = "block";
        displayPokemonCard.style.display = "none";
        displayPokemonCP.style.display = "none";
        displayPokemonList("filter");
        // llamar a displayPokemonList
        return;
    }
    if (screenName === "home"){
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");
        displayList.style.display = "none";
        displayPokemonCard.style.display = "block";
        displayPokemonCP.style.display = "block";
        pickPokemon();
        return;
    }
}

// console.log(displayScreen("list"));

// displayScreen("home");
// TEST //
//Mostrar listas de Pokémon (filtrados u ordenados)
const displayPokemonList = (whichList) => {
    if(whichList === "filter"){
        showPokemonList(filterPokemon(window.POKEMON.pokemon,"type","Grass"));
        return;
    }
    if(whichList === "order"){
        showPokemonList(orderPokemon(window.POKEMON.pokemon,"name","asc"));
        return;
    }
}

//Mostrar datos del pokemon SELECCIONADO
const displayInfo = (pokemonObj) => {
    // const dataPokemon = findPokemon(window.POKEMON.pokemon);
    globalPokemon = pokemonObj;
    document.getElementById("pokeName").innerHTML = pokemonObj.name;
    document.getElementById("pokeNum").innerHTML = pokemonObj.num;
    document.getElementById("pokemonPicture").src = pokemonObj.img;
    document.getElementById("pokeType").innerHTML = pokemonObj.type;
    document.getElementById("pokePreEvolution").innerHTML = findEvolution(pokemonObj,"prev_evolution");
    document.getElementById("pokeEvolution").innerHTML = findEvolution(pokemonObj,"next_evolution");
    document.getElementById("pokeDescription").innerHTML = pokemonObj.description;
    document.getElementById("pokeHeight").innerHTML = pokemonObj.height;
    document.getElementById("pokeWeight").innerHTML = pokemonObj.weight;
    document.getElementById("pokeWeaknesses").innerHTML = pokemonObj.weaknesses;
    document.getElementById("frequencySpawn").innerHTML = pokemonObj.avg_spawns;
    document.getElementById("timeSpawn").innerHTML = pokemonObj.spawn_time;
    document.getElementById("kmEgg").innerHTML = pokemonObj.egg;
    document.getElementById("candies").innerHTML = pokemonObj.candy_count;
    document.getElementById("searchBar").value = "";
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

//Función para filtrar por debilidad o typo
const filterPokemon = (data, whatTofilter, valueToCompare) => {
    return data.filter(pokemon => {
        for(let i = 0 ; i < pokemon[whatTofilter].length ; i++){
            if(pokemon[whatTofilter][i] == valueToCompare){
                return pokemon;
            }
        }
    })             
}
//console.log(filterPokemon(window.POKEMON.pokemon,"type","Fairy"));

//ORDENAR por NAME
const orderPokemon = (data,value,order) => {
    if(value == "num"){
        if(order == "asc"){
            let pokemonArray = data.sort((a,b) => a.id - b.id);
            return pokemonArray;
        }
        if(order == "desc"){
            let pokemonArray  = data.sort((a,b) => b.id - a.id);
            return pokemonArray;
        }
    }
    if(value == "name"){
        if(order == "asc"){
            let pokemonArray = data.sort(function(a,b){
                if(a.name < b.name){
                    return -1;
                } if(a-name > b.name){
                    return 1;
                } return 0;
            });
            return pokemonArray;
        }
        if(order == "desc"){
            let pokemonArray = data.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
                } if(a-name < b.name){
                    return 1;
                } return 0;
            });
            return pokemonArray;
        }
    }
}

// console.log(orderPokemon(window.POKEMON.pokemon,"num","asc"));


// EVENT LISTENERS
// displayScreen("home");
document.getElementById("searchButton").addEventListener("click",() => displayScreen("search")); //Llamar al botón BUSCAR
document.getElementById("showButton").addEventListener("click",() => displayScreen("list")); //Mostrar listas
document.getElementById("calculateButton").addEventListener("click",() => calculateMaxCP(globalPokemon));

//ORDENAR por NUM   
// const orderByNumAsc = (data) => {
//     let pokemonArray = data.sort((a,b) => a.id - b.id);
//     return pokemonArray;
// }

// const orderByNumDesc = (data) => {
//     let pokemonArray  = data.sort((a,b) => b.id - a.id);
//     return pokemonArray;
// }
// const orderByNameAsc = (data) => {
//     let pokemonArray = data.sort(function(a,b){
//         if(a.name < b.name){
//             return -1;
//         } if(a-name > b.name){
//             return 1;
//         } return 0;
//     });
//     return pokemonArray;
// }
// const orderByNameDesc = (data) => {
//     let pokemonArray = data.sort(function(a,b){
//         if(a.name > b.name){
//             return -1;
//         } if(a-name < b.name){
//             return 1;
//         } return 0;
//     });
//     return pokemonArray;
// }
//orderByNumDesc(window.POKEMON.pokemon);
// console.log(orderByNameDesc(window.POKEMON.pokemon));