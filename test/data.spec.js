require('../src/data.js');
const pokemon = require('../src/data/pokemon/pokemon.json');

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

describe('Pokemon', () => {
  it('debería ser un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
});

describe('findPokemon()', () => {
  it('debería ser una función', () => {
    expect(typeof dataLovers.findPokemon).toBe('function');
  });
  it('debería retornar "Mew" al buscar "151"', () => {
    expect(dataLovers.findPokemon(pokemon.pokemon,151).name).toBe('Mew');
  });
});

describe('calculateMaxCP()', () => {
  it('debería ser una función', () => {
    expect(typeof dataLovers.calculateMaxCP).toBe('function');
  });
  it('debería retornar 160 para Bulbasaur con CP inicial de 101', () => {    
    expect(dataLovers.calculateMaxCP(pokemon.pokemon[0].multipliers[0],101)).toBe(160);
  });
});

describe('filterPokemon()', () => {
  it('debería ser una función', () => {
    expect(typeof dataLovers.filterPokemon).toBe('function');
  });
  it('debería retornar un arreglo al filtrar por tipo fantasma', () => {
    expect(Array.isArray(dataLovers.filterPokemon(pokemon.pokemon,"type","Ghost"))).toBe(true);
  });
  it('debería retornar Gastly como tipo fanstama', () => {
    expect(dataLovers.filterPokemon(pokemon.pokemon,"type","Ghost")[0].name).toBe('Gastly');
  });
  it('debería retornar un arreglo al filtrar por debilidad fuego', () => {
    expect(Array.isArray(dataLovers.filterPokemon(pokemon.pokemon,"weaknesses","Fire"))).toBe(true);
  });
  it('debería retornar Articuno como débil ante tipo fuego', () => {
    expect(dataLovers.filterPokemon(pokemon.pokemon,"weaknesses","Fire")[27].name).toBe('Articuno');
  });
});

describe('orderPokemon()', () => {
  it('debería ser una función', () => {
    expect(typeof dataLovers.orderPokemon).toBe('function');
  });
  it('debería retornar un arreglo', () => {
    expect(Array.isArray(dataLovers.orderPokemon(pokemon.pokemon, "num", "asc"))).toBe(true);
  });
  it('debería retornar Bulbasaur como primer elemento ordenado de forma ascendente por número', () => {
    expect(dataLovers.orderPokemon(pokemon.pokemon, "num", "asc")[0].name).toBe('Bulbasaur');
  });
  it('debería retornar Mew como primer elemento ordenado de forma descendente por número', () => {
    expect(dataLovers.orderPokemon(pokemon.pokemon, "num", "desc")[0].name).toBe('Mew');
  });
  it('debería retornar Abra como primer elemento ordenado de forma ascendente por nombre', () => {
    expect(dataLovers.orderPokemon(pokemon.pokemon, "name", "asc")[0].name).toBe('Abra');
  });
  it('debería retornar Zubat como primer elemento ordenado de forma descendente por nombre', () => {
    expect(dataLovers.orderPokemon(pokemon.pokemon, "name", "desc")[0].name).toBe('Zubat');
  });
});