const getStats = (pokemonObject) => {
    fetch("https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-json-pokedex/master/output/pokemon.json")
    .then(res => res.json())
    // .then(data => console.log(data[pokemonObject]))
    .then (data => data)
    .then (pokemonObject => console.log(pokemonObject.stats))
    // .then(stats => console.log(stats.baseAttack))
    // .then(posts => console.log(posts))
};
getStats(0);

// .dex = .id

// getStats(window.POKEMON.pokemon[0]);

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

// const fetchParams = {
//     method: "GET",
//     mode: "no-cors"
// };
// const fetchUrl = "https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-json-pokedex/master/output/pokemon.json";
// }

// fetch(fetchUrl, fetchParams)
//     .then(response => {
//         if(!response.ok) {
//             throw new TypeError(response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         showChart(data)
//     })
//     .catch(err =>{
//         console.log("Error getting data from API");
            
//     })
// })

// fetch("https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-json-pokedex/master/output/pokemon.json", {
//     method: "GET",
//     mode: "cors"
// })
//     .then(function(response){
//         return response.json();
//     })
//     .then(data => {
//         dataLovers.displayChart(data);
//     })

// fetch('https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-json-pokedex/master/output/pokemon.json', {
//     method:'GET',
//     mode: 'no-cors'
// })
//   .then(function(response) {
//     return response.text();
//   })
//   .then(function(stats) {
//     console.log(stats);
//   });