const goHome = () => {
    window.location = "index.html";
};

let globalPokemonGame;

const getPokemonToGuess = () => {
    const pokemonToGuess = dataLovers.pickPokemon(window.POKEMON.pokemon);
    globalPokemonGame = pokemonToGuess;
    return pokemonToGuess;
}

const  displaySilhouette = (pokemonObject) => {
    document.getElementById("spanAnswer").innerHTML = "";
    document.getElementById("pokemonPictureGame").setAttribute("class","pokemonSilhouette");
    document.getElementById("pokemonPictureGame").src = pokemonObject.img;
};

//Recibir el nombre del pokemon a buscar
const getAnswer = () => {    
    return document.getElementById("answerInput").value;
};

const validateAnswer = (pokemonObject) => {
    if (getAnswer().toLowerCase() === pokemonObject.name.toLowerCase() || getAnswer() == pokemonObject.id) {
        document.getElementById("spanAnswer").innerHTML = "¡Es " + pokemonObject.name + "!";
    } else {
        document.getElementById("spanAnswer").innerHTML = "¡No, es " + pokemonObject.name + "!";
    }
};

const showPokemonAnswer = (pokemonObject) => {
    document.getElementById("pokemonPictureGame").classList.remove("pokemonSilhouette");
<<<<<<< HEAD
}
=======
};
>>>>>>> master

const showAnswer = () => {
    validateAnswer(globalPokemonGame);
    showPokemonAnswer(globalPokemonGame);
<<<<<<< HEAD
}
=======
};
>>>>>>> master

const playAgain = () => {
    displaySilhouette(getPokemonToGuess());
    document.getElementById("answerInput").value = "";

<<<<<<< HEAD
}
=======
};
>>>>>>> master

// ------------- AddEventListeners --------------
displaySilhouette(getPokemonToGuess());
document.getElementById("homeBtnId").addEventListener("click", goHome);
<<<<<<< HEAD
=======
document.getElementById("infoPageMenu").addEventListener("click", () => {
    document.getElementsByClassName("pokemonCardDisp").style.display = "block";
});
document.getElementById("listPageMenu").addEventListener("click", () => {
    document.getElementsByClassName("listDisp").style.display = "block";
    document.getElementsByClassName("submType").style.display = "block";
});
// document.getElementById("listPageMenu").addEventListener("click", () => displayScreen("list1"));
>>>>>>> master

document.getElementById("answerButton").addEventListener("click", showAnswer);
document.getElementById("playAgainButton").addEventListener("click",playAgain);
document.getElementById("answerInput").addEventListener("keyup", function (e) {
    if(e.keyCode === 13){
        showAnswer();
    }
});
