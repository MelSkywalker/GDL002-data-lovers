// -------------------------------------------- SEARCH, FILTER, ORDER & CALCULATE MAX CP FUNCTIONS -------------------------------------
//Encontrar Pokémon Object por nombre o número
const findPokemon = (data, getPokemon) => {
  return data.find(pokemon => pokemon.name == getPokemon || pokemon.id == getPokemon);
};

//Función para filtrar por debilidad o tipo
const filterPokemon = (data, whatToFilter, valueToCompare) => {  
  return data.filter(pokemon => {
    for(let i = 0 ; i < pokemon[whatToFilter].length ; i++){
      if(pokemon[whatToFilter][i] === valueToCompare){       
        return pokemon;
      }
    }
  });
};

//Función para ordenar por número o nombre, en orden ascendente o descendente
const orderPokemon = (data, value, order) => {
  let pokemonArray;
  if (value == "num") {
    if(order == "asc") {
      pokemonArray = data.sort((a,b) => a.id - b.id);
      return pokemonArray;
    }
    else if (order == "desc") {
      pokemonArray = data.sort((a,b) => b.id - a.id);
      return pokemonArray;
    }
  }
  else if (value == "name") {
    if (order == "asc") {
      pokemonArray = data.sort(function(a,b){
        if (a.name < b.name) {
          return -1;
        }
        else if (a.name > b.name) {
          return 1;
        } else {
        return 0;
        }
      });
      return pokemonArray;
    }
    if (order == "desc") {
      pokemonArray = data.sort(function(a,b){
        if (a.name > b.name) {
          return -1;
        }
        else if (a.name < b.name) {
          return 1;
        } else {
        return 0;
        }
      });
      return pokemonArray;
    }
  }
};

//Calcular el CP Máximo de un Pokémon al evolucionar
const calculateMaxCP = (multiplier,cp) => {
  return Math.ceil(multiplier*cp);
};

window.dataLovers = {
  findPokemon: findPokemon,
  filterPokemon: filterPokemon,
  orderPokemon: orderPokemon,
  calculateMaxCP: calculateMaxCP
};
