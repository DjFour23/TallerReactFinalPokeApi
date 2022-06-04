export const getPokemon = (valorBusqueda) => {
    const pokemon = {};
    const url = `https://pokeapi.co/api/v2/pokemon/${valorBusqueda}`;
    fetch(url)
        .then((resp) => resp.json())
            .then((data) => (
                pokemon.id = data.id,
                pokemon.name = data.name,
                pokemon.url = data.sprites.other.dream_world.front_default
            )
        )
    return pokemon;
}
