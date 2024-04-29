const { URL_API } = require('./config');
const { ERRORES } = require('./errores');

const obtenerTodosLosPokemones = async () => {
    const response = await fetch(URL_API + '/pokemon');
    const usuarios = await response.json();
    return usuarios;
};

const obtenerPokemonPorId = async (id_pokemon) => {
    try {
        const response = await fetch(URL_API + '/pokemon/' + id_pokemon);
        //  if (response.ok) {
        //      throw ERRORES.ERROR_INTERNO_DEL_SERVIDOR;
        // }
        if (response.status === 404) {
            throw ERRORES.POKEMON_NO_ENCONTRADO;
        } else {
            const pokemon = await response.json();
            if (pokemon.abilities.length <= 1) {
                console.log(pokemon.id, pokemon.name, pokemon.abilities[0].ability.name);
            } else if (pokemon.abilities.length <= 2) {
                console.log(pokemon.id, pokemon.name, pokemon.abilities[0].ability.name, pokemon.abilities[1].ability.name);
            } else if (pokemon.abilities.length <= 3) {
                console.log(pokemon.id, pokemon.name, pokemon.abilities[0].ability.name, pokemon.abilities[1].ability.name, pokemon.abilities[2].ability.name);
            }
            else {
                throw ERRORES.ERROR_POKEMON_CON_MUCHAS_HABILIDADES;
            }
        }
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

obtenerPokemonPorId(100);