// let selectedPokemon;
// let type;
// let typeValue;
let globalPokemon;

//Seleccionar un pokemon al azar
const pickPokemon = (data) => { 
    return data[Math.floor(Math.random()*151)];
};

//Recibir el nombre del pokemon a buscar
const getPokemon = () => { 
    let selectedPokemon = document.getElementById("searchBar").value;
    // document.getElementById("divCPcalc").innerHTML = "";
    return selectedPokemon;
}

//Mostrar alert y Pokémon random si se introduce un número o nombre no válido
const fail = () => {
    alert("Tu búsqueda no coincide con ningún Pokémon, pero aquí tienes un Pokémon al azar :)");
    return pickPokemon(window.POKEMON.pokemon);
}

const clearElement = (element) =>{
    document.getElementById(element).innerHTML = "";
}

const clearValue = (element) => {
    document.getElementById(element).value = "";
}

const disableDOMElement = (element) => {
    document.getElementById(element).disabled = true;
}

const enableDOMElement = (element) => {
    document.getElementById(element).disabled = false;
}

//Encontrar pokemon por nombre o número
const findPokemon = (data) => { 
    const pokemonObject = data.find(pokemon => pokemon.name === getPokemon() || pokemon.id == getPokemon());
        // console.table(pokemonObject);
    // if(pokemonObject == undefined){
    //     return fail();
    // }
    // if(pokemonObject.multipliers == null){
    //     disableDOMElement("idInputCP");
    //     disableDOMElement("calculateButton");
    // } else{
    //     enableDOMElement("idInputCP");
    //     enableDOMElement("calculateButton");
    // }
    return pokemonObject;
}

//Agregar divs para cada Pokémon de una lista
const displayPokemonList = (listToDisplay) => {
    const pokemonList = document.getElementById("pokemonList");
    for(let i = 0 ; i < listToDisplay.length ; i++){
        const pokemonDiv = document.createElement("div");
        const pokemonLabel = document.createElement("label");
        const pokemonFigure = document.createElement("figure");
        const pokemonImg = document.createElement("img");
        const pokemonLink = document.createElement("a");
        pokemonDiv.className = "pokemonElement";

        pokemonLabel.appendChild(document.createTextNode("#"+listToDisplay[i].num+" "));
        pokemonLabel.appendChild(document.createTextNode(listToDisplay[i].name));
        pokemonDiv.appendChild(pokemonLabel);
        pokemonList.appendChild(pokemonDiv);
        
        pokemonImg.src = listToDisplay[i].img;
        pokemonFigure.appendChild(pokemonImg);
        pokemonDiv.appendChild(pokemonFigure);
        pokemonList.appendChild(pokemonDiv);

        pokemonLink.href = document.getElementById("pokemonCard");
        pokemonDiv.appendChild(pokemonLink);
        pokemonList.appendChild(pokemonDiv);
        
        pokemonDiv.addEventListener("click",function(){
            displayScreen("details");
            displayInfo(listToDisplay[i]);
        });
    }
}

// const getCP = () => {
//     const cp = document.getElementById("idInputCP").value;
//     return cp;
// }

const getCP = () => {
    return document.getElementById("idInputCP").value;
} 

// const calculateMaxCP = (pokemonObj) => {
//     clearElement("divCPcalc");
//     const cpPokemon = document.getElementById("divCPcalc");
//     const cp = document.getElementById("idInputCP").value;
//     // const cp = getCP();
//     const labelNewCP = document.createElement("label");
//     labelNewCP.appendChild(document.createTextNode("  Nuevo CP estimado:  "));
//     cpPokemon.appendChild(labelNewCP);

//     for(let i = 0 ; i < pokemonObj.multipliers.length ; i++){
//         if(i != pokemonObj.multipliers.length-1){
//             const cpLabel = document.createElement("label");
//             const cpValue = Math.ceil(pokemonObj.multipliers[i]*cp);
//             cpLabel.appendChild(document.createTextNode(cpValue+" - "));
//             cpPokemon.appendChild(cpLabel);
//         } else{
//             const cpLabel = document.createElement("label");
//             const cpValue = Math.ceil(pokemonObj.multipliers[i]*cp);
//             cpLabel.appendChild(document.createTextNode(cpValue));
//             cpPokemon.appendChild(cpLabel);       
//         }
//     }
//     // document.getElementById("idInputCP").value = "";
// }
const displayMaxCP = (pokemonObject) => {
    clearElement("divCPcalc");
    const cpPokemon = document.getElementById("divCPcalc");
    const cp = document.getElementById("idInputCP").value;
    const labelNewCP = document.createElement("label");
    labelNewCP.appendChild(document.createTextNode("  Nuevo CP estimado:  "));
    cpPokemon.appendChild(labelNewCP);
    for(let i = 0 ; i < pokemonObject.multipliers.length ; i++) {
        if (i != pokemonObject.multipliers.length-1) {
            const cpLabel = document.createElement("label");
            const cpValue = calculateMaxCP(pokemonObject.multipliers[i],cp);
            cpLabel.appendChild(document.createTextNode(cpValue+" - "));
            cpPokemon.appendChild(cpLabel);
        } else {
            const cpLabel = document.createElement("label");
            const cpValue = calculateMaxCP(pokemonObject.multipliers[i],cp);
            cpLabel.appendChild(document.createTextNode(cpValue));
            cpPokemon.appendChild(cpLabel);  
        }
    }
}

const calculateMaxCP = (multiplier,cp) => {
    return Math.ceil(multiplier*cp);
}

const validatePokemon = () => {
    const wantedPokemon = findPokemon(window.POKEMON.pokemon);
    if(wantedPokemon == undefined){
        return fail();
    }
    return wantedPokemon;
}

const displayScreen = (screenName) => {
    if (screenName === "details") {
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");
        displayList.style.display = "none";
        displayPokemonCard.style.display = "block";
        displayPokemonCP.style.display = "block";
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
        displayInfo(validatePokemon());
        clearElement("divCPcalc");
        clearValue("idInputCP");
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
        displayPokemonList(filterPokemon(window.POKEMON.pokemon, "type", "Water"));
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
        pickPokemon(window.POKEMON.pokemon);
        return;
    }
}

// TEST //
//Mostrar listas de Pokémon (filtrados u ordenados)
const selectPokemonList = (whichList, property, element) => {
    if(whichList === "filter"){
        displayPokemonList(filterPokemon(window.POKEMON.pokemon, property, element));
        return;
    }
    else if(whichList === "order"){
        displayPokemonList(orderPokemon(window.POKEMON.pokemon, property, element));
        return;
    }
};

//Mostrar datos del pokemon SELECCIONADO
const displayInfo = (pokemonObj) => {
    // const dataPokemon = findPokemon(window.POKEMON.pokemon);
    globalPokemon = pokemonObj;
    // AssignImgType(pokemonObj);
    document.getElementById("pokeName").innerHTML = pokemonObj.name;
    document.getElementById("pokeNum").innerHTML = pokemonObj.num;
    document.getElementById("pokemonPicture").src = pokemonObj.img;
    // document.getElementById("pokeType").innerHTML = pokemonObj.type;
    // document.getElementById("pokeTypeImg").src = pokemonObj.typeImg[0];
    document.getElementById("divTypeImg").src = findTypes(pokemonObj);
    document.getElementById("pokePreEvolution").innerHTML = findEvolution(pokemonObj,"prev_evolution");
    document.getElementById("pokeEvolution").innerHTML = findEvolution(pokemonObj,"next_evolution");

    document.getElementById("pokeDescription").innerHTML = pokemonObj.description;
    document.getElementById("pokeHeight").innerHTML = pokemonObj.height;
    document.getElementById("pokeWeight").innerHTML = pokemonObj.weight;
    // document.getElementById("pokeWeaknesses").innerHTML = pokemonObj.weaknesses;
    
    document.getElementById("divWeaknessesImg").src = findWeaknesses(pokemonObj);
    document.getElementById("frequencySpawn").innerHTML = pokemonObj.avg_spawns;
    document.getElementById("timeSpawn").innerHTML = pokemonObj.spawn_time;
    document.getElementById("kmEgg").innerHTML = pokemonObj.egg;
    document.getElementById("candies").innerHTML = pokemonObj.candy_count;
    clearValue("searchBar");
    // document.getElementById("searchBar").value = "";
    if(pokemonObj.multipliers == null){
        disableDOMElement("idInputCP");
        disableDOMElement("calculateButton");
    } else{
        enableDOMElement("idInputCP");
        enableDOMElement("calculateButton");
    }   
}

//Mostrar tipo o tipos
const findTypes = (pokemon) => {
    clearElement("divTypeImg");
    // document.getElementById("divTypeImg").innerHTML = "";
    const divTypeImg = document.getElementById("divTypeImg");

    for ( let i = 0 ; i < pokemon.typeImg.length ; i++){
        const divEachTypeImg = document.createElement("div");
        const pokemonTypesFigure = document.createElement("figure");
        const pokemonTypeImg = document.createElement("img");

        pokemonTypeImg.src = pokemon.typeImg[i];
        pokemonTypesFigure.appendChild(pokemonTypeImg);
        divEachTypeImg.appendChild(pokemonTypesFigure);
        divTypeImg.appendChild(divEachTypeImg);
    }
}

//Mostrar debilidades
const findWeaknesses = (pokemon) => {
    document.getElementById("divWeaknessesImg").innerHTML = "";
    const divWeaknessesImg = document.getElementById("divWeaknessesImg");

    for ( let i = 0 ; i < pokemon.weaknessesImg.length ; i++){
        const divEachWeaknessesImg = document.createElement("div");
        const pokemonWeaknessesImg = document.createElement("img");

        pokemonWeaknessesImg.src = pokemon.weaknessesImg[i];
        divEachWeaknessesImg.appendChild(pokemonWeaknessesImg);
        divWeaknessesImg.appendChild(divEachWeaknessesImg);
    }
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
    });             
};

// const filterPokemon = (data, whatToFilter, valueToCompare) => {
//     let filteredList = data.filter((pokemon) => {
//         return (pokemon[whatToFilter].indexOf(valueToCompare) >= 0);
//     });
// }
// console.log(filterPokemon(window.POKEMON.pokemon,"type","Grass"));

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
                } if(a.name > b.name){
                    return 1;
                } return 0;
            });
            return pokemonArray;
        }
        if(order == "desc"){
            let pokemonArray = data.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
                } if(a.name < b.name){
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
document.getElementById("calculateButton").addEventListener("click",() => displayMaxCP(globalPokemon));

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