let globalPokemon;

const displayPokemon = () => {
    displayInfo(validatePokemon());
    clearElement("divCPcalc");
    clearValue("idInputCP");
    return;
};

const displayRandomPokemon = () => {
    displayInfo(dataLovers.pickPokemon(window.POKEMON.pokemon));
    clearElement("divCPcalc");
    clearValue("idInputCP");
    return;
}

//Seleccionar Pokémon al azar
// const pickPokemon = (data) => {
//     return data[Math.floor(Math.random()*151)];
// };

//Recibir el nombre del pokemon a buscar
const getPokemon = () => {    
    return document.getElementById("searchBar").value;
};

//Validar si el texto escrito coincide con un Pokémon
const validatePokemon = () => {
    const wantedPokemon = dataLovers.findPokemon(window.POKEMON.pokemon, getPokemon());
    if (wantedPokemon == undefined) {
        return fail();
    }
    return wantedPokemon;
};

const fail = () => {
    alert("Tu búsqueda no coincide con ningún Pokémon, pero aquí tienes un Pokémon al azar :)");
    return dataLovers.pickPokemon(window.POKEMON.pokemon);
};

const findTypes = (pokemonObject) => {
    clearElement("divTypeImg");
    const divTypeImg = document.getElementById("divTypeImg");
    for (let i = 0 ; i < pokemonObject.typeImg.length ; i++) {

        const divEachTypeImg = document.createElement("div");
        const pokemonTypesFigure = document.createElement("figure");
        const pokemonTypeImg = document.createElement("img");
        const pokemonTypeLink = document.createElement("a");

        pokemonTypeImg.src = pokemonObject.typeImg[i];
        pokemonTypesFigure.appendChild(pokemonTypeImg);
        divEachTypeImg.appendChild(pokemonTypesFigure);
        divTypeImg.appendChild(divEachTypeImg);

        pokemonTypeLink.href = document.getElementById("pokemonList");
        divEachTypeImg.appendChild(pokemonTypeLink);
        divTypeImg.appendChild(divEachTypeImg);

        divEachTypeImg.addEventListener("click", function(){
            selectPokemonList("filter","type", pokemonObject.type[i]);
        });
    }
};

const findWeaknesses = (pokemonObject) => {
    clearElement("divWeaknessesImg");
    const divWeaknessesImg = document.getElementById("divWeaknessesImg");
    for (let i = 0 ; i < pokemonObject.weaknessesImg.length ; i++) {
        const divEachWeaknessesImg = document.createElement("div");
        const pokemonWeaknessesFigure = document.createElement("figure");
        const pokemonWeaknessesImg = document.createElement("img");
        const pokemonWeaknessesLink = document.createElement("a");

        pokemonWeaknessesImg.src = pokemonObject.weaknessesImg[i];
        pokemonWeaknessesFigure.appendChild(pokemonWeaknessesImg);
        divEachWeaknessesImg.appendChild(pokemonWeaknessesFigure);
        divWeaknessesImg.appendChild(divEachWeaknessesImg);

        pokemonWeaknessesLink.href = document.getElementById("pokemonList");
        divEachWeaknessesImg.appendChild(pokemonWeaknessesLink);
        divWeaknessesImg.appendChild(divEachWeaknessesImg);

        divEachWeaknessesImg.addEventListener("click", function(){
            selectPokemonList("filter","type", pokemonObject.weaknesses[i]);
        });
    }
};

const findEvolution = (data, evolution) => {
    if (data.hasOwnProperty(evolution)) {
        let evolutionArray = [];
        for (let i = 0 ; i < data[evolution].length ; i++) {
            evolutionArray.push(data[evolution][i].name);
        }
        return evolutionArray.join();
    } else {
        return "NA";
    }
};

const findPokemonImg = (pokemonObject) => {
    clearElement("pokeImg")
    const divPokemonImg = document.getElementById("pokeImg");
    const pokemonFigureImg = document.createElement("figure");
    const pokemonImg = document.createElement("img");
    pokemonImg.setAttribute("class","pokemonPicture");
    pokemonImg.src = pokemonObject.img;
    pokemonFigureImg.appendChild(pokemonImg);
    divPokemonImg.appendChild(pokemonFigureImg);    
};

// ------------------------------------DISPLAY FUNCTIONS ---------------------------------------------
const displayInfo = (pokemonObject) => {    
    globalPokemon = pokemonObject;
    document.getElementById("pokeName").innerHTML = pokemonObject.name;
    document.getElementById("pokeNum").innerHTML = pokemonObject.num;
    // document.getElementById("pokemonPicture").src = pokemonObject.img;
    document.getElementById("pokeImg").src= findPokemonImg(pokemonObject);
    document.getElementById("divTypeImg").src = findTypes(pokemonObject);
    document.getElementById("pokePreEvolution").innerHTML = findEvolution(pokemonObject, "prev_evolution");
    document.getElementById("pokeEvolution").innerHTML = findEvolution(pokemonObject, "next_evolution");
    document.getElementById("pokeHeight").innerHTML = pokemonObject.height;
    document.getElementById("pokeWeight").innerHTML = pokemonObject.weight;
    document.getElementById("pokeDescription").innerHTML = pokemonObject.description;
    document.getElementById("divWeaknessesImg").src = findWeaknesses(pokemonObject);
    document.getElementById("frequencySpawn").innerHTML = pokemonObject.avg_spawns;
    document.getElementById("timeSpawn").innerHTML = pokemonObject.spawn_time;
    document.getElementById("kmEgg").innerHTML = pokemonObject.egg;
    document.getElementById("candies").innerHTML = pokemonObject.candy_count;
    
    clearValue("searchBar");
    if (pokemonObject.multipliers == null) {
        disableDOMElement("idInputCP");
        disableDOMElement("calculateButton");
    } else {
        enableDOMElement("idInputCP");
        enableDOMElement("calculateButton");
    }
};

const displayMaxCP = (pokemonObject) => {
    clearElement("divCPcalc");
    const cpPokemon = document.getElementById("divCPcalc");
    const cp = document.getElementById("idInputCP").value;
    const labelNewCP = document.createElement("label");
    labelNewCP.appendChild(document.createTextNode("  Nuevo CP estimado:  "));
    cpPokemon.appendChild(labelNewCP);
    for (let i = 0 ; i < pokemonObject.multipliers.length ; i++) {
        if (i != pokemonObject.multipliers.length-1) {
            const cpLabel = document.createElement("label");
            const cpValue = dataLovers.calculateMaxCP(pokemonObject.multipliers[i],cp);
            cpLabel.appendChild(document.createTextNode(cpValue + " - "));
            cpPokemon.appendChild(cpLabel);
        } else {
            const cpLabel = document.createElement("label");
            const cpValue = dataLovers.calculateMaxCP(pokemonObject.multipliers[i],cp);
            cpLabel.appendChild(document.createTextNode(cpValue));
            cpPokemon.appendChild(cpLabel);
        }
    }
};

// const ctx = document.getElementById("statsChart");
// const statsChart = new chart(ctx, {
//     type: "radar",
//     data: {
//         fetch("https://pogoapi.net/api/v1/pokemon_stats.json")
//         .then(function(pokemonStats.json){
//             return pokemonStats.json();
//         })
//         .then(function(stasJson){
            
//         })
//     }
// })

fetch('https://pogoapi.net/api/v1/pokemon_stats.json', {
    mode: 'no-cors'
})
  .then(function(response) {
    return response.text();
  })
  .then(function(stats) {
    console.log(stats);
  });
//------------------------------------------------------------------ CLEAR FUNCTIONS ---------------------------------------------------------------------
const clearElement = (element) => {
    document.getElementById(element).innerHTML = "";
};

const clearValue = (element) => {
    document.getElementById(element).value = "";
};

const disableDOMElement = (element) => {
    document.getElementById(element).disabled = true;
};

const enableDOMElement = (element) => {
    document.getElementById(element).disabled = false;
};

const removeChild = (element) => {
    const parentElement = document.getElementById(element);
    while(parentElement.firstChild){
        parentElement.removeChild(parentElement.firstChild);
    }
};

// ----------------------------------------------------------------- ADD EVENT LISTENERS --------------------------------------------------------------------------
document.getElementById("searchButton").addEventListener("click", displayPokemon);
document.getElementById("calculateButton").addEventListener("click", () => displayMaxCP(globalPokemon));
// ONLOAD random pokemon
document.getElementById("pokemonCard").addEventListener("load",displayRandomPokemon);