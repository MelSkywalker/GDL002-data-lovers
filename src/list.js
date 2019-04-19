
const goHome = () => {
    window.location = "index.html";
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

// -------------- ADD EVENT LISTENERS ----------
window.onload = selectPokemonList("order","num","asc");
document.getElementById("homeBtnId").addEventListener("click", goHome);

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