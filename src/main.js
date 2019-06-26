const toInfoPage = () => {
    window.location = "info.html";
};
const toListPage = () => {
    window.location = "list.html";
};
const toChartsPage = () => {
    window.location = "charts.html";
};
const toGamePage = () => {
    window.location = "game.html";
};
const toAboutPage = () => {
    window.location = "about.html";
}

document.getElementById("pokemonMedal").addEventListener("click", toInfoPage);
document.getElementById("listMedal").addEventListener("click", toListPage);
document.getElementById("statsMedal").addEventListener("click", toChartsPage);
document.getElementById("gameMedal").addEventListener("click", toGamePage);
document.getElementById("aboutMedal").addEventListener("click", toAboutPage);