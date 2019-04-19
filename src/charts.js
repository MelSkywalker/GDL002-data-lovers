const goHome = () => {
    window.location = "index.html";
};

const getPokemon1 = () => {
    return document.getElementById("pokemon1Stats").value;
};
const getPokemon2 = () => {
    return document.getElementById("pokemon2Stats").value;
};

const getStats = (inputIndex) => {
    return fetch("https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-json-pokedex/master/output/pokemon.json")
        .then(res => res.json())
        .then(data => {
            // console.log(typeof dataLovers.findPokemon(data, getPokemon1()));
            // console.log(dataLovers.findPokemon(data,getPokemon1()));
            return [dataLovers.findPokemon(data, getPokemon1()),
                    dataLovers.findPokemon(data, getPokemon2())];
        })
};

// const createCanvas = () => {
//     const canvasDiv = document.getElementById("canvasDiv");
//     const canvasCreated = document.createElement("canvas");
//     canvasCreated.setAttribute("id", "statsChart");
//     canvasDiv.appendChild(canvasCreated);
// }

const displayChart = (inputIndex) => {
    const canvasDiv = document.getElementById("canvasDiv");
    const canvasCreated = document.createElement("canvas");
    canvasCreated.setAttribute("id", "statsChart");
    canvasDiv.appendChild(canvasCreated);

    getStats(inputIndex).then(foundPokemon => {
        Chart.defaults.global.defaultFontSize = 14;
        Chart.defaults.global.defaultFontColor= "#3f3f3f";
        new Chart(document.getElementById("statsChart"), {
            type: "radar",
            data: {
                labels: ["Ataque base", "Defensa base", "Estamina base"],
                datasets: [{
                    label: foundPokemon[0].name,
                    fill: true,
                    backgroundColor: "rgba(43,136,245,0.2)",
                    borderColor: "rgba(43, 136, 245, 1)",
                    borderWidth: 2,
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(43, 136, 245, 1)",
                    pointStyle: "circle",
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    data: [foundPokemon[0].stats.baseAttack, foundPokemon[0].stats.baseDefense, foundPokemon[0].stats.baseStamina]
                }, {
                    label: foundPokemon[1].name,
                    fill: true,
                    backgroundColor: "rgba(246, 83, 68, 0.2)",
                    borderColor: "rgba(246, 83, 68, 1)",
                    borderWidth: 2,
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(246, 83, 68, 1)",
                    pointStyle: "circle",
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    data: [foundPokemon[1].stats.baseAttack, foundPokemon[1].stats.baseDefense, foundPokemon[1].stats.baseStamina]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Comparación de estadísticas base"
                },
                responsive: true,
                aspectRatio: 2
            }
        })
    })
    
}

document.getElementById("homeBtnId").addEventListener("click", goHome);
document.getElementById("pokemonStatsBtn").addEventListener("click", () => (displayChart()));