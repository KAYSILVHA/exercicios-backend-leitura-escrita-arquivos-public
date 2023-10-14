const { listarPokemons, detalharPokemon } = require('utils-playground')

const listaPokemons = async (req, res) => {
  try {
    const pokemon = await listarPokemons();
    return res.status(200).json(pokemon)
  } catch (erro) {
    return res.status(400).json(`ERRO: ${erro.message}`)
  }
};


const detalharPokemonPorIdOuNome = async (req, res) => {
  const { idOuNome } = req.params;

  try {
    const pokemon = await detalharPokemon(idOuNome);
    const pokemonSelecionado = {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      forms: pokemon.forms,
      abilities: pokemon.abilities,
      species: pokemon.species,
    };
    return res.status(200).json(pokemonSelecionado);

  } catch (erro) {
    return res.status(400).json(`ERRO: ${erro.message}`)
  }
};

module.exports = {
  listaPokemons,
  detalharPokemonPorIdOuNome
}

