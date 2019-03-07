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
    if (getAnswer().toLowerCase() === pokemonObject.name.toLowerCase()) {
        document.getElementById("spanAnswer").innerHTML = "¡Es " + pokemonObject.name + "!";
    } else {
        document.getElementById("spanAnswer").innerHTML = "¡No, es " + pokemonObject.name + "!";
    }
};

const showPokemonAnswer = (pokemonObject) => {
    document.getElementById("pokemonPictureGame").classList.remove("pokemonSilhouette");
}

const showAnswer = () => {
    validateAnswer(globalPokemonGame);
    showPokemonAnswer(globalPokemonGame);
}

const playAgain = () => {
    displaySilhouette(getPokemonToGuess());
    document.getElementById("answerInput").value = "";

}

displaySilhouette(getPokemonToGuess());
document.getElementById("answerButton").addEventListener("click", showAnswer);
document.getElementById("playAgainButton").addEventListener("click",playAgain);
