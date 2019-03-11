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
            console.log(typeof dataLovers.findPokemon(data, getPokemon1()));
            console.log(dataLovers.findPokemon(data,getPokemon1()));
            return [dataLovers.findPokemon(data, getPokemon1()),
                    dataLovers.findPokemon(data, getPokemon2())];
        })
};

const displayChart = (inputIndex) => {
    getStats(inputIndex).then(foundPokemon => {
        new Chart(document.getElementById("pokemonChart"), {
            type: "radar",
            data: {
                labels: ["Ataque base", "Defensa base", "Estamina base"],
                datasets: [{
                    label: foundPokemon[0].name,
                    fill: true,
                    backgroundColor: "rgba(43,136,245,0.2)",
                    borderColor: "rgba(43, 136, 245, 1)",
                    borderWidth: 1,
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(43, 136, 245, 1)",
                    data: [foundPokemon[0].stats.baseAttack, foundPokemon[0].stats.baseDefense, foundPokemon[0].stats.baseStamina]
                }, {
                    label: foundPokemon[1].name,
                    fill: true,
                    backgroundColor: "rgba(246, 83, 68, 0.2)",
                    borderColor: "rgba(246, 83, 68, 1)",
                    borderWidth: 1,
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(246, 83, 68, 1)",
                    data: [foundPokemon[1].stats.baseAttack, foundPokemon[1].stats.baseDefense, foundPokemon[1].stats.baseStamina]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Comparación de estadísticas base"
                },
                responsive: true
            }
        })
    })
    
}

document.getElementById("homeBtnId").addEventListener("click", goHome);
document.getElementById("pokemonStatsBtn").addEventListener("click", () => (displayChart()));

// new Chart(document.getElementById("chartTest"), {
//     type: "radar",
//         data: {
//             labels: ["Ataque base", "Defensa base", "Estamina base"],
//             datasets: [{
//                 label: "Pokemon 1",
//                 fill: true,
//                 backgroundColor: "rgba(179,181,198,0.2)",
//                 borderColor: "rgba(179, 181, 198, 1)",
//                 borderWidth: 1,
//                 pointBorderColor: "#fff",
//                 pointBackgroundColor: "rgba(179,181,198,1)",
//                 // data: [pokemonObject.stats.baseAttack, pokemonObject.stats.baseDefense, data.stats.baseStamina]
//                 data: [1.2, 1.2, 1.5]
//             },{
//                 label: "Pokemon 2",
//                 fill: true,
//                 backgroundColor: "rgba(255,99,132,0.2)",
//                 borderColor: "rgba(255,99,132,1)",
//                 borderWidth: 1,
//                 pointBorderColor: "#fff",
//                 pointBackgroundColor: "rgba(255,99,132,1)",
//                 // data: [pokemonObject.stats.baseAttack, pokemonObject.stats.baseDefense, data.stats.baseStamina]
//                 data: [1.3, 1.8, 0.9]
//             }]
//         },
//         options: {
//             title: {
//                 display: true,
//                 text: "Comparación de estadístics base"
//             },
//             responsive: true
//         }
// });

// const displayChart = (pokemonObject) => {
//     const statsChart = {
//         type: "radar",
//         data: {
//             labels: ["Ataque base", "Defensa base", "Estamina base"],
//             datasets: [{
//                 label: "Estadísticas base"
//                 data: [pokemonObject.stats.baseAttack, pokemonObject.stats.baseDefense, data.stats.baseStamina]
//                 backgroundColor: [
//                     "rgba(255, 99, 132, 0.2)",
//                     "rgba(54, 162, 235, 0.2)"
//                 ]
//                 borderColor: [
//                     "rgba(255, 99, 132, 1)",
//                     "rgba(54, 162, 235, 1)"
//                 ]
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true
//         }
//     }
// }

// const displayChart = (data) => {
//     const statsChart = {
//       type: "radar",
//       data: {
//         labels: ["Ataque base", "Defensa base", "Estamina base"],
//         datasets: [{
//             data: [data.stats.baseAttack, data.stats.baseDefense, data.stats.baseStamina]
//         }]
//       },
//       options: {
//         responsive: true
//       }
//     };
//   };
