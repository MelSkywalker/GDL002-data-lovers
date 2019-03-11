var POKEMON = {
  "pokemon": [{
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "description": "A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.",
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [1.58],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "next_evolution": [{
      "num": "002",
      "name": "Ivysaur"
    }, {
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "description": "Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes. Si empieza a pasar más tiempo al sol, será porque el bulbo está a punto de hacerse una flor grande.",
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.042,
    "avg_spawns": 4.2,
    "spawn_time": "07:00",
    "multipliers": [
      1.2,
      1.6
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }],
    "next_evolution": [{
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "description": "Venusaur tiene una flor enorme en el lomo que, según parece, adquiere unos colores muy vivos si está bien nutrido y le da mucho el sol. El aroma delicado de la flor tiene un efecto relajante en el ánimo de las personas.",
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }, {
      "num": "002",
      "name": "Ivysaur"
    }]
  }, {
    "id": 4,
    "num": "004",
    "name": "Charmander",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "type": [
      "Fire"
    ],
    "typeImg": [
      "images/types/fire.png"
    ],
    "description": "La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.",
    "height": "0.61 m",
    "weight": "8.5 kg",
    "candy": "Charmander Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.253,
    "avg_spawns": 25.3,
    "spawn_time": "08:45",
    "multipliers": [1.65],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "next_evolution": [{
      "num": "005",
      "name": "Charmeleon"
    }, {
      "num": "006",
      "name": "Charizard"
    }]
  }, {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    "type": [
      "Fire"
    ],
    "typeImg": [
      "images/types/fire.png"
    ],
    "description": "Charmeleon no tiene reparo en acabar con su rival usando las afiladas garras que tiene. Si su enemigo es fuerte, se vuelve agresivo, y la llama que tiene en el extremo de la cola empieza a arder con mayor intensidad tornándose azulada.",
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  }, {
    "id": 6,
    "num": "006",
    "name": "Charizard",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    "type": [
      "Fire",
      "Flying"
    ],
    "typeImg": [
      "images/types/fire.png",
      "images/types/flying.png"
    ],
    "description": "Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque.",
    "height": "1.70 m",
    "weight": "90.5 kg",
    "candy": "Charmander Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0031,
    "avg_spawns": 0.31,
    "spawn_time": "13:34",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }, {
      "num": "005",
      "name": "Charmeleon"
    }]
  }, {
    "id": 7,
    "num": "007",
    "name": "Squirtle",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "type": [
      "Water"
    ],
    "typeImg": [
      "images/types/water.png",
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "description": "El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad.",
    "height": "0.51 m",
    "weight": "9.0 kg",
    "candy": "Squirtle Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.58,
    "avg_spawns": 58,
    "spawn_time": "04:25",
    "multipliers": [2.1],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "008",
      "name": "Wartortle"
    }, {
      "num": "009",
      "name": "Blastoise"
    }]
  }, {
    "id": 8,
    "num": "008",
    "name": "Wartortle",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    "type": [
      "Water"
    ],
    "typeImg": [
      "images/types/water.png",
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "description": "Tiene una cola larga y cubierta de un pelo abundante y grueso que se torna más oscuro a medida que crece. Los arañazos que tiene en el caparazón dan fe de lo buen guerrero que es.",
    "height": "0.99 m",
    "weight": "22.5 kg",
    "candy": "Squirtle Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "07:02",
    "multipliers": [1.4],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "007",
      "name": "Squirtle"
    }],
    "next_evolution": [{
      "num": "009",
      "name": "Blastoise"
    }]
  }, {
    "id": 9,
    "num": "009",
    "name": "Blastoise",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    "type": [
      "Water"
    ],
    "typeImg": [
      "images/types/water.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "description": "Blastoise lanza chorros de agua con gran precisión por los tubos que le salen del caparazón que tiene en la espalda. Puede disparar chorros de agua con tanta puntería que no fallaría al tirar contra una lata pequeña a 50 m.",
    "height": "1.60 m",
    "weight": "85.5 kg",
    "candy": "Squirtle Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0067,
    "avg_spawns": 0.67,
    "spawn_time": "00:06",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "007",
      "name": "Squirtle"
    }, {
      "num": "008",
      "name": "Wartortle"
    }]
  }, {
    "id": 10,
    "num": "010",
    "name": "Caterpie",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    "type": [
      "Bug"
    ],
    "typeImg": [
      "images/types/bug.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/flying.png",
      "images/types/rock.png"
    ],
    "description": "Caterpie tiene un apetito voraz. Es capaz de devorar hojas que superen su tamaño en un abrir y cerrar de ojos. Atención a la antena que tiene: libera un hedor realmente fuerte.",
    "height": "0.30 m",
    "weight": "2.9 kg",
    "candy": "Caterpie Candy",
    "candy_count": 12,
    "egg": "2 km",
    "spawn_chance": 3.032,
    "avg_spawns": 303.2,
    "spawn_time": "16:35",
    "multipliers": [1.05],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "next_evolution": [{
      "num": "011",
      "name": "Metapod"
    }, {
      "num": "012",
      "name": "Butterfree"
    }]
  }, {
    "id": 11,
    "num": "011",
    "name": "Metapod",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    "type": [
      "Bug"
    ],
    "typeImg": [
      "images/types/bug.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/flying.png",
      "images/types/rock.png"
    ],
    "description": "La capa que recubre el cuerpo de este Pokémon es tan dura como una plancha de hierro. Metapod apenas se mueve. Permanece inmóvil para que las vísceras evolucionen dentro de la coraza que le rodea.",
    "height": "0.71 m",
    "weight": "9.9 kg",
    "candy": "Caterpie Candy",
    "candy_count": 50,
    "egg": "Not in Eggs",
    "spawn_chance": 0.187,
    "avg_spawns": 18.7,
    "spawn_time": "02:11",
    "multipliers": [
      3.55,
      3.79
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "010",
      "name": "Caterpie"
    }],
    "next_evolution": [{
      "num": "012",
      "name": "Butterfree"
    }]
  }, {
    "id": 12,
    "num": "012",
    "name": "Butterfree",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    "type": [
      "Bug",
      "Flying"
    ],
    "typeImg": [
      "images/types/bug.png",
      "images/types/flying.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/rock.png"
    ],
    "description": "Butterfree tiene una habilidad especial para encontrar delicioso polen en las flores. Puede localizar, extraer y transportar polen de flores que estén floreciendo a 10 km de distancia de su nido.",
    "height": "1.09 m",
    "weight": "32.0 kg",
    "candy": "Caterpie Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.022,
    "avg_spawns": 2.2,
    "spawn_time": "05:23",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "010",
      "name": "Caterpie"
    }, {
      "num": "011",
      "name": "Metapod"
    }]
  }, {
    "id": 13,
    "num": "013",
    "name": "Weedle",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "typeImg": [
      "images/types/bug.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/rock.png"
    ],
    "description": "Weedle tiene un finísimo sentido del olfato. Es capaz de distinguir las hojas que le gustan de las que no le gustan olisqueando un poco con la gran nariz que tiene.",
    "height": "0.30 m",
    "weight": "3.2 kg",
    "candy": "Weedle Candy",
    "candy_count": 12,
    "egg": "2 km",
    "spawn_chance": 7.12,
    "avg_spawns": 712,
    "spawn_time": "02:21",
    "multipliers": [
      1.01,
      1.09
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "next_evolution": [{
      "num": "014",
      "name": "Kakuna"
    }, {
      "num": "015",
      "name": "Beedrill"
    }]
  }, {
    "id": 14,
    "num": "014",
    "name": "Kakuna",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "typeImg": [
      "images/types/bug.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/rock.png"
    ],
    "description": "Kakuna permanece prácticamente inmóvil al encaramarse a los árboles, aunque la actividad interna de su organismo tiene un ritmo frenético, pues se prepara para su evolución. Prueba de esto es la alta temperatura de su caparazón.",
    "height": "0.61 m",
    "weight": "10.0 kg",
    "candy": "Weedle Candy",
    "candy_count": 50,
    "egg": "Not in Eggs",
    "spawn_chance": 0.44,
    "avg_spawns": 44,
    "spawn_time": "02:30",
    "multipliers": [
      3.01,
      3.41
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "013",
      "name": "Weedle"
    }],
    "next_evolution": [{
      "num": "015",
      "name": "Beedrill"
    }]
  }, {
    "id": 15,
    "num": "015",
    "name": "Beedrill",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "typeImg": [
      "images/types/bug.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/rock.png"
    ],
    "description": "Los Beedrill defienden su territorio a toda costa. No es conveniente acercarse a su colmena, por seguridad. Si se les molesta, todo un enjambre atacará ferozmente.",
    "height": "0.99 m",
    "weight": "29.5 kg",
    "candy": "Weedle Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.051,
    "avg_spawns": 5.1,
    "spawn_time": "04:50",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "013",
      "name": "Weedle"
    }, {
      "num": "014",
      "name": "Kakuna"
    }]
  }, {
    "id": 16,
    "num": "016",
    "name": "Pidgey",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "typeImg": [
      "images/types/normal.png",
      "images/types/flying.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "description": "Pidgey tiene un sentido de la orientación muy desarrollado. Es capaz de regresar a su nido, por lejos que se encuentre de las zonas que le resultan familiares.",
    "height": "0.30 m",
    "weight": "1.8 kg",
    "candy": "Pidgey Candy",
    "candy_count": 12,
    "egg": "2 km",
    "spawn_chance": 15.98,
    "avg_spawns": 1.598,
    "spawn_time": "01:34",
    "multipliers": [
      1.71,
      1.92
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "next_evolution": [{
      "num": "017",
      "name": "Pidgeotto"
    }, {
      "num": "018",
      "name": "Pidgeot"
    }]
  }, {
    "id": 17,
    "num": "017",
    "name": "Pidgeotto",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "typeImg": [
      "images/types/normal.png",
      "images/types/flying.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "description": "Pidgeotto se apodera de una zona muy vasta como su territorio y la sobrevuela para controlarla. Si alguien invade su espacio vital, no tendrá ningún reparo en castigarlo con sus afiladas garras.",
    "height": "1.09 m",
    "weight": "30.0 kg",
    "candy": "Pidgey Candy",
    "candy_count": 50,
    "egg": "Not in Eggs",
    "spawn_chance": 1.02,
    "avg_spawns": 102,
    "spawn_time": "01:30",
    "multipliers": [1.79],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "016",
      "name": "Pidgey"
    }],
    "next_evolution": [{
      "num": "018",
      "name": "Pidgeot"
    }]
  }, {
    "id": 18,
    "num": "018",
    "name": "Pidgeot",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "typeImg": [
      "images/types/normal.png",
      "images/types/flying.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "description": "El plumaje de este Pokémon es bonito e hipnótico. Muchos Entrenadores se quedan embobados ante la belleza impactante de las plumas que tiene en la cabeza; lo que les lleva a elegir a Pidgeot como su Pokémon.",
    "height": "1.50 m",
    "weight": "39.5 kg",
    "candy": "Pidgey Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.13,
    "avg_spawns": 13,
    "spawn_time": "01:50",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "016",
      "name": "Pidgey"
    }, {
      "num": "017",
      "name": "Pidgeotto"
    }]
  }, {
    "id": 19,
    "num": "019",
    "name": "Rattata",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    "type": [
      "Normal"
    ],
    "typeImg": [
      "images/types/normal.png"
    ],
    "weaknessesImg": [
      "images/types/fighting.png"
    ],
    "description": "Rattata es cauto como él solo. Hasta cuando duerme mueve las orejas para oír todos los ruidos. No es nada delicado a la hora de elegir su hábitat. Cualquier sitio es bueno para cavar su madriguera.",
    "height": "0.30 m",
    "weight": "3.5 kg",
    "candy": "Rattata Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 13.05,
    "avg_spawns": 1.305,
    "spawn_time": "01:55",
    "multipliers": [
      2.55,
      2.73
    ],
    "weaknesses": [
      "Fighting"
    ],
    "next_evolution": [{
      "num": "020",
      "name": "Raticate"
    }]
  }, {
    "id": 20,
    "num": "020",
    "name": "Raticate",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    "type": [
      "Normal"
    ],
    "typeImg": [
      "images/types/normal.png"
    ],
    "weaknessesImg": [
      "images/types/fighting.png"
    ],
    "desciption": "A Raticate le crecen los incisivos firmes y fuertes. Para mantenerlos afilados roe troncos y rocas, e incluso las paredes de las casas.",
    "height": "0.71 m",
    "weight": "18.5 kg",
    "candy": "Rattata Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.41,
    "avg_spawns": 41,
    "spawn_time": "01:56",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "prev_evolution": [{
      "num": "019",
      "name": "Rattata"
    }]
  }, {
    "id": 21,
    "num": "021",
    "name": "Spearow",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "typeImg": [
      "images/types/normal.png",
      "images/types/flying.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "description": "Spearow pía con tanta fuerza que se le puede oír a 1 km de distancia. Si al agudo chillido le sigue una especie de eco, estaremos oyendo la respuesta de otros Spearow que contestan ante el aviso de peligro.",
    "height": "0.30 m",
    "weight": "2.0 kg",
    "candy": "Spearow Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 4.73,
    "avg_spawns": 473,
    "spawn_time": "12:25",
    "multipliers": [
      2.66,
      2.68
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "next_evolution": [{
      "num": "022",
      "name": "Fearow"
    }]
  }, {
    "id": 22,
    "num": "022",
    "name": "Fearow",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "typeImg": [
      "images/types/normal.png",
      "images/types/flying.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "description": "A Fearow se le reconoce por tener un pescuezo y un pico largos que le permiten cazar en tierra y agua. Tiene una gran habilidad moviendo el fino pico para atrapar a sus presas.",
    "height": "1.19 m",
    "weight": "38.0 kg",
    "candy": "Spearow Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.15,
    "avg_spawns": 15,
    "spawn_time": "01:11",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "021",
      "name": "Spearow"
    }]
  }, {
    "id": 23,
    "num": "023",
    "name": "Ekans",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "type": [
      "Poison"
    ],
    "typeImg": [
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Ekans se enrosca para descansar. Adoptando esta posición puede responder rápidamente a cualquier amenaza que le aceche desde cualquier lugar, levantando la cabeza con una feroz mirada.",
    "height": "2.01 m",
    "weight": "6.9 kg",
    "candy": "Ekans Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.27,
    "avg_spawns": 227,
    "spawn_time": "12:20",
    "multipliers": [
      2.21,
      2.27
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "024",
      "name": "Arbok"
    }]
  }, {
    "id": 24,
    "num": "024",
    "name": "Arbok",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    "type": [
      "Poison"
    ],
    "typeImg": [
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Este Pokémon es tremendamente fuerte, puede oprimir cualquier cosa con su cuerpo y hasta es capaz de estrujar un barril de acero. Una vez que Arbok se enrosca a su víctima, no hay forma de escapar de su asfixiante abrazo.",
    "height": "3.51 m",
    "weight": "65.0 kg",
    "candy": "Ekans Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.072,
    "avg_spawns": 7.2,
    "spawn_time": "01:50",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "023",
      "name": "Ekans"
    }]
  }, {
    "id": 25,
    "num": "025",
    "name": "Pikachu",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "type": [
      "Electric"
    ],
    "typeImg": [
      "images/types/electric.png"
    ],
    "weaknessesImg": [
      "images/types/ground.png"
    ],
    "description": "Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga.",
    "height": "0.41 m",
    "weight": "6.0 kg",
    "candy": "Pikachu Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 0.21,
    "avg_spawns": 21,
    "spawn_time": "04:00",
    "multipliers": [2.34],
    "weaknesses": [
      "Ground"
    ],
    "next_evolution": [{
      "num": "026",
      "name": "Raichu"
    }]
  }, {
    "id": 26,
    "num": "026",
    "name": "Raichu",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    "type": [
      "Electric"
    ],
    "typeImg": [
      "images/types/electric.png"
    ],
    "weaknessesImg": [
      "images/types/ground.png"
    ],
    "description": "Si las bolsas de los mofletes se le cargan demasiado, Raichu planta la cola en el suelo para liberar electricidad. Es común encontrar zonas chamuscadas cerca de la madriguera de este Pokémon.",
    "height": "0.79 m",
    "weight": "30.0 kg",
    "candy": "Pikachu Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0076,
    "avg_spawns": 0.76,
    "spawn_time": "23:58",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ],
    "prev_evolution": [{
      "num": "025",
      "name": "Pikachu"
    }]
  }, {
    "id": 27,
    "num": "027",
    "name": "Sandshrew",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    "type": [
      "Ground"
    ],
    "typeImg": [
      "images/types/ground.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png"
    ],
    "description": "Sandshrew es capaz de absorber agua y no perder ni una gota, algo que le permite sobrevivir en el desierto. Este Pokémon se enrosca para defenderse de los enemigos.",
    "height": "0.61 m",
    "weight": "12.0 kg",
    "candy": "Sandshrew Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.11,
    "avg_spawns": 111,
    "spawn_time": "01:58",
    "multipliers": [2.45],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "next_evolution": [{
      "num": "028",
      "name": "Sandslash"
    }]
  }, {
    "id": 28,
    "num": "028",
    "name": "Sandslash",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    "type": [
      "Ground"
    ],
    "typeImg": [
      "images/types/ground.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png"
    ],
    "description": "Sandslash está recubierto de duras púas que son partes endurecidas de la piel. Suele mudarlas una vez al año; debajo de las viejas púas crecen unas nuevas que las sustituyen.",
    "height": "0.99 m",
    "weight": "29.5 kg",
    "candy": "Sandshrew Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.037,
    "avg_spawns": 3.7,
    "spawn_time": "12:34",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "prev_evolution": [{
      "num": "027",
      "name": "Sandshrew"
    }]
  }, {
    "id": 29,
    "num": "029",
    "name": "Nidoran ♀ (Female)",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    "type": [
      "Poison"
    ],
    "typeImg": [
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Nidoran♀ tiene púas que segregan un veneno muy potente. Se piensa que las desarrolló como protección del cuerpo tan pequeño que tiene. Cuando se enfada, libera una horrible sustancia tóxica por el cuerno.",
    "height": "0.41 m",
    "weight": "7.0 kg",
    "candy": "Nidoran ♀ (Female) Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 1.38,
    "avg_spawns": 138,
    "spawn_time": "01:51",
    "multipliers": [
      1.63,
      2.48
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "030",
      "name": "Nidorina"
    }, {
      "num": "031",
      "name": "Nidoqueen"
    }]
  }, {
    "id": 30,
    "num": "030",
    "name": "Nidorina",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    "type": [
      "Poison"
    ],
    "typeImg": [
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Cuando están en familia o con sus amigos, esconden las púas para evitar accidentes. Según parece, se alteran bastante si se separan del grupo.",
    "height": "0.79 m",
    "weight": "20.0 kg",
    "candy": "Nidoran ♀ (Female) Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.088,
    "avg_spawns": 8.8,
    "spawn_time": "07:22",
    "multipliers": [
      1.83,
      2.48
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "029",
      "name": "Nidoran(Female)"
    }],
    "next_evolution": [{
      "num": "031",
      "name": "Nidoqueen"
    }]
  }, {
    "id": 31,
    "num": "031",
    "name": "Nidoqueen",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    "type": [
      "Poison",
      "Ground"
    ],
    "typeImg": [
      "images/types/poison.png",
      "images/types/ground.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/ice.png",
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Nidoqueen tiene el cuerpo totalmente recubierto de escamas durísimas. Suele lanzar por los aires a sus rivales de los violentos golpes que les propina. Cuando se trata de defender a sus crías, alcanza su nivel máximo de fuerza.",
    "height": "1.30 m",
    "weight": "60.0 kg",
    "candy": "Nidoran ♀ (Female) Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "12:35",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ice",
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "029",
      "name": "Nidoran(Female)"
    }, {
      "num": "030",
      "name": "Nidorina"
    }]
  }, {
    "id": 32,
    "num": "032",
    "name": "Nidoran ♂ (Male)",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    "type": [
      "Poison"
    ],
    "typeImg": [
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Nidoran♂ ha desarrollado músculos para mover las orejas y orientarlas en cualquier dirección. De este modo, es capaz de captar hasta el sonido más leve.",
    "height": "0.51 m",
    "weight": "9.0 kg",
    "candy": "Nidoran ♂ (Male) Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 1.31,
    "avg_spawns": 131,
    "spawn_time": "01:12",
    "multipliers": [
      1.64,
      1.7
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "033",
      "name": "Nidorino"
    }, {
      "num": "034",
      "name": "Nidoking"
    }]
  }, {
    "id": 33,
    "num": "033",
    "name": "Nidorino",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    "type": [
      "Poison"
    ],
    "typeImg": [
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Nidorino tiene un cuerno de dureza superior a la del diamante. Si siente una presencia hostil, se le erizan las púas del lomo enseguida y carga contra el enemigo con todas sus fuerzas.",
    "height": "0.89 m",
    "weight": "19.5 kg",
    "candy": "Nidoran ♂ (Male) Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.083,
    "avg_spawns": 8.3,
    "spawn_time": "09:02",
    "multipliers": [1.83],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "032",
      "name": "Nidoran(Male)"
    }],
    "next_evolution": [{
      "num": "034",
      "name": "Nidoking"
    }]
  }, {
    "id": 34,
    "num": "034",
    "name": "Nidoking",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    "type": [
      "Poison",
      "Ground"
    ],
    "typeImg": [
      "images/types/poison.png",
      "images/types/ground.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/ice.png",
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "La gruesa cola de Nidoking encierra una fuerza realmente destructora. Con una vez que la agite, es capaz de tumbar una torre metálica de transmisión. Una vez que este Pokémon se desboca, no hay quien lo pare.",
    "height": "1.40 m",
    "weight": "62.0 kg",
    "candy": "Nidoran ♂ (Male) Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "12:16",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ice",
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "032",
      "name": "Nidoran(Male)"
    }, {
      "num": "033",
      "name": "Nidorino"
    }]
  }, {
    "id": 35,
    "num": "035",
    "name": "Clefairy",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    "type": [
      "Fairy"
    ],
    "typeImg": [
      "images/types/fairy.png"
    ],
    "weaknessesImg": [
      "images/types/steel.png",
      "images/types/poison.png"
    ],
    "description": "Siempre que hay luna llena, salen en grupo para jugar. Al amanecer, los Clefairy, agotados, regresan a sus refugios de montaña para dormir acurrucados unos con otros.",
    "height": "0.61 m",
    "weight": "7.5 kg",
    "candy": "Clefairy Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 0.92,
    "avg_spawns": 92,
    "spawn_time": "03:30",
    "multipliers": [
      2.03,
      2.14
    ],
    "weaknesses": [
      "Steel",
      "Poison"
    ],
    "next_evolution": [{
      "num": "036",
      "name": "Clefable"
    }]
  }, {
    "id": 36,
    "num": "036",
    "name": "Clefable",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    "type": [
      "Fairy"
    ],
    "typeImg": [
      "images/types/fairy.png"
    ],
    "weaknessesImg": [
      "images/types/steel.png",
      "images/types/poison.png"
    ],
    "description":"Clefable se mueve dando saltitos como si fuera haciendo uso de las alas. Estos pequeños brincos le permiten caminar por el agua. De todos es sabido que le encanta darse paseos por los lagos en tranquilas noches de luna llena.",
    "height": "1.30 m",
    "weight": "40.0 kg",
    "candy": "Clefairy Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "03:29",
    "multipliers": null,
    "weaknesses": [
      "Steel",
      "Poison"
    ],
    "prev_evolution": [{
      "num": "035",
      "name": "Clefairy"
    }]
  }, {
    "id": 37,
    "num": "037",
    "name": "Vulpix",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    "type": [
      "Fire"
    ],
    "typeImg": [
      "images/types/fire.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "description": "Al nacer, Vulpix tiene una cola blanca que se divide en seis si recibe cariño por parte de su Entrenador. Las seis colas se le rizan de forma majestuosa.",
    "height": "0.61 m",
    "weight": "9.9 kg",
    "candy": "Vulpix Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.22,
    "avg_spawns": 22,
    "spawn_time": "13:43",
    "multipliers": [
      2.74,
      2.81
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "038",
      "name": "Ninetales"
    }]
  }, {
    "id": 38,
    "num": "038",
    "name": "Ninetales",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    "type": [
      "Fire"
    ],
    "typeImg": [
      "images/types/fire.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "description": "Ninetales emite una siniestra luz a través de los brillantes ojos rojos que tiene, para conseguir controlar del todo la mente de su rival. Dicen que este Pokémon llega a vivir mil años.",
    "height": "1.09 m",
    "weight": "19.9 kg",
    "candy": "Vulpix Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0077,
    "avg_spawns": 0.77,
    "spawn_time": "01:32",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "037",
      "name": "Vulpix"
    }]
  }, {
    "id": 39,
    "num": "039",
    "name": "Jigglypuff",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    "type": [
      "Normal",
      "Fairy"
    ],
    "typeImg": [
      "images/types/fairy.png"
    ],
    "weaknessesImg": [
      "images/types/steel.png",
      "images/types/poison.png"
    ],
    "description": "Jigglypuff tiene unas cuerdas vocales que ajustan sin problema la longitud de onda de su voz. Este Pokémon usa la habilidad que tiene para cantar con la longitud de onda necesaria para adormecer a su rival.",
    "height": "0.51 m",
    "weight": "5.5 kg",
    "candy": "Jigglypuff Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 0.39,
    "avg_spawns": 39,
    "spawn_time": "08:46",
    "multipliers": [1.85],
    "weaknesses": [
      "Steel",
      "Poison"
    ],
    "next_evolution": [{
      "num": "040",
      "name": "Wigglytuff"
    }]
  }, {
    "id": 40,
    "num": "040",
    "name": "Wigglytuff",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    "type": [
      "Normal",
      "Fairy"
    ],
    "typeImg": [
      "images/types/normal.png",
      "images/types/fairy.png"
    ],
    "weaknessesImg": [
      "images/types/steel.png",
      "images/types/poison.png"
    ],
    "description": "Wigglytuff tiene unos ojos enormes con forma de platillo, que siempre están cubiertos de lágrimas. Si se le metiera algo en el ojo, enseguida se le saldría solo.",
    "height": "0.99 m",
    "weight": "12.0 kg",
    "candy": "Jigglypuff Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.018,
    "avg_spawns": 1.8,
    "spawn_time": "12:28",
    "multipliers": null,
    "weaknesses": [
      "Steel",
      "Poison"
    ],
    "prev_evolution": [{
      "num": "039",
      "name": "Jigglypuff"
    }]
  }, {
    "id": 41,
    "num": "041",
    "name": "Zubat",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    "type": [
      "Poison",
      "Flying"
    ],
    "typeImg": [
      "images/types/poison.png",
      "images/types/flying.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/ice.png",
      "images/types/psychic.png",
      "images/types/rock.png"
    ],
    "description": "Durante el día, Zubat permanece inmóvil y a oscuras. Si este Pokémon pasara mucho tiempo expuesto al sol, correría el peligro de sufrir quemaduras.",
    "height": "0.79 m",
    "weight": "7.5 kg",
    "candy": "Zubat Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 6.52,
    "avg_spawns": 652,
    "spawn_time": "12:28",
    "multipliers": [
      2.6,
      3.67
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "next_evolution": [{
      "num": "042",
      "name": "Golbat"
    }]
  }, {
    "id": 42,
    "num": "042",
    "name": "Golbat",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
    "type": [
      "Poison",
      "Flying"
    ],
    "typeImg": [
      "images/types/poison.png",
      "images/types/flying.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/ice.png",
      "images/types/psychic.png",
      "images/types/rock.png"
    ],
    "description": "A Golbat le encanta chuparles la sangre a los seres vivos. Este Pokémon es más activo en la oscuridad de la noche. Es al caer la noche cuando sale a revolotear y a buscar sangre fresca.",
    "height": "1.60 m",
    "weight": "55.0 kg",
    "candy": "Zubat Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.42,
    "avg_spawns": 42,
    "spawn_time": "02:15",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "041",
      "name": "Zubat"
    }]
  }, {
    "id": 43,
    "num": "043",
    "name": "Oddish",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "description": "Durante el día, Oddish se entierra en el suelo para absorber nutrientes valiéndose de todo el cuerpo. Cuanto más fértil sea el suelo, mayor brillo tendrá en las hojas.",
    "height": "0.51 m",
    "weight": "5.4 kg",
    "candy": "Oddish Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 1.02,
    "avg_spawns": 102,
    "spawn_time": "03:58",
    "multipliers": [1.5],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "044",
      "name": "Gloom"
    }, {
      "num": "045",
      "name": "Vileplume"
    }]
  }, {
    "id": 44,
    "num": "044",
    "name": "Gloom",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "description": "Gloom libera un fétido olor por el pistilo de la flor. Cuando está en peligro, el hedor se intensifica. Si este Pokémon está tranquilo y no se siente amenazado, no libera el desagradable olor.",
    "height": "0.79 m",
    "weight": "8.6 kg",
    "candy": "Oddish Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.064,
    "avg_spawns": 6.4,
    "spawn_time": "11:33",
    "multipliers": [1.49],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "043",
      "name": "Oddish"
    }],
    "next_evolution": [{
      "num": "045",
      "name": "Vileplume"
    }]
  }, {
    "id": 45,
    "num": "045",
    "name": "Vileplume",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "description": "El polen que contienen las esporas tóxicas de Vileplume causa unos ataques de alergia muy agudos. Por eso, no es aconsejable acercarse a ninguna flor selvática, por muy bonita que sea.",
    "height": "1.19 m",
    "weight": "18.6 kg",
    "candy": "Oddish Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0097,
    "avg_spawns": 0.97,
    "spawn_time": "23:58",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "043",
      "name": "Oddish"
    }, {
      "num": "044",
      "name": "Gloom"
    }]
  }, {
    "id": 46,
    "num": "046",
    "name": "Paras",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    "type": [
      "Bug",
      "Grass"
    ],
    "typeImg": [
      "images/types/bug.png",
      "images/types/grass.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/poison.png",
      "images/types/flying.png",
      "images/types/bug.png",
      "images/types/rock.png"
    ],
    "description": "Paras lleva dos setas parásitas a cuestas llamadas tochukaso. Estas crecen alimentándose de los nutrientes de este Pokémon de tipo Bicho y Planta que les sirve de huésped. Las setas se usan como elixir de vida.",
    "height": "0.30 m",
    "weight": "5.4 kg",
    "candy": "Paras Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.36,
    "avg_spawns": 236,
    "spawn_time": "01:42",
    "multipliers": [2.02],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Rock"
    ],
    "next_evolution": [{
      "num": "047",
      "name": "Parasect"
    }]
  }, {
    "id": 47,
    "num": "047",
    "name": "Parasect",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
    "type": [
      "Bug",
      "Grass"
    ],
    "typeImg": [
      "images/types/bug.png",
      "images/types/grass.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/poison.png",
      "images/types/flying.png",
      "images/types/bug.png",
      "images/types/rock.png"
    ],
    "description": "Parasect es conocido por destruir en plaga grandes árboles, absorbiendo los nutrientes que tienen en la parte baja del tronco y las raíces. Cuando un árbol azotado por la plaga muere, los Parasect van a por el siguiente al instante.",
    "height": "0.99 m",
    "weight": "29.5 kg",
    "candy": "Paras Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.074,
    "avg_spawns": 7.4,
    "spawn_time": "01:22",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "046",
      "name": "Paras"
    }]
  }, {
    "id": 48,
    "num": "048",
    "name": "Venonat",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "typeImg": [
      "images/types/bug.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/rock.png"
    ],
    "description": "Dicen que durante su evolución Venonat desarrolló una fina capa de espeso pelo alrededor de todo el cuerpo para protegerse. Tiene unos ojos tan grandes que no hay presa que le pase desapercibida.",
    "height": "0.99 m",
    "weight": "30.0 kg",
    "candy": "Venonat Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.28,
    "avg_spawns": 228,
    "spawn_time": "02:31",
    "multipliers": [
      1.86,
      1.9
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "next_evolution": [{
      "num": "049",
      "name": "Venomoth"
    }]
  }, {
    "id": 49,
    "num": "049",
    "name": "Venomoth",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
    "type": [
      "Bug",
      "Poison"
    ],
    "typeImg": [
      "images/types/bug.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/rock.png"
    ],
    "descripton": "Venomoth es nocturno, solo actúa en la oscuridad. Su alimento preferido son los pequeños insectos que se concentran cerca de los focos de luz en la oscuridad de la noche.",
    "height": "1.50 m",
    "weight": "12.5 kg",
    "candy": "Venonat Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.072,
    "avg_spawns": 7.2,
    "spawn_time": "23:40",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "048",
      "name": "Venonat"
    }]
  }, {
    "id": 50,
    "num": "050",
    "name": "Diglett",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    "type": [
      "Ground"
    ],
    "typeImg": [
      "images/types/ground.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png"
    ],
    "description": "En la mayoría de las granjas se suelen criar Diglett por la sencilla razón de que, excaven donde excaven, dejan la tierra perfectamente labrada para sembrar. El terreno queda listo para plantar ricas verduras.",
    "height": "0.20 m",
    "weight": "0.8 kg",
    "candy": "Diglett Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.40,
    "avg_spawns": 40,
    "spawn_time": "02:22",
    "multipliers": [2.69],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "next_evolution": [{
      "num": "051",
      "name": "Dugtrio"
    }]
  }, {
    "id": 51,
    "num": "051",
    "name": "Dugtrio",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
    "type": [
      "Ground"
    ],
    "typeImg": [
      "images/types/ground.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png"
    ],
    "description": "Los Dugtrio son trillizos que se originaron a partir de un solo cuerpo, por eso piensan de la misma forma. A la hora de excavar, trabajan en equipo y sin descanso.",
    "height": "0.71 m",
    "weight": "33.3 kg",
    "candy": "Dugtrio",
    "egg": "Not in Eggs",
    "spawn_chance": 0.014,
    "avg_spawns": 1.4,
    "spawn_time": "12:37",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "prev_evolution": [{
      "num": "050",
      "name": "Diglett"
    }]
  }, {
    "id": 52,
    "num": "052",
    "name": "Meowth",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    "type": [
      "Normal"
    ],
    "typeImg": [
      "images/types/normal.png"
    ],
    "weaknessesImg": [
      "images/types/fighting.png"
    ],
    "description": "Meowth retrae las afiladas uñas de sus zarpas para caminar a hurtadillas, dando sigilosos pasos para pasar inadvertido. No se sabe muy bien por qué, pero este Pokémon adora las monedas brillantes que resplandecen con la luz.",
    "height": "0.41 m",
    "weight": "4.2 kg",
    "candy": "Meowth Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.86,
    "avg_spawns": 86,
    "spawn_time": "02:54",
    "multipliers": [1.98],
    "weaknesses": [
      "Fighting"
    ],
    "next_evolution": [{
      "num": "053",
      "name": "Persian"
    }]
  }, {
    "id": 53,
    "num": "053",
    "name": "Persian",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
    "type": [
      "Normal"
    ],
    "typeImg": [
      "images/types/normal.png"
    ],
    "weaknessesImg": [
      "images/types/fighting.png"
    ],
    "description": "Persian tiene seis llamativos bigotes que le dan un aspecto feroz. Además, le sirven para detectar el movimiento del aire, delator de la presencia cercana de algún Pokémon. Si se le agarra por los bigotes, se vuelve dócil.",
    "height": "0.99 m",
    "weight": "32.0 kg",
    "candy": "Meowth Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.022,
    "avg_spawns": 2.2,
    "spawn_time": "02:44",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "prev_evolution": [{
      "num": "052",
      "name": "Meowth"
    }]
  }, {
    "id": 54,
    "num": "054",
    "name": "Psyduck",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    "type": [
      "Water"
    ],
    "typeImg": [
      "images/types/water.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "description": "Psyduck tiene un extraño poder, que consiste en generar ondas cerebrales iguales a las que se generan cuando se está dormido. Este descubrimiento levantó una gran polémica entre eruditos.",
    "height": "0.79 m",
    "weight": "19.6 kg",
    "candy": "Psyduck Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.54,
    "avg_spawns": 254,
    "spawn_time": "03:41",
    "multipliers": [2.27],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "055",
      "name": "Golduck"
    }]
  }, {
    "id": 55,
    "num": "055",
    "name": "Golduck",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
    "type": [
      "Water"
    ],
    "typeImg": [
      "images/types/water.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "description": "Golduck alcanza una velocidad de vértigo gracias a las aletas palmípedas de las extremidades y a la forma aerodinámica de su cuerpo. Realmente, la velocidad de este Pokémon supera la de cualquier nadador.",
    "height": "1.70 m",
    "weight": "76.6 kg",
    "candy": "Psyduck Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.087,
    "avg_spawns": 8.7,
    "spawn_time": "23:06",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "054",
      "name": "Psyduck"
    }]
  }, {
    "id": 56,
    "num": "056",
    "name": "Mankey",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
    "type": [
      "Fighting"
    ],
    "typeImg": [
      "images/types/fighting.png"
    ],
    "weaknessesImg": [
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
    "description": "Cuando Mankey empieza a temblar y a respirar con más intensidad, seguro que va a enfadarse. Aunque prever su enfado no sirve de nada porque alcanza un estado de rabia tan rápido que no hay escapatoria.",
    "height": "0.51 m",
    "weight": "28.0 kg",
    "candy": "Mankey Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.92,
    "avg_spawns": 92,
    "spawn_time": "12:52",
    "multipliers": [
      2.17,
      2.28
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "next_evolution": [{
      "num": "057",
      "name": "Primeape"
    }]
  }, {
    "id": 57,
    "num": "057",
    "name": "Primeape",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
    "type": [
      "Fighting"
    ],
    "typeImg": [
      "images/types/fighting.png"
    ],
    "weaknessesImg": [
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
    "description": "uando Primeape se enfada, se le acelera el ritmo cardíaco y se le fortalecen los músculos. Con todo, pierde en inteligencia.",
    "height": "0.99 m",
    "weight": "32.0 kg",
    "candy": "Mankey Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.031,
    "avg_spawns": 3.1,
    "spawn_time": "12:33",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "056",
      "name": "Mankey"
    }]
  }, {
    "id": 58,
    "num": "058",
    "name": "Growlithe",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    "type": [
      "Fire"
    ],
    "typeImg": [
      "images/types/fire.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "description": "Growlithe tiene un sentido del olfato excepcional y una memoria sensitiva tremenda, nunca olvida una esencia. Este Pokémon saca provecho de este don para identificar las sensaciones que tienen otros seres vivos.",
    "height": "0.71 m",
    "weight": "19.0 kg",
    "candy": "Growlithe Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.92,
    "avg_spawns": 92,
    "spawn_time": "03:57",
    "multipliers": [
      2.31,
      2.36
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "059",
      "name": "Arcanine"
    }]
  }, {
    "id": 59,
    "num": "059",
    "name": "Arcanine",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
    "type": [
      "Fire"
    ],
    "typeImg": [
      "images/types/fire.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "description": "Arcanine es conocido por lo veloz que es. Dicen que es capaz de correr 10 000 km en 24 horas. El fuego que arde con vigor en el interior de este Pokémon constituye su fuente de energía.",
    "height": "1.91 m",
    "weight": "155.0 kg",
    "candy": "Growlithe Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "03:11",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "058",
      "name": "Growlithe"
    }]
  }, {
    "id": 60,
    "num": "060",
    "name": "Poliwag",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    "type": [
      "Water"
    ],
    "typeImg": [
      "images/types/water.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "description": "Poliwag tiene una piel muy fina. Tanto que es posible entrever a través de la misma las vísceras en espiral que tiene. La piel, aunque fina, tiene la ventaja de ser flexible y hacer rebotar hasta los colmillos más afilados.",
    "height": "0.61 m",
    "weight": "12.4 kg",
    "candy": "Poliwag Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 2.19,
    "avg_spawns": 219,
    "spawn_time": "03:40",
    "multipliers": [
      1.72,
      1.73
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "061",
      "name": "Poliwhirl"
    }, {
      "num": "062",
      "name": "Poliwrath"
    }]
  }, {
    "id": 61,
    "num": "061",
    "name": "Poliwhirl",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
    "type": [
      "Water"
    ],
    "typeImg": [
      "images/types/water.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "description": "La piel de Poliwhirl está siempre húmeda y lubricada con un fluido viscoso. Gracias a esta película resbaladiza, puede escapar de las garras del enemigo, resbalándosele de las zarpas en pleno combate.",
    "height": "0.99 m",
    "weight": "20.0 kg",
    "candy": "Poliwag Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.13,
    "avg_spawns": 13,
    "spawn_time": "09:14",
    "multipliers": [1.95],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "060",
      "name": "Poliwag"
    }],
    "next_evolution": [{
      "num": "062",
      "name": "Poliwrath"
    }]
  }, {
    "id": 62,
    "num": "062",
    "name": "Poliwrath",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
    "type": [
      "Water",
      "Fighting"
    ],
    "typeImg": [
      "images/types/water.png",
      "images/types/fighting.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
    "description": "Poliwrath tiene unos músculos fornidos y muy desarrollados, por lo que nunca se agota. Es tan fuerte e incansable que cruzar el océano a nado no le supone ningún esfuerzo.",
    "height": "1.30 m",
    "weight": "54.0 kg",
    "candy": "Poliwag Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.011,
    "avg_spawns": 1.1,
    "spawn_time": "01:32",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "060",
      "name": "Poliwag"
    }, {
      "num": "061",
      "name": "Poliwhirl"
    }]
  }, {
    "id": 63,
    "num": "063",
    "name": "Abra",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    "type": [
      "Psychic"
    ],
    "typeImg": [
      "images/types/psychic.png"
    ],
    "weaknessesImg": [
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "description": "Abra duerme 18 horas al día, pero puede detectar a cualquier enemigo que se le acerque mientras duerme. En una situación así, usa Teletransporte para protegerse.",
    "height": "0.89 m",
    "weight": "19.5 kg",
    "candy": "Abra Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 0.42,
    "avg_spawns": 42,
    "spawn_time": "04:30",
    "multipliers": [
      1.36,
      1.95
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "next_evolution": [{
      "num": "064",
      "name": "Kadabra"
    }, {
      "num": "065",
      "name": "Alakazam"
    }]
  }, {
    "id": 64,
    "num": "064",
    "name": "Kadabra",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
    "type": [
      "Psychic"
    ],
    "typeImg": [
      "images/types/psychic.png"
    ],
    "weaknessesImg": [
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "description": "Kadabra emite unas ondas alfa muy particulares que provocan dolores de cabeza a los demás. Solo aquellos que tengan gran poder mental podrán optar a ser Entrenador de este Pokémon.",
    "height": "1.30 m",
    "weight": "56.5 kg",
    "candy": "Abra Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.027,
    "avg_spawns": 2.7,
    "spawn_time": "11:25",
    "multipliers": [1.4],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "063",
      "name": "Abra"
    }],
    "next_evolution": [{
      "num": "065",
      "name": "Alakazam"
    }]
  }, {
    "id": 65,
    "num": "065",
    "name": "Alakazam",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    "type": [
      "Psychic"
    ],
    "typeImg": [
      "images/types/psychic.png"
    ],
    "weaknessesImg": [
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "description": "El cerebro de Alakazam nunca deja de crecer y por eso al cuello le cuesta sostener el peso de la cabeza. Este Pokémon usa sus poderes psicoquinéticos para mantener en alto la cabeza.",
    "height": "1.50 m",
    "weight": "48.0 kg",
    "candy": "Abra Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0073,
    "avg_spawns": 0.73,
    "spawn_time": "12:33",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "prev_evolution": [{
      "num": "063",
      "name": "Abra"
    }, {
      "num": "064",
      "name": "Kadabra"
    }]
  }, {
    "id": 66,
    "num": "066",
    "name": "Machop",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
    "type": [
      "Fighting"
    ],
    "typeImg": [
      "images/types/fighting.png"
    ],
    "weaknessesImg": [
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
    "description": "Gracias a su portentosa musculatura, Machop no se agota por mucho esfuerzo que haga. Este Pokémon es tan fuerte que puede derrotar a cien personas adultas de una sola vez.",
    "height": "0.79 m",
    "weight": "19.5 kg",
    "candy": "Machop Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 0.49,
    "avg_spawns": 49,
    "spawn_time": "01:55",
    "multipliers": [
      1.64,
      1.65
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "next_evolution": [{
      "num": "067",
      "name": "Machoke"
    }, {
      "num": "068",
      "name": "Machamp"
    }]
  }, {
    "id": 67,
    "num": "067",
    "name": "Machoke",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
    "type": [
      "Fighting"
    ],
    "typeImg": [
      "images/types/fighting.png"
    ],
    "weaknessesImg": [
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
    "description": "Los entrenados músculos de Machoke son tan fuertes como el acero. Este Pokémon es tan fuerte que puede levantar con un solo dedo a un luchador de sumo.",
    "height": "1.50 m",
    "weight": "70.5 kg",
    "candy": "Machop Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "10:32",
    "multipliers": [1.7],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "066",
      "name": "Machop"
    }],
    "next_evolution": [{
      "num": "068",
      "name": "Machamp"
    }]
  }, {
    "id": 68,
    "num": "068",
    "name": "Machamp",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
    "type": [
      "Fighting"
    ],
    "typeImg": [
      "images/types/fighting.png"
    ],
    "weaknessesImg": [
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
    "description": "Machamp es tan fuerte que puede derribar lo que quiera. Sin embargo, cuando tiene que realizar una tarea que requiere delicadeza y destreza, se le enredan los brazos. Este Pokémon pasa a la acción sin pensar.",
    "height": "1.60 m",
    "weight": "130.0 kg",
    "candy": "Machop Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0068,
    "avg_spawns": 0.68,
    "spawn_time": "02:55",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "066",
      "name": "Machop"
    }, {
      "num": "067",
      "name": "Machoke"
    }]
  }, {
    "id": 69,
    "num": "069",
    "name": "Bellsprout",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "description": "Bellsprout tiene un cuerpo delgado y flexible que le permite inclinarse y balancearse para esquivar los ataques. Este Pokémon escupe por la boca un fluido corrosivo capaz de hacer que se derrita hasta el hierro.",
    "height": "0.71 m",
    "weight": "4.0 kg",
    "candy": "Bellsprout Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 1.15,
    "avg_spawns": 115,
    "spawn_time": "04:10",
    "multipliers": [1.57],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "070",
      "name": "Weepinbell"
    }, {
      "num": "071",
      "name": "Victreebel"
    }]
  }, {
    "id": 70,
    "num": "070",
    "name": "Weepinbell",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "description": "Weepinbell tiene un gancho a modo de extremidad superior trasera, que usa por la noche para colgarse de una rama y echarse a dormir. Si se mueve mientras duerme, puede acabar en el suelo",
    "height": "0.99 m",
    "weight": "6.4 kg",
    "candy": "Bellsprout Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.072,
    "avg_spawns": 7.2,
    "spawn_time": "09:45",
    "multipliers": [1.59],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "069",
      "name": "Bellsprout"
    }],
    "next_evolution": [{
      "num": "071",
      "name": "Victreebel"
    }]
  }, {
    "id": 71,
    "num": "071",
    "name": "Victreebel",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "typeImg": [
      "images/types/grass.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/psychic.png"
    ],
    "description": "Victreebel tiene una enredadera que le sale de la cabeza y que agita a modo de señuelo para atraer a sus presas y así engullirlas por sorpresa cuando estas se aproximan incautas.",
    "height": "1.70 m",
    "weight": "15.5 kg",
    "candy": "Bellsprout Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0059,
    "avg_spawns": 0.59,
    "spawn_time": "12:19",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "069",
      "name": "Bellsprout"
    }, {
      "num": "070",
      "name": "Weepinbell"
    }]
  }, {
    "id": 72,
    "num": "072",
    "name": "Tentacool",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
    "type": [
      "Water",
      "Poison"
    ],
    "typeImg": [
      "images/types/water.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Tentacool está compuesto en su mayor parte por agua. Si se le saca del mar, se secará y se quedará acartonado. Si este Pokémon se deshidrata, hay que echarlo inmediatamente de vuelta al mar.",
    "height": "0.89 m",
    "weight": "45.5 kg",
    "candy": "Tentacool Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.81,
    "avg_spawns": 81,
    "spawn_time": "03:20",
    "multipliers": [2.52],
    "weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "073",
      "name": "Tentacruel"
    }]
  }, {
    "id": 73,
    "num": "073",
    "name": "Tentacruel",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
    "type": [
      "Water",
      "Poison"
    ],
    "typeImg": [
      "images/types/water.png",
      "images/types/poison.png"
    ],
    "weaknessesImg": [
      "images/types/electric.png",
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "description": "Tentacruel tiene unas enormes esferas rojas en la cabeza, que brillan antes de lanzar una descarga ultrasónica a lo que le rodea. Este estallido crea unas olas tremendas a su alrededor.",
    "height": "1.60 m",
    "weight": "55.0 kg",
    "candy": "Tentacool Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.082,
    "avg_spawns": 8.2,
    "spawn_time": "23:36",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "072",
      "name": "Tentacool"
    }]
  }, {
    "id": 74,
    "num": "074",
    "name": "Geodude",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    "type": [
      "Rock",
      "Ground"
    ],
    "typeImg": [
      "images/types/rock.png",
      "images/types/ground.png"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png",
      "images/types/fighting.png",
      "images/types/ground.png",
      "images/types/steel.png",
    ],
    "description": "Cuanto más larga es la vida de Geodude, mayor es el desgaste y la erosión que sufre, y más redondeada la forma que va adquiriendo. Sin embargo, el corazón permanece siempre duro, rocoso y tosco.",
    "height": "0.41 m",
    "weight": "20.0 kg",
    "candy": "Geodude Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 1.19,
    "avg_spawns": 119,
    "spawn_time": "12:40",
    "multipliers": [
      1.75,
      1.76
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "next_evolution": [{
      "num": "075",
      "name": "Graveler"
    }, {
      "num": "076",
      "name": "Golem"
    }]
  }, {
    "id": 75,
    "num": "075",
    "name": "Graveler",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
    "type": [
      "Rock",
      "Ground"
    ],
    "typeImg":[
      "images/types/rock.png",
      "images/types/ground.png"
    ],
    "description": "Graveler crece aliment·ndose a base de piedras. Y, seg˙n parece, las prefiere cubiertas de musgo. Cada dÌa se abre camino comiÈndose una tonelada de rocas.",	
    "height": "0.99 m",
    "weight": "105.0 kg",
    "candy": "Geodude Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.071,
    "avg_spawns": 7.1,
    "spawn_time": "04:53",
    "multipliers": [
      1.64,
      1.72
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png",
      "images/types/fighting.png",
      "images/types/ground.png",
      "images/types/steel.png"
    ],
    "prev_evolution": [
      {
        "num": "074",
        "name": "Geodude"
      }
    ],
    "next_evolution": [
      {
        "num": "076",
        "name": "Golem"
      }
    ]
  },
  {
    "id": 76,
    "num": "076",
    "name": "Golem",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
    "type": [
      "Rock",
      "Ground"
    ],
    "typeImg": [
      "images/types/rock.png",
      "images/types/ground.png"
    ],
    "description":"Golem vive en las montaÒas. Si se produce un gran terremoto, estos PokÈmon descienden rodando en masa por las laderas.",
    "height": "1.40 m",
    "weight": "300.0 kg",
    "candy": "Geodude Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0047,
    "avg_spawns": 0.47,
    "spawn_time": "12:16",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "weaknessesImg": [
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png",
      "images/types/fighting.png",
      "images/types/ground.png",
      "images/types/steel.png"
    ],
    "prev_evolution": [
      {
        "num": "074",
        "name": "Geodude"
      },
      {
        "num": "075",
        "name": "Graveler"
      }
    ]
  },
  {
    "id": 77,
    "num": "077",
    "name": "Ponyta",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
    "type": [
      "Fire"
    ],
    "typeImg":[
      "images/types/fire.png"
    ],
    "description": "Al nacer, Ponyta es muy dÈbil y apenas puede ponerse en pie. Con todo, se va haciendo m·s fuerte al tropezarse y caerse en su intento por seguir a sus progenitores.", 
    "height": "0.99 m",
    "weight": "30.0 kg",
    "candy": "Ponyta Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.51,
    "avg_spawns": 51,
    "spawn_time": "02:50",
    "multipliers": [
      1.48,
      1.5
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "next_evolution": [
      {
        "num": "078",
        "name": "Rapidash"
      }
    ]
  },
  {
    "id": 78,
    "num": "078",
    "name": "Rapidash",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
    "type": [
      "Fire"
    ],
    "typeImg":[
      "images/types/fire.png"
    ],
    "description" : "A Rapidash se le suele ver trotando sin rumbo fijo por los campos y llanos. Cuando tiene que ir a alg˙n sitio en concreto, se le aviva el fuego de las melenas y emprende el galope llameante llegando a los 240 km/h.",
    "height": "1.70 m",
    "weight": "95.0 kg",
    "candy": "Ponyta Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.011,
    "avg_spawns": 1.1,
    "spawn_time": "04:00",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "prev_evolution": [
      {
        "num": "077",
        "name": "Ponyta"
      }
    ]
  },
  {
    "id": 79,
    "num": "079",
    "name": "Slowpoke",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
    "type": [
      "Water",
      "Psychic"
    ],
    "typeImg":[
      "images/types/water.png",
      "images/types/psychic.png"
    ],
    "description": "Slowpoke usa la cola para atrapar a sus presas metiÈndola bajo el agua en las riberas de los rÌos. Con todo, es olvidadizo, se le puede pasar lo que estaba haciendo y quedarse dÌas enteros holgazaneando en la orilla.",
    "height": "1.19 m",
    "weight": "36.0 kg",
    "candy": "Slowpoke Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.05,
    "avg_spawns": 105,
    "spawn_time": "07:12",
    "multipliers": [
      2.21
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "next_evolution": [
      {
        "num": "080",
        "name": "Slowbro"
      }
    ]
  },
  {
    "id": 80,
    "num": "080",
    "name": "Slowbro",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
    "type": [
      "Water",
      "Psychic"
    ],
    "typeImg":[
      "images/types/water.png",
      "images/types/psychic.png"
    ],
    "description": "Slowbro lleva en la cola un Shellder enganchado, sujeto por los dientes. Como Slowbro no puede usar la cola para pescar, se mete en el agua de mala gana en busca de sus presas.",
    "height": "1.60 m",
    "weight": "78.5 kg",
    "candy": "Slowpoke Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.036,
    "avg_spawns": 3.6,
    "spawn_time": "02:56",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "prev_evolution": [
      {
        "num": "079",
        "name": "Slowpoke"
      }
    ]
  },
  {
    "id": 81,
    "num": "081",
    "name": "Magnemite",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
    "type": [
      "Electric",
      "Steel"
    ],
    "typeImg":[
      "images/types/electric.png",
      "images/types/steel.png"
    ],
    "description": "Magnemite se engancha a las lÌneas de tensiÛn para nutrirse de electricidad. Cuando se producen apagones en las casas, es aconsejable revisar el autom·tico y comprobar que no hay PokÈmon de este tipo colgados de la caja de fusibles.",
    "height": "0.30 m",
    "weight": "6.0 kg",
    "candy": "Magnemite Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.71,
    "avg_spawns": 71,
    "spawn_time": "04:04",
    "multipliers": [
      2.16,
      2.17
    ],
    "weaknesses": [
      "Ground",
      "Fire",
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/fire.png",
      "images/types/fighting.png"
    ],
    "next_evolution": [
      {
        "num": "082",
        "name": "Magneton"
      }
    ]
  },
  {
    "id": 82,
    "num": "082",
    "name": "Magneton",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
    "type": [
      "Electric",
      "Steel"
    ],
    "typeImg":[
      "images/types/electric.png",
      "images/types/steel.png"
    ],
    "description": "Magneton emite una fuerte energÌa magnÈtica que causa estragos en los instrumentos mec·nicos. Por ello, en las ciudades se avisa con sirenas cuando hay concentraciones de estos PokÈmon.",
    "height": "0.99 m",
    "weight": "60.0 kg",
    "candy": "Magnemite Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.023,
    "avg_spawns": 2.3,
    "spawn_time": "15:25",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Fire",
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/fire.png",
      "images/types/fighting.png"
    ],
    "prev_evolution": [
      {
        "num": "081",
        "name": "Magnemite"
      }
    ]
  },
  {
    "id": 83,
    "num": "083",
    "name": "Farfetch'd",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "typeImg":[
      "images/types/normal.png",
      "images/types/flying.png"
    ],
    "description": "Al parecer, entre los puerros que suelen llevar los Farfetch'd, los hay mejores y peores. A estos PokÈmon se les ha visto luchar entre ellos por los mejores puerros.",
    "height": "0.79 m",
    "weight": "15.0 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.0212,
    "avg_spawns": 2.12,
    "spawn_time": "01:09",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/rock.png"
    ],
  },
  {
    "id": 84,
    "num": "084",
    "name": "Doduo",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "typeImg":[
      "images/types/normal.png",
      "images/types/flying.png"
    ],
    "description": "Las dos cabezas de Doduo duermen de forma independiente, siempre por turnos. Mientras una duerme, la otra hace de centinela por si aparecen enemigos.",
    "height": "1.40 m",
    "weight": "39.2 kg",
    "candy": "Doduo Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.52,
    "avg_spawns": 52,
    "spawn_time": "05:10",
    "multipliers": [
      2.19,
      2.24
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "next_evolution": [
      {
        "num": "085",
        "name": "Dodrio"
      }
    ]
  },
  {
    "id": 85,
    "num": "085",
    "name": "Dodrio",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "typeImg":[
      "images/types/normal.png",
      "images/types/flying.png"
    ],
    "description": "Seg˙n parece, las cabezas no son las ˙nicas partes del cuerpo que tiene triplicadas. Dodrio tambiÈn tiene tres corazones y tres pares de pulmones. Con esta constituciÛn, puede correr largas distancias sin cansarse.",
    "height": "1.80 m",
    "weight": "85.2 kg",
    "candy": "Doduo Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.22,
    "avg_spawns": 22,
    "spawn_time": "02:12",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "prev_evolution": [
      {
        "num": "084",
        "name": "Doduo"
      }
    ]
  },
  {
    "id": 86,
    "num": "086",
    "name": "Seel",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png",
    ],
    "description": "Seel busca a sus presas en aguas heladas, bajo las capas de hielo. Cuando necesita respirar, abre un agujerito en el hielo con la afilada protuberancia que tiene encima de la cabeza.",
    "height": "1.09 m",
    "weight": "90.0 kg",
    "candy": "Seel Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.28,
    "avg_spawns": 28,
    "spawn_time": "06:46",
    "multipliers": [
      1.04,
      1.96
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "next_evolution": [
      {
        "num": "087",
        "name": "Dewgong"
      }
    ]
  },
  {
    "id": 87,
    "num": "087",
    "name": "Dewgong",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
    "type": [
      "Water",
      "Ice"
    ],
    "typeImg":[
      "images/types/water.png",
      "images/types/ice.png"
    ],
    "description": "A Dewgong le encanta dormitar sobre la frialdad del hielo. Antiguamente, alg˙n que otro marino lo confundiÛ con una sirena al verlo dormido sobre un glaciar.",
    "height": "1.70 m",
    "weight": "120.0 kg",
    "candy": "Seel Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.013,
    "avg_spawns": 1.3,
    "spawn_time": "06:04",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/fighting.png",
      "images/types/rock.png"
    ],
    "prev_evolution": [
      {
        "num": "086",
        "name": "Seel"
      }
    ]
  },
  {
    "id": 88,
    "num": "088",
    "name": "Grimer",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
    "type": [
      "Poison"
    ],
    "typeImg":[
      "images/types/poison.png"
    ],
    "description": "El el·stico cuerpo de lodo de Grimer le permite colarse por cualquier orificio, sea del tamaÒo que sea. Este PokÈmon entra en los bajantes de las cloacas para beberse el agua sucia.",
    "height": "0.89 m",
    "weight": "30.0 kg",
    "candy": "Grimer Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.052,
    "avg_spawns": 5.2,
    "spawn_time": "15:11",
    "multipliers": [
      2.44
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "next_evolution": [
      {
        "num": "089",
        "name": "Muk"
      }
    ]
  },
  {
    "id": 89,
    "num": "089",
    "name": "Muk",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
    "type": [
      "Poison"
    ],
    "typeImg":[
      "images/types/poison.png"
    ],
    "description": "Muk emana por todo el cuerpo un fluido maloliente que obliga a taparse la nariz. Con solo una gota de la sustancia que exuda este PokÈmon, se podrÌa contaminar un estanque.",
    "height": "1.19 m",
    "weight": "30.0 kg",
    "candy": "Grimer Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0031,
    "avg_spawns": 0.31,
    "spawn_time": "01:28",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "prev_evolution": [
      {
        "num": "088",
        "name": "Grimer"
      }
    ]
  },
  {
    "id": 90,
    "num": "090",
    "name": "Shellder",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png"
    ],
    "description": "Por la noche, este PokÈmon usa la ancha lengua que tiene para hacer un agujero en el fondo del mar y echarse a dormir. Mientras duerme, Shellder cierra la concha, pero deja la lengua por fuera.",
    "height": "0.30 m",
    "weight": "4.0 kg",
    "candy": "Shellder Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.52,
    "avg_spawns": 52,
    "spawn_time": "07:39",
    "multipliers": [
      2.65
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "next_evolution": [
      {
        "num": "091",
        "name": "Cloyster"
      }
    ]
  },
  {
    "id": 91,
    "num": "091",
    "name": "Cloyster",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
    "type": [
      "Water",
      "Ice"
    ],
    "typeImg":[
      "images/types/water.png",
      "images/types/ice.png"
    ],
    "description": "Cloyster es capaz de nadar por el mar. Su tÈcnica consiste en tragar agua y expulsarla por el conducto que tiene en la parte trasera. Este mismo sistema es el que usa para lanzar los pinchos que tiene alrededor de la concha.",
    "height": "1.50 m",
    "weight": "132.5 kg",
    "candy": "Shellder Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.015,
    "avg_spawns": 1.5,
    "spawn_time": "02:33",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/fighting.png",
      "images/types/rock.png"
    ],
    "prev_evolution": [
      {
        "num": "090",
        "name": "Shellder"
      }
    ]
  },
  {
    "id": 92,
    "num": "092",
    "name": "Gastly",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
    "type": [
      "Ghost",
      "Poison"
    ],
    "typeImg":[
      "images/types/ghost.png",
      "images/types/poison.png"
    ],
    "description": "Gastly est· compuesto en gran medida de materia gaseosa. Cuando hay viento, el aire arrastra parte de esta materia y el PokÈmon mengua. Suelen agruparse bajo los aleros de las casas para resguardarse del viento.",
    "height": "1.30 m",
    "weight": "0.1 kg",
    "candy": "Gastly Candy",
    "candy_count": 25,
    "egg": "5 km",
    "spawn_chance": 0.79,
    "avg_spawns": 79,
    "spawn_time": "04:21",
    "multipliers": [
      1.78
    ],
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/psychic.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "next_evolution": [
      {
        "num": "093",
        "name": "Haunter"
      },
      {
        "num": "094",
        "name": "Gengar"
      }
    ]
  },
  {
    "id": 93,
    "num": "093",
    "name": "Haunter",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
    "type": [
      "Ghost",
      "Poison"
    ],
    "typeImg":[
      "images/types/ghost.png",
      "images/types/poison.png"
    ],
    "description": "Haunter es un PokÈmon peligroso. Si se ve alguno flotando en la oscuridad y haciendo seÒas, conviene no acercarse. Este PokÈmon intentar· robarle la energÌa a su presa a base de lametazos.",
    "height": "1.60 m",
    "weight": "0.1 kg",
    "candy": "Gastly Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.052,
    "avg_spawns": 5.2,
    "spawn_time": "00:10",
    "multipliers": [
      1.56,
      1.8
    ],
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/psychic.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "prev_evolution": [
      {
        "num": "092",
        "name": "Gastly"
      }
    ],
    "next_evolution": [
      {
        "num": "094",
        "name": "Gengar"
      }
    ]
  },
  {
    "id": 94,
    "num": "094",
    "name": "Gengar",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    "type": [
      "Ghost",
      "Poison"
    ],
    "typeImg":[
      "images/types/ghost.png",
      "images/types/poison.png"
    ],
    "description": "Si alguien ve que su sombra le adelanta de repente en una noche oscura, es muy probable que lo que estÈ viendo no sea su sombra, sino a un Gengar haciÈndose pasar por la misma.",
    "height": "1.50 m",
    "weight": "40.5 kg",
    "candy": "Gastly Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0067,
    "avg_spawns": 0.67,
    "spawn_time": "03:55",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/psychic.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "prev_evolution": [
      {
        "num": "092",
        "name": "Gastly"
      },
      {
        "num": "093",
        "name": "Haunter"
      }
    ]
  },
  {
    "id": 95,
    "num": "095",
    "name": "Onix",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
    "type": [
      "Rock",
      "Ground"
    ],
    "typeImg":[
      "images/types/rock.png",
      "images/types/ground.png"
    ],
    "description": "Onix tiene un im·n en el cerebro, que act˙a como una br˙jula para no perder la orientaciÛn cuando est· cavando t˙neles. A medida que crece, se le redondea y suaviza el cuerpo.",
    "height": "8.79 m",
    "weight": "210.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.10,
    "avg_spawns": 10,
    "spawn_time": "01:18",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png",
      "images/types/fighting.png",
      "images/types/ground.png",
      "images/types/steel.png"
    ],
  },
  {
    "id": 96,
    "num": "096",
    "name": "Drowzee",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
    "type": [
      "Psychic"
    ],
    "typeImg":[
      "images/types/psychic.png"
    ],
    "description": "Si a alguien le pica la nariz mientras duerme, seguro que es porque tiene a uno de estos PokÈmon cerca de la almohada intentando sacarle los sueÒos por la nariz para comÈrselos.",
    "height": "0.99 m",
    "weight": "32.4 kg",
    "candy": "Drowzee Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 3.21,
    "avg_spawns": 321,
    "spawn_time": "01:51",
    "multipliers": [
      2.08,
      2.09
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "next_evolution": [
      {
        "num": "097",
        "name": "Hypno"
      }
    ]
  },
  {
    "id": 97,
    "num": "097",
    "name": "Hypno",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    "type": [
      "Psychic"
    ],
    "typeImg":[
      "images/types/psychic.png"
    ],
    "description": "Hypno lleva un pÈndulo en la mano. El balanceo y el brillo que tiene sumen al rival en un estado de hipnosis profundo. Mientras busca a su presa, saca brillo al pÈndulo.",
    "height": "1.60 m",
    "weight": "75.6 kg",
    "candy": "Drowzee Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.10,
    "avg_spawns": 10,
    "spawn_time": "02:17",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "prev_evolution": [
      {
        "num": "096",
        "name": "Drowzee"
      }
    ]
  },
  {
    "id": 98,
    "num": "098",
    "name": "Krabby",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png"
    ],
    "description": "Krabby vive en la playa, enterrado en agujeros en la arena. Cuando en las playas de arena fina escasea la comida, es com˙n ver a estos PokÈmon echando un pulso panza contra panza en defensa de su territorio.",
    "height": "0.41 m",
    "weight": "6.5 kg",
    "candy": "Krabby Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.12,
    "avg_spawns": 212,
    "spawn_time": "03:33",
    "multipliers": [
      2.36,
      2.4
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknesses":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "next_evolution": [
      {
        "num": "099",
        "name": "Kingler"
      }
    ]
  },
  {
    "id": 99,
    "num": "099",
    "name": "Kingler",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png"
    ],
    "description": "Kingler tiene una pinza enorme y descomunal que usa agit·ndola en el aire para comunicarse con otros. Lo malo es que, al pesarle tanto, se cansa enseguida.",
    "height": "1.30 m",
    "weight": "60.0 kg",
    "candy": "Krabby Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.062,
    "avg_spawns": 6.2,
    "spawn_time": "03:44",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "prev_evolution": [
      {
        "num": "098",
        "name": "Krabby"
      }
    ]
  },
  {
    "id": 100,
    "num": "100",
    "name": "Voltorb",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
    "type": [
      "Electric"
    ],
    "typeImg":[
      "images/types/electric.png"
    ],
    "description": "Voltorb fue visto por primera vez en una empresa encargada de comercializar PokÈ Balls. La conexiÛn que existe entre aquella primera vez que se le vio y el hecho de que se parece mucho a una PokÈ Ball sigue siendo un misterio.",
    "height": "0.51 m",
    "weight": "10.4 kg",
    "candy": "Voltorb Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.65,
    "avg_spawns": 65,
    "spawn_time": "04:36",
    "multipliers": [
      2.01,
      2.02
    ],
    "weaknesses": [
      "Ground"
    ],
    "weaknessesImg":[
      "images/types/ground.png"
    ],
    "next_evolution": [
      {
        "num": "101",
        "name": "Electrode"
      }
    ]
  },
  {
    "id": 101,
    "num": "101",
    "name": "Electrode",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
    "type": [
      "Electric"
    ],
    "typeImg":[
      "images/types/electric.png"
    ],
    "description": "Los Electrode se alimentan de la electricidad de la atmÛsfera. En dÌas de tormenta con rayos, es f·cil verlos explotando por todos lados tras haber consumido demasiada electricidad.",
    "height": "1.19 m",
    "weight": "66.6 kg",
    "candy": "Voltorb Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "04:10",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ],
    "weaknessesImg":[
      "images/types/ground.png"
    ],
    "prev_evolution": [
      {
        "num": "100",
        "name": "Voltorb"
      }
    ]
  },
  {
    "id": 102,
    "num": "102",
    "name": "Exeggcute",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
    "type": [
      "Grass",
      "Psychic"
    ],
    "typeImg":[
      "images/types/grass.png",
      "images/types/psychic.png"
    ],
    "description": "Este PokÈmon est· compuesto de seis huevos que forman una tupida piÒa que va girando. Cuando se empiezan a resquebrajar las c·scaras, no hay duda de que Exeggcute est· a punto de evolucionar.",
    "height": "0.41 m",
    "weight": "2.5 kg",
    "candy": "Exeggcute Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.78,
    "avg_spawns": 78,
    "spawn_time": "09:09",
    "multipliers": [
      2.7,
      3.18
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/poison.png",
      "images/types/flying.png",
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "next_evolution": [
      {
        "num": "103",
        "name": "Exeggutor"
      }
    ]
  },
  {
    "id": 103,
    "num": "103",
    "name": "Exeggutor",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    "type": [
      "Grass",
      "Psychic"
    ],
    "typeImg":[
      "images/types/grass.png",
      "images/types/psychic.png"
    ],
    "description": "Exeggutor es originario del trÛpico. Cuando se expone a un sol intenso, le empiezan a crecer las cabezas. Hay quien dice que, cuando las cabezas caen al suelo, se unen para formar un Exeggcute.",
    "height": "2.01 m",
    "weight": "120.0 kg",
    "candy": "Exeggcute Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.014,
    "avg_spawns": 1.4,
    "spawn_time": "12:34",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/poison.png",
      "images/types/flying.png",
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "prev_evolution": [
      {
        "num": "102",
        "name": "Exeggcute"
      }
    ]
  },
  {
    "id": 104,
    "num": "104",
    "name": "Cubone",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    "type": [
      "Ground"
    ],
    "typeImg":[
      "images/types/ground.png"
    ],
    "description": "A Cubone le ahoga la pena porque no volver· a ver jam·s a su madre. La luna le recuerda a veces a ella, y se pone a llorar. Los churretes que tiene en el cr·neo que lleva puesto son debidos a las l·grimas que derrama.",
    "height": "0.41 m",
    "weight": "6.5 kg",
    "candy": "Cubone Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.61,
    "avg_spawns": 61,
    "spawn_time": "01:51",
    "multipliers": [
      1.67
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png"
    ],
    "next_evolution": [
      {
        "num": "105",
        "name": "Marowak"
      }
    ]
  },
  {
    "id": 105,
    "num": "105",
    "name": "Marowak",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
    "type": [
      "Ground"
    ],
    "typeImg":[
      "images/types/ground.png"
    ],
    "description": "Marowak es la forma evolucionada de Cubone. Es m·s fuerte porque ha superado la pena por la pÈrdida de su madre. El ·nimo de este PokÈmon, ya curtido y fortalecido, no es muy f·cil de alterar.",
    "height": "0.99 m",
    "weight": "45.0 kg",
    "candy": "Cubone Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "03:59",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png"
    ],
    "prev_evolution": [
      {
        "num": "104",
        "name": "Cubone"
      }
    ]
  },
  {
    "id": 106,
    "num": "106",
    "name": "Hitmonlee",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
    "type": [
      "Fighting"
    ],
    "typeImg":[
      "images/types/fighting.png"
    ],
    "description": "Hitmonlee tiene la facilidad de encoger y estirar las patas. Con extremidades tan flexibles, propina unas patadas demoledoras. Tras la lucha, se masajea las piernas y relaja los m˙sculos para descansar.",
    "height": "1.50 m",
    "weight": "49.8 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "03:59",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "weaknessesImg":[
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
  },
  {
    "id": 107,
    "num": "107",
    "name": "Hitmonchan",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
    "type": [
      "Fighting"
    ],
    "typeImg":[
      "images/types/fighting.png"
    ],
    "description": "Dicen que Hitmonchan tiene el mismo Ìmpetu que un boxeador entren·ndose para un campeonato mundial. Este PokÈmon tiene un espÌritu indomable que nunca se doblega ante la adversidad.",	
    "height": "1.40 m",
    "weight": "50.2 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.022,
    "avg_spawns": 2.2,
    "spawn_time": "05:58",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "weaknessesImg":[
      "images/types/flying.png",
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
  },
  {
    "id": 108,
    "num": "108",
    "name": "Lickitung",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
    "type": [
      "Normal"
    ],
    "typeImg":[
      "images/types/normal.png"
    ],
    "description": "Cada vez que Lickitung se encuentra con algo que no conoce, le da un lametazo. Es la forma que tiene de memorizar las cosas, por la textura y el sabor. No soporta los sabores ·cidos.",
    "height": "1.19 m",
    "weight": "65.5 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.011,
    "avg_spawns": 1.1,
    "spawn_time": "02:46",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/fighting.png"
    ],
  },
  {
    "id": 109,
    "num": "109",
    "name": "Koffing",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
    "type": [
      "Poison"
    ],
    "typeImg":[
      "images/types/poison.png"
    ],
    "description": "Si Koffing se pone nervioso, aumenta el nivel de toxicidad de los gases que tiene y los expulsa por todo el cuerpo. TambiÈn suele hincharse mucho hasta llegar a explotar.",
    "height": "0.61 m",
    "weight": "1.0 kg",
    "candy": "Koffing Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.20,
    "avg_spawns": 20,
    "spawn_time": "08:16",
    "multipliers": [
      1.11
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "next_evolution": [
      {
        "num": "110",
        "name": "Weezing"
      }
    ]
  },
  {
    "id": 110,
    "num": "110",
    "name": "Weezing",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
    "type": [
      "Poison"
    ],
    "typeImg":[
      "images/types/poison.png"
    ],
    "description": "A Weezing le encantan los gases que emanan de los desperdicios que quedan en la cocina. Este PokÈmon busca casas sucias y descuidadas para crear su hogar. De noche, cuando los habitantes de la casa duermen, va a por la basura.",
    "height": "1.19 m",
    "weight": "9.5 kg",
    "candy": "Koffing Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.016,
    "avg_spawns": 1.6,
    "spawn_time": "12:17",
    "multipliers": null,
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "weaknessesImg":[
      "images/types/ground.png",
      "images/types/psychic.png"
    ],
    "prev_evolution": [
      {
        "num": "109",
        "name": "Koffing"
      }
    ]
  },
  {
    "id": 111,
    "num": "111",
    "name": "Rhyhorn",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
    "type": [
      "Ground",
      "Rock"
    ],
    "typeImg":[
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "description": "Rhyhorn corre en lÌnea recta arrasando todo lo que encuentra en su camino. Aun estrell·ndose de cabeza contra un bloque de acero, no se verÌa afectado; a lo sumo, notarÌa algo de dolor al dÌa siguiente.",
    "height": "0.99 m",
    "weight": "115.0 kg",
    "candy": "Rhyhorn Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.63,
    "avg_spawns": 63,
    "spawn_time": "03:21",
    "multipliers": [
      1.91
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png",
      "images/types/fighting.png",
      "images/types/ground.png",
      "images/types/steel.png"
    ],
    "next_evolution": [
      {
        "num": "112",
        "name": "Rhydon"
      }
    ]
  },
  {
    "id": 112,
    "num": "112",
    "name": "Rhydon",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
    "type": [
      "Ground",
      "Rock"
    ],
    "typeImg":[
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "description": "Rhydon tiene un cuerno capaz de horadar hasta un diamante en bruto y con una sacudida de la cola puede derribar un edificio. La piel de este PokÈmon es muy fuerte; ni los disparos de un caÒÛn le araÒarÌan.",
    "height": "1.91 m",
    "weight": "120.0 kg",
    "candy": "Rhyhorn Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.022,
    "avg_spawns": 2.2,
    "spawn_time": "05:50",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/grass.png",
      "images/types/ice.png",
      "images/types/fighting.png",
      "images/types/ground.png",
      "images/types/steel.png"
    ],
    "prev_evolution": [
      {
        "num": "111",
        "name": "Rhyhorn"
      }
    ]
  },
  {
    "id": 113,
    "num": "113",
    "name": "Chansey",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
    "type": [
      "Normal"
    ],
    "typeImg":[
      "images/types/normal.png"
    ],
    "description": "Chansey pone a diario huevos con un valor nutritivo altÌsimo. Est·n tan ricos que hasta quien no tenga hambre se los comer· en un abrir y cerrar de ojos.",
    "height": "1.09 m",
    "weight": "34.6 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.013,
    "avg_spawns": 1.3,
    "spawn_time": "04:46",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "weaknesses":[
      "images/types/fighting.png"
    ],
  },
  {
    "id": 114,
    "num": "114",
    "name": "Tangela",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
    "type": [
      "Grass"
    ],
    "typeImg":[
      "images/types/grass.png"
    ],
    "description": "A Tangela se le desprenden los tent·culos con facilidad en cuanto se los agarras. Y no solo no le duele, sino que le resulta muy ˙til para escapar r·pido. Adem·s, al dÌa siguiente le crecen otros.",
    "height": "0.99 m",
    "weight": "35.0 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.228,
    "avg_spawns": 22.8,
    "spawn_time": "23:13",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "weaknessesImg":[
      "images/types/fire.png",
      "images/types/ice.png",
      "images/types/poison.png",
      "images/types/flying.png",
      "images/types/bug.png"
    ]
  },
  {
    "id": 115,
    "num": "115",
    "name": "Kangaskhan",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
    "type": [
      "Normal"
    ],
    "typeImg":[
      "images/types/normal.png"
    ],
    "description": "No es recomendable molestar ni intentar atrapar a crÌas de Kangaskhan mientras estÈn jugando, ya que seguro que su madre anda cerca y reaccionar· con enfado y violencia.",
    "height": "2.21 m",
    "weight": "80.0 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.0086,
    "avg_spawns": 0.86,
    "spawn_time": "02:40",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/fighting.png"
    ],
  },
  {
    "id": 116,
    "num": "116",
    "name": "Horsea",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png"
    ],
    "description": "Horsea come insectos pequeÒos y el musgo de las rocas. Si las corrientes del ocÈano cobran fuerza, este PokÈmon se anclar· con la cola a rocas o corales para evitar que las aguas lo arrastren.",
    "height": "0.41 m",
    "weight": "8.0 kg",
    "candy": "Horsea Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.13,
    "avg_spawns": 113,
    "spawn_time": "02:53",
    "multipliers": [
      2.23
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "next_evolution": [
      {
        "num": "117",
        "name": "Seadra"
      }
    ]
  },
  {
    "id": 117,
    "num": "117",
    "name": "Seadra",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png"
    ],
    "description": "Seadra se echa a dormir tras abrirse un hueco entre las ramas de los corales. Los pescadores de coral suelen pincharse con las p˙as venenosas de estos PokÈmon si no los ven.",
    "height": "1.19 m",
    "weight": "25.0 kg",
    "candy": "Horsea Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "03:18",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "prev_evolution": [
      {
        "num": "116",
        "name": "Horsea"
      }
    ]
  },
  {
    "id": 118,
    "num": "118",
    "name": "Goldeen",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png"
    ],
    "description": "Goldeen es un bello PokÈmon que mueve con elegancia las aletas en el agua. Con todo, no hay que bajar la guardia, en cualquier momento puede embestir con el cuerno.",
    "height": "0.61 m",
    "weight": "15.0 kg",
    "candy": "Goldeen Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.18,
    "avg_spawns": 218,
    "spawn_time": "03:14",
    "multipliers": [
      2.15,
      2.2
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "next_evolution": [
      {
        "num": "119",
        "name": "Seaking"
      }
    ]
  },
  {
    "id": 119,
    "num": "119",
    "name": "Seaking",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/electric.png"
    ],
    "description": "En otoÒo, se ven ejemplares de Seaking macho danzando en las riberas de los rÌos para cortejar a las hembras. En esta Època, la coloraciÛn de este PokÈmon alcanza sus niveles m·ximos de belleza.",
    "height": "1.30 m",
    "weight": "39.0 kg",
    "candy": "Goldeen Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.08,
    "avg_spawns": 8,
    "spawn_time": "05:21",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "prev_evolution": [
      {
        "num": "118",
        "name": "Goldeen"
      }
    ]
  },
  {
    "id": 120,
    "num": "120",
    "name": "Staryu",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/electric.png"
    ],
    "description": "Staryu posee un Ûrgano central, conocido como su n˙cleo, que brilla con una luz roja. A finales de verano, pueden verse en la playa los n˙cleos de estos PokÈmon brillando como las estrellas del cielo.",
    "height": "0.79 m",
    "weight": "34.5 kg",
    "candy": "Staryu Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.95,
    "avg_spawns": 195,
    "spawn_time": "22:59",
    "multipliers": [
      2.38,
      2.41
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "next_evolution": [
      {
        "num": "121",
        "name": "Starmie"
      }
    ]
  },
  {
    "id": 121,
    "num": "121",
    "name": "Starmie",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
    "type": [
      "Water",
      "Psychic"
    ],
    "typeImg":[
      "images/types/water.png",
      "images/types/psychic.png"
    ],
    "description": "La parte central de Starmie, el n˙cleo brillante, resplandece con siete colores distintos. Debido a su naturaleza luminosa, a este PokÈmon se le ha dado el apelativo de la Gema del Mar.",
    "height": "1.09 m",
    "weight": "80.0 kg",
    "candy": "Staryu Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "06:57",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ],
    "prev_evolution": [
      {
        "num": "120",
        "name": "Staryu"
      }
    ]
  },
  {
    "id": 122,
    "num": "122",
    "name": "Mr. Mime",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
    "type": [
      "Psychic",
      "Fairy",
    ],
    "typeImg":[
      "images/types/psychic.png",
      "images/types/fairy.png"
    ],
    "description": "Mr. Mime es un experto en pantomima. Con sus gestos y movimientos es capaz de convencer a sus espectadores de que algo existe, cuando en realidad no es asÌ. Pero, cuando el p˙blico se lo cree, las ilusiones se hacen realidad.",
    "height": "1.30 m",
    "weight": "54.5 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.0031,
    "avg_spawns": 0.31,
    "spawn_time": "01:51",
    "multipliers": null,
    "weaknesses": [
      "Steel",
      "Ghost",
      "Poison"
    ],
    "weaknessesImg":[
      "images/types/steel.png",
      "images/types/ghost.png",
      "images/types/poison.png"
    ]
  },
  {
    "id": 123,
    "num": "123",
    "name": "Scyther",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
    "type": [
      "Bug",
      "Flying"
    ],
    "typeImg":[
      "images/types/bug.png",
      "images/types/flying.png"
    ],
    "description": "Es espectacular ver lo r·pido que es Scyther. Su increÌble velocidad refuerza el efecto del par de guadaÒas que tiene en los brazos, que ya son de por sÌ contundentes; rebanan gruesos troncos de un tajo.",
    "height": "1.50 m",
    "weight": "56.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.14,
    "avg_spawns": 14,
    "spawn_time": "05:43",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/fire.png",
      "images/types/electric.png",
      "images/types/ice.png",
      "images/types/flying.png",
      "images/types/rock.png"
    ]
  },
  {
    "id": 124,
    "num": "124",
    "name": "Jynx",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
    "type": [
      "Ice",
      "Psychic"
    ],
    "typeImg":[
      "images/types/ice.png",
      "images/types/psychic.png"
    ],
    "description": "Jynx camina con ritmo, balance·ndose y moviendo las caderas como si estuviera bailando. Realiza unos movimientos tan vistosos y atractivos que no hay quien pueda resistirse a mover las caderas.",
    "height": "1.40 m",
    "weight": "40.6 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.35,
    "avg_spawns": 35,
    "spawn_time": "05:41",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Bug",
      "Rock",
      "Ghost",
      "Dark",
      "Steel"
    ],
    "weaknessesImg":[
      "images/types/fire.png",
      "images/types/bug.png",
      "images/types/rock.png",
      "images/types/ghost.png",
      "images/types/dark.png",
      "images/types/steel.png"
    ]
  },
  {
    "id": 125,
    "num": "125",
    "name": "Electabuzz",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    "type": [
      "Electric"
    ],
    "typeImg":[
      "images/types/electric.png"
    ],
    "description": "Al desatarse una tormenta, bandadas de estos PokÈmon se enfrentan entre sÌ para ver quiÈn alcanza antes sitios altos en los que suelan caer rayos. Hay ciudades que usan Electabuzz en lugar de pararrayos.",
    "height": "1.09 m",
    "weight": "30.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.074,
    "avg_spawns": 7.4,
    "spawn_time": "04:28",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ],
    "weaknessesImg":[
      "images/types/ground.png"
    ]
  },
  {
    "id": 126,
    "num": "126",
    "name": "Magmar",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    "type": [
      "Fire"
    ],
    "typeImg":[
      "images/types/fire.png"
    ],
    "description": "Al luchar, Magmar expulsa violentas llamas por todo el cuerpo para intimidar a su rival. Estos estallidos de fuego crean ondas de calor que abrasan la hierba y los ·rboles que haya en las proximidades.",
    "height": "1.30 m",
    "weight": "44.5 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.10,
    "avg_spawns": 10,
    "spawn_time": "20:36",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
  },
  {
    "id": 127,
    "num": "127",
    "name": "Pinsir",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
    "type": [
      "Bug"
    ],
    "typeImg":[
      "images/types/bug.png"
    ],
    "description": "Pinsir es sorprendentemente fuerte. Puede agarrar con los cuernos a un rival que pese el doble que Èl y levantarlo por los aires. En zonas frÌas, los movimientos de este PokÈmon se vuelven lentos.",
    "height": "1.50 m",
    "weight": "55.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.99,
    "avg_spawns": 99,
    "spawn_time": "03:25",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/fire.png",
      "images/types/flying.png",
      "images/types/rock.png"
    ]
  },
  {
    "id": 128,
    "num": "128",
    "name": "Tauros",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
    "type": [
      "Normal"
    ],
    "typeImg":[
      "images/types/normal.png"
    ],
    "description": "Este PokÈmon no est· contento a menos que estÈ continuamente de aquÌ para all·. Si no hay rival que luche contra Tauros, se estampa contra ·rboles grandes para calmarse y los embiste para echarlos abajo.",
    "height": "1.40 m",
    "weight": "88.4 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.12,
    "avg_spawns": 12,
    "spawn_time": "00:37",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/fighting.png"
    ]
  },
  {
    "id": 129,
    "num": "129",
    "name": "Magikarp",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png"
    ],
    "description": "Magikarp es el triste ejemplo de un PokÈmon capaz ˙nicamente de saltar y salpicar. Esta conducta llevÛ a cientÌficos a estudiarlo en profundidad.",
    "height": "0.89 m",
    "weight": "10.0 kg",
    "candy": "Magikarp Candy",
    "candy_count": 400,
    "egg": "2 km",
    "spawn_chance": 4.78,
    "avg_spawns": 478,
    "spawn_time": "14:26",
    "multipliers": [
      10.1,
      11.8
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "next_evolution": [
      {
        "num": "130",
        "name": "Gyarados"
      }
    ]
  },
  {
    "id": 130,
    "num": "130",
    "name": "Gyarados",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    "type": [
      "Water",
      "Flying"
    ],
    "typeImg":[
      "images/types/water.png",
      "images/types/flying.png"
    ],
    "description": "Cuando Magikarp evoluciona y se convierte en Gyarados, sufre un cambio estructural en las cÈlulas del cerebro. Dicen que esa transformaciÛn es la causa de la naturaleza violenta y salvaje de este PokÈmon.",
    "height": "6.50 m",
    "weight": "235.0 kg",
    "candy": "Magikarp Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0032,
    "avg_spawns": 0.32,
    "spawn_time": "02:15",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/rock.png"
    ],
    "prev_evolution": [
      {
        "num": "129",
        "name": "Magikarp"
      }
    ]
  },
  {
    "id": 131,
    "num": "131",
    "name": "Lapras",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    "type": [
      "Water",
      "Ice"
    ],
    "typeImg":[
      "images/types/water.png",
      "images/types/ice.png"
    ],
    "description": "Por culpa de la gente, Lapras est· casi en extinciÛn. Dicen que, al anochecer, se pone a cantar quejicoso mientras busca a los miembros de su especie que puedan quedar.",
    "height": "2.49 m",
    "weight": "220.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.006,
    "avg_spawns": 0.6,
    "spawn_time": "08:59",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/fighting.png",
      "images/types/rock.png"
    ]
  },
  {
    "id": 132,
    "num": "132",
    "name": "Ditto",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    "type": [
      "Normal"
    ],
    "typeImg":[
      "images/types/normal.png"
    ],
    "description": "Ditto reorganiza la estructura de sus cÈlulas para adoptar otras formas. Pero, como intente transformarse en algo gui·ndose por los datos que tenga almacenados en la memoria, habr· detalles que se le escapen.",
    "height": "0.30 m",
    "weight": "4.0 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/fighting.png"
    ]
  },
  {
    "id": 133,
    "num": "133",
    "name": "Eevee",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    "type": [
      "Normal"
    ],
    "typeImg":[
      "images/types/normal.png"
    ],
    "description": "La configuraciÛn genÈtica de Eevee le permite mutar y adaptarse enseguida a cualquier medio en el que viva. La evoluciÛn de este PokÈmon suele ser posible gracias a las radiaciones emitidas por varias piedras.",
    "height": "0.30 m",
    "weight": "6.5 kg",
    "candy": "Eevee Candy",
    "candy_count": 25,
    "egg": "10 km",
    "spawn_chance": 2.75,
    "avg_spawns": 275,
    "spawn_time": "05:32",
    "multipliers": [
      2.02,
      2.64
    ],
    "weaknesses": [
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/fighting.png"
    ],
    "next_evolution": [
      {
        "num": "134",
        "name": "Vaporeon"
      },
      {
        "num": "135",
        "name": "Jolteon"
      },
      {
        "num": "136",
        "name": "Flareon"
      }
    ]
  },
  {
    "id": 134,
    "num": "134",
    "name": "Vaporeon",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
    "type": [
      "Water"
    ],
    "typeImg":[
      "images/types/water.png"
    ],
    "description": "Vaporeon sufriÛ una mutaciÛn repentina y desarrollÛ aletas y branquias que le permiten vivir bajo el agua. Asimismo, este PokÈmon tiene la habilidad de controlar las aguas.",
    "height": "0.99 m",
    "weight": "29.0 kg",
    "candy": "Eevee Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.014,
    "avg_spawns": 1.4,
    "spawn_time": "10:54",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png"
    ],
    "prev_evolution": [
      {
        "num": "133",
        "name": "Eevee"
      }
    ]
  },
  {
    "id": 135,
    "num": "135",
    "name": "Jolteon",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
    "type": [
      "Electric"
    ],
    "typeImg":[
      "images/types/electric.png"
    ],
    "description": "Las cÈlulas de Jolteon generan un nivel bajo de electricidad, cuya intensidad aumenta con la electricidad est·tica que acumula en un pelaje formado por agujas cargadas de electricidad. Esta caracterÌstica le permite lanzar rayos.",
    "height": "0.79 m",
    "weight": "24.5 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "02:30",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ],
    "weaknessesImg":[
      "images/types/ground.png"
    ],
    "prev_evolution": [
      {
        "num": "133",
        "name": "Eevee"
      }
    ]
  },
  {
    "id": 136,
    "num": "136",
    "name": "Flareon",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    "type": [
      "Fire"
    ],
    "typeImg":[
      "images/types/fire.png"
    ],
    "description": "La suavidad del pelaje de Flareon tiene una funciÛn clara: libera calor para que el PokÈmon no se asfixie. La temperatura corporal de este PokÈmon puede alcanzar los 900 ∞C.",
    "height": "0.89 m",
    "weight": "25.0 kg",
    "candy": "Eevee Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "07:02",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/ground.png",
      "images/types/rock.png"
    ],
    "prev_evolution": [
      {
        "num": "133",
        "name": "Eevee"
      }
    ]
  },
  {
    "id": 137,
    "num": "137",
    "name": "Porygon",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
    "type": [
      "Normal"
    ],
    "typeImg":[
      "images/types/normal.png"
    ],
    "description": "Porygon es capaz de convertirse otra vez en datos inform·ticos y de entrar en el ciberespacio. Tiene protecciÛn anticopia, asÌ que es imposible duplicarlo.",
    "height": "0.79 m",
    "weight": "36.5 kg",
    "candy": "None",
    "egg": "5 km",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "02:49",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/fighting.png"
    ]
  },
  {
    "id": 138,
    "num": "138",
    "name": "Omanyte",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
    "type": [
      "Rock",
      "Water"
    ],
    "typeImg":[
      "images/types/rock.png",
      "images/types/water.png"
    ],
    "description": "Omanyte es uno de esos PokÈmon ancestrales que se extinguieron hace muchÌsimo tiempo y que la gente ha recuperado a partir de fÛsiles. Si un enemigo le ataca, se esconder· dentro de la dura concha que tiene.",
    "height": "0.41 m",
    "weight": "7.5 kg",
    "candy": "Omanyte Candy",
    "candy_count": 50,
    "egg": "10 km",
    "spawn_chance": 0.14,
    "avg_spawns": 14,
    "spawn_time": "10:23",
    "multipliers": [
      2.12
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/fighting.png",
      "images/types/ground.png"
    ],
    "next_evolution": [
      {
        "num": "139",
        "name": "Omastar"
      }
    ]
  },
  {
    "id": 139,
    "num": "139",
    "name": "Omastar",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
    "type": [
      "Rock",
      "Water"
    ],
    "typeImg":[
      "images/types/rock.png",
      "images/types/water.png"
    ],
    "description": "Omastar usa los tent·culos para atrapar a su presa. Se cree que el motivo de su extinciÛn fue el tamaÒo y el peso que llegÛ a alcanzar la concha que lleva a cuestas, lo que le entorpeciÛ y ralentizÛ los movimientos.",
    "height": "0.99 m",
    "weight": "35.0 kg",
    "candy": "None",
    "egg": "Omanyte Candy",
    "spawn_chance": 0.0061,
    "avg_spawns": 0.61,
    "spawn_time": "05:04",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/fighting.png",
      "images/types/ground.png"
    ],
    "prev_evolution": [
      {
        "num": "138",
        "name": "Omanyte"
      }
    ]
  },
  {
    "id": 140,
    "num": "140",
    "name": "Kabuto",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
    "type": [
      "Rock",
      "Water"
    ],
    "typeImg":[
      "images/types/rock.png",
      "images/types/water.png"
    ],
    "description": "Kabuto es un PokÈmon regenerado a partir de un fÛsil, aunque, en raras ocasiones, se han encontrado casos de ejemplares vivos en estado salvaje. En 300 millones de aÒos, este PokÈmon no ha cambiado en nada.",
    "height": "0.51 m",
    "weight": "11.5 kg",
    "candy": "Kabuto Candy",
    "candy_count": 50,
    "egg": "10 km",
    "spawn_chance": 0.10,
    "avg_spawns": 10,
    "spawn_time": "00:05",
    "multipliers": [
      1.97,
      2.37
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/fighting.png",
      "images/types/ground.png"
    ],
    "next_evolution": [
      {
        "num": "141",
        "name": "Kabutops"
      }
    ]
  },
  {
    "id": 141,
    "num": "141",
    "name": "Kabutops",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
    "type": [
      "Rock",
      "Water"
    ],
    "typeImg":[
      "images/types/rock.png",
      "images/types/water.png"
    ],
    "description": "Hace mucho tiempo, Kabutops buceaba para atrapar a sus presas. Parece ser que en alg˙n momento cambiÛ de h·bitat y se adaptÛ a vivir en tierra firme. La transformaciÛn que se aprecia en las patas y branquias asÌ lo confirma.",
    "height": "1.30 m",
    "weight": "40.5 kg",
    "candy": "Kabuto Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0032,
    "avg_spawns": 0.32,
    "spawn_time": "23:40",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknessesImg":[
      "images/types/electric.png",
      "images/types/grass.png",
      "images/types/fighting.png",
      "images/types/ground.png"
    ],
    "prev_evolution": [
      {
        "num": "140",
        "name": "Kabuto"
      }
    ]
  },
  {
    "id": 142,
    "num": "142",
    "name": "Aerodactyl",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
    "type": [
      "Rock",
      "Flying"
    ],
    "typeImg":[
      "images/types/rock.png",
      "images/types/flying.png"
    ],
    "description": "Los orÌgenes de Aerodactyl datan de la era de los dinosaurios. Se regenerÛ a partir de material genÈtico contenido en ·mbar. Se supone que fue el amo de los cielos en Èpocas pasadas.",
    "height": "1.80 m",
    "weight": "59.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.018,
    "avg_spawns": 1.8,
    "spawn_time": "23:40",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Electric",
      "Ice",
      "Rock",
      "Steel"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/electric.png",
      "images/types/ice.png",
      "images/types/rock.png",
      "images/types/steel.png"
    ]
  },
  {
    "id": 143,
    "num": "143",
    "name": "Snorlax",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    "type": [
      "Normal"
    ],
    "typeImg":[
      "images/types/normal.png"
    ],
    "description": "Un dÌa cualquiera en la vida de Snorlax consiste en comer y dormir. Es un PokÈmon tan dÛcil que es f·cil ver niÒos usando la gran panza que tiene como lugar de juegos.",
    "height": "2.11 m",
    "weight": "460.0 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.016,
    "avg_spawns": 1.6,
    "spawn_time": "23:40",
    "multipliers": null,
    "weaknesses": [
      "Fighting"
    ],
    "weaknessesImg":[
      "images/types/fighting.png"
    ]
  },
  {
    "id": 144,
    "num": "144",
    "name": "Articuno",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
    "type": [
      "Ice",
      "Flying"
    ],
    "typeImg":[
      "images/types/ice.png",
      "images/types/flying.png"
    ],
    "description": "Articuno es un PokÈmon p·jaro legendario que puede controlar el hielo. El batir de sus alas congela el aire. Dicen que consigue hacer que nieve cuando vuela.",
    "height": "1.70 m",
    "weight": "55.4 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Electric",
      "Rock",
      "Steel"
    ],
    "weaknessesImg":[
      "images/types/fire.png",
      "images/types/electric.png",
      "images/types/rock.png",
      "images/types/steel.png"
    ]
  },
  {
    "id": 145,
    "num": "145",
    "name": "Zapdos",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
    "type": [
      "Electric",
      "Flying"
    ],
    "typeImg":[
      "images/types/electric.png",
      "images/types/flying.png"
    ],
    "description": "Zapdos es un PokÈmon p·jaro legendario que tiene la habilidad de controlar la electricidad. Suele vivir en nubarrones. Este PokÈmon gana mucha fuerza si le alcanzan los rayos.",
    "height": "1.60 m",
    "weight": "52.6 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Ice",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/ice.png",
      "images/types/rock.png"
    ]
  },
  {
    "id": 146,
    "num": "146",
    "name": "Moltres",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
    "type": [
      "Fire",
      "Flying"
    ],
    "typeImg":[
      "images/types/fire.png",
      "images/types/flying.png"
    ],
    "description": "Moltres es un PokÈmon p·jaro legendario que tiene la habilidad de controlar el fuego. Dicen que, si resulta herido, se sumerge en el lÌquido magma de un volc·n para arder y curarse.",
    "height": "2.01 m",
    "weight": "60.0 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weaknessesImg":[
      "images/types/water.png",
      "images/types/electric.png",
      "images/types/rock.png"
    ]
  },
  {
    "id": 147,
    "num": "147",
    "name": "Dratini",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png",
    "type": [
      "Dragon"
    ],
    "typeImg":[
      "images/types/dragon.png"
    ],
    "description": "Dratini muda y se despoja de la vieja piel continuamente. Es algo que necesita hacer porque la energÌa que tiene en su interior no para de alcanzar niveles incontrolables.",
    "height": "1.80 m",
    "weight": "3.3 kg",
    "candy": "Dratini Candy",
    "candy_count": 25,
    "egg": "10 km",
    "spawn_chance": 0.30,
    "avg_spawns": 30,
    "spawn_time": "06:41",
    "multipliers": [
      1.83,
      1.84
    ],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "weaknessesImg":[
      "images/types/ice.png",
      "images/types/dragon.png",
      "images/types/fairy.png"
    ],
    "next_evolution": [
      {
        "num": "148",
        "name": "Dragonair"
      },
      {
        "num": "149",
        "name": "Dragonite"
      }
    ]
  },
  {
    "id": 148,
    "num": "148",
    "name": "Dragonair",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
    "type": [
      "Dragon"
    ],
    "typeImg":[
      "images/types/dragon.png"
    ],
    "description": "Dragonair acumula grandes cantidades de energÌa dentro de sÌ. Dicen que altera el clima de la zona en la que est· descargando energÌa a travÈs de las esferas de cristal que tiene en el cuello y en la cola.",
    "height": "3.99 m",
    "weight": "16.5 kg",
    "candy": "Dratini Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "11:57",
    "multipliers": [
      2.05
    ],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "weaknessesImg":[
      "images/types/ice.png",
      "images/types/dragon.png",
      "images/types/fairy.png"
    ],
    "prev_evolution": [
      {
        "num": "147",
        "name": "Dratini"
      }
    ],
    "next_evolution": [
      {
        "num": "149",
        "name": "Dragonite"
      }
    ]
  },
  {
    "id": 149,
    "num": "149",
    "name": "Dragonite",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    "type": [
      "Dragon",
      "Flying"
    ],
    "typeImg":[
      "images/types/dragon.png",
      "images/types/flying.png"
    ],
    "description": "Dragonite es capaz de dar la vuelta al mundo en solo 16 horas. Es un PokÈmon de buen corazÛn que guÌa hasta tierra a los barcos que se encuentran perdidos en plena tormenta y a punto de zozobrar.",
    "height": "2.21 m",
    "weight": "210.0 kg",
    "candy": "Dratini Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0011,
    "avg_spawns": 0.11,
    "spawn_time": "23:38",
    "multipliers": null,
    "weaknesses": [
      "Ice",
      "Rock",
      "Dragon",
      "Fairy"
    ],
    "weaknessesImg":[
      "images/types/ice.png",
      "images/types/rock.png",
      "images/types/dragon.png",
      "images/types/fairy.png"
    ],
    "prev_evolution": [
      {
        "num": "147",
        "name": "Dratini"
      },
      {
        "num": "148",
        "name": "Dragonair"
      }
    ]
  },
  {
    "id": 150,
    "num": "150",
    "name": "Mewtwo",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "type": [
      "Psychic"
    ],
    "typeImg":[
      "images/types/psychic.png"
    ],
    "description": "Mewtwo fue creado por manipulaciÛn genÈtica. Pero, a pesar de que el hombre creÛ su cuerpo, dotar a Mewtwo de un corazÛn compasivo quedÛ en el olvido.",
    "height": "2.01 m",
    "weight": "122.0 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ]
  },
  {
    "id": 151,
    "num": "151",
    "name": "Mew",
    "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    "type": [
      "Psychic"
    ],
    "typeImg":[
      "images/types/psychic.png"
    ],
    "description": "Dicen que Mew posee el mapa genÈtico de todos los PokÈmon. Puede hacerse invisible cuando quiere, asÌ que pasa desapercibido cada vez que se le acerca alguien.",
    "height": "0.41 m",
    "weight": "4.0 kg",
    "candy": "None",
    "egg": "Not in Eggs",
    "spawn_chance": 0,
    "avg_spawns": 0,
    "spawn_time": "N/A",
    "multipliers": null,
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "weaknessesImg":[
      "images/types/bug.png",
      "images/types/ghost.png",
      "images/types/dark.png"
    ]
  }
]
};