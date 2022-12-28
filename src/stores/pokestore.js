import { writable } from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data = await response.json();
    console.log(data);
    const loadedPokemon = data.results.map((/** @type {{ name: any; }} */ data, /** @type {number} */ index) => {
        return {
            name: data.name,
            id: index + 1,
            // image: data['sprites']['versions']['generation-v']['black-white']['animated']['front-default'],
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
            //image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`,

        }
    });
    pokemon.set(loadedPokemon);
};
fetchPokemon();