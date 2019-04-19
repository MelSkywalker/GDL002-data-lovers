const goHome = () => {
    window.location = "index.html";
};
<<<<<<< HEAD

document.getElementById("homeBtnId").addEventListener("click", goHome);
=======
const goPokemon = () => {
    window.location.href = "display.html#pokemonCard";
};

document.getElementById("homeBtnId").addEventListener("click", goHome);
document.getElementById("infoPageMenu").addEventListener("click", () => goPokemon);
document.getElementById("listPageMenu").addEventListener("click", () => displayScreen("list1"));
>>>>>>> master
