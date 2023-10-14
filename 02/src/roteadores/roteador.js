const express = require('express');
const {listaPokemons, detalharPokemonPorIdOuNome} = require('../controladores/pokemons')
const roteador = express();


roteador.get('/pokemon', listaPokemons)
roteador.get('/pokemon/:idOuNome/', detalharPokemonPorIdOuNome)
module.exports = roteador