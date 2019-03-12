const goHome = () => {
    window.location = "index.html";
};

// ----------------- SCREENS ------------------
const displayScreen = (screen) => {
    if (screen === "info1"){
        const displayInfo = document.getElementById("pokemonCard");
        const displayList = document.getElementById("container2");
        displayInfo.style.display = "block";
        displayList.style.display = "none";
        window.onload = displayRandomPokemon;
        return;
    }
    if (screen === "list1") => {
        const displayInfo = document.getElementById("pokemonCard");
        const displayList = document.getElementById("container2");
        displayInfo.style.display = "none";
        displayList.style.display = "block";
        window.onload = selectPokemonList("order","num","asc");;
        return;
    }
    if (screen === "info") => {
        const displayInfo = document.getElementById("pokemonCard");
        const displayList = document.getElementById("container2");
        displayInfo.style.display = "block";
        displayList.style.display = "none";
        return;
    }
    if (screen === "list") => {
        const displayInfo = document.getElementById("pokemonCard");
        const displayList = document.getElementById("container2");
        displayInfo.style.display = "none";
        displayList.style.display = "block";
        return;
    }
}

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
    // document.getElementById("statsChart").innerHTML = displayChart();
    
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

//Seleccionar lista a asignar con el botón
const selectPokemonList = (whichList, property, element) => {
    if (whichList === "filter") {
        displayPokemonList(dataLovers.filterPokemon(window.POKEMON.pokemon, property, element));
        
        // displayScreen("list");
        return;
    } else if (whichList == "order") {
        displayPokemonList(dataLovers.orderPokemon(window.POKEMON.pokemon, property, element));
        // displayScreen("list");
        return;
    }
};

// ----------------- DISPLAY -------------------------
const displayPokemonList = (listToDisplay) => {
    // removeChild("pokemonList");
    const pokemonList = document.getElementById("pokemonList");
    while(pokemonList.firstChild){
        pokemonList.removeChild(pokemonList.firstChild);
    }
    for (let i = 0 ; i < listToDisplay.length ; i++) {
        const pokemonDiv = document.createElement("div");
        const pokemonLabel = document.createElement("label");
        const pokemonDivText = document.createElement("div");
        // const pokemonFigure = document.createElement("figure");
        const pokemonImg = document.createElement("img");
        const pokemonLink = document.createElement("a");
        pokemonDiv.className = "pokemonElement";
        // pokemonDiv.setAttribute("class","boxWrapper2");
        pokemonImg.setAttribute("class","listPokeImg");
        pokemonLabel.setAttribute("class", "listLabels");
        
        pokemonImg.src = listToDisplay[i].img;
        // pokemonFigure.appendChild(pokemonImg);
        pokemonDiv.appendChild(pokemonImg);
        pokemonList.appendChild(pokemonDiv);

        pokemonLabel.appendChild(document.createTextNode("#" + listToDisplay[i].num + " "));
        pokemonLabel.appendChild(document.createTextNode(listToDisplay[i].name));
        pokemonDivText.appendChild(pokemonLabel);
        pokemonDiv.appendChild(pokemonDivText);
        pokemonList.appendChild(pokemonDiv);

        pokemonLink.href = document.getElementById("pokemonCard");
        pokemonDiv.appendChild(pokemonLink);
        pokemonList.appendChild(pokemonDiv);

        pokemonDiv.addEventListener("click",function(){
            window.location = "info.html";
            clearValue("idInputCP");
            clearElement("divCPcalc");
            displayScreen("details");
            displayInfo(listToDisplay[i]);
        });
    }
};

// ----------------------------------------------------------------- ADD EVENT LISTENERS --------------------------------------------------------------------------
// window.onload = displayRandomPokemon;
document.getElementById("homeBtnId").addEventListener("click", goHome);

document.getElementById("searchButton").addEventListener("click", displayPokemon);
document.getElementById("searchBar").addEventListener("keyup", function (e) {
    if(e.keyCode === 13){
        displayPokemon();
    }
});
document.getElementById("calculateButton").addEventListener("click", () => displayMaxCP(globalPokemon));
document.getElementById("idInputCP").addEventListener("keyup", function (e) {
    if(e.keyCode === 13){
        displayMaxCP(globalPokemon);
    }
});

// ---------------- ADD EVENT LISTENERS LISTAS
// window.onload = selectPokemonList("order","num","asc");

document.getElementById("typeNormal").addEventListener("click", () => selectPokemonList("filter","type","Normal"));
document.getElementById("typeFighting").addEventListener("click", () => selectPokemonList("filter","type","Fighting"));
document.getElementById("typeFlying").addEventListener("click", () => selectPokemonList("filter","type","Flying"));
document.getElementById("typePoison").addEventListener("click", () => selectPokemonList("filter","type","Poison"));
document.getElementById("typeGround").addEventListener("click", () => selectPokemonList("filter","type","Ground"));
document.getElementById("typeRock").addEventListener("click", () => selectPokemonList("filter","type","Rock"));
document.getElementById("typeBug").addEventListener("click", () => selectPokemonList("filter","type","Bug"));
document.getElementById("typeGhost").addEventListener("click", () => selectPokemonList("filter","type","Ghost"));
document.getElementById("typeSteel").addEventListener("click", () => selectPokemonList("filter","type","Steel"));
document.getElementById("typeFire").addEventListener("click", () => selectPokemonList("filter","type","Fire"));
document.getElementById("typeWater").addEventListener("click", () => selectPokemonList("filter","type","Water"));
document.getElementById("typeElectric").addEventListener("click", () => selectPokemonList("filter","type","Electric"));
document.getElementById("typePsychic").addEventListener("click", () => selectPokemonList("filter","type","Psychic"));
document.getElementById("typeIce").addEventListener("click", () => selectPokemonList("filter","type","Ice"));
document.getElementById("typeDragon").addEventListener("click", () => selectPokemonList("filter","type","Dragon"));
document.getElementById("typeFairy").addEventListener("click", () => selectPokemonList("filter","type","Fairy"));
document.getElementById("typeDark").addEventListener("click", () => selectPokemonList("filter","type","Dark"));

document.getElementById("weakNormal").addEventListener("click", () => selectPokemonList("filter","weaknesses","Normal"));
document.getElementById("weakFighting").addEventListener("click", () => selectPokemonList("filter","weaknesses","Fighting"));
document.getElementById("weakFlying").addEventListener("click", () => selectPokemonList("filter","weaknesses","Flying"));
document.getElementById("weakPoison").addEventListener("click", () => selectPokemonList("filter","weaknesses","Poison"));
document.getElementById("weakGround").addEventListener("click", () => selectPokemonList("filter","weaknesses","Ground"));
document.getElementById("weakRock").addEventListener("click", () => selectPokemonList("filter","weaknesses","Rock"));
document.getElementById("weakBug").addEventListener("click", () => selectPokemonList("filter","weaknesses","Bug"));
document.getElementById("weakGhost").addEventListener("click", () => selectPokemonList("filter","weaknesses","Ghost"));
document.getElementById("weakSteel").addEventListener("click", () => selectPokemonList("filter","weaknesses","Steel"));
document.getElementById("weakFire").addEventListener("click", () => selectPokemonList("filter","weaknesses","Fire"));
document.getElementById("weakWater").addEventListener("click", () => selectPokemonList("filter","weaknesses","Water"));
document.getElementById("weakElectric").addEventListener("click", () => selectPokemonList("filter","weaknesses","Electric"));
document.getElementById("weakPsychic").addEventListener("click", () => selectPokemonList("filter","weaknesses","Psychic"));
document.getElementById("weakIce").addEventListener("click", () => selectPokemonList("filter","weaknesses","Ice"));
document.getElementById("weakDragon").addEventListener("click", () => selectPokemonList("filter","weaknesses","Dragon"));
document.getElementById("weakFairy").addEventListener("click", () => selectPokemonList("filter","weaknesses","Fairy"));
document.getElementById("weakDark").addEventListener("click", () => selectPokemonList("filter","weaknesses","Dark"));

document.getElementById("orderAZ").addEventListener("click", () => selectPokemonList("order","name","asc"));
document.getElementById("orderZA").addEventListener("click", () => selectPokemonList("order","name","desc"));
document.getElementById("order1").addEventListener("click", () => selectPokemonList("order","num","asc"));
document.getElementById("order151").addEventListener("click", () => selectPokemonList("order","num","desc"));