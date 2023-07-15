import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        if (searchQuery) {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`)
                .then(response => {
                    setPokemonData(response.data);
                })
                .catch(error => {
                    console.error(error);
                    setPokemonData(null);
                });
        } else {
            setPokemonData(null);
        }
    }, [searchQuery]);

    const handleSearch = event => {
        event.preventDefault();
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <h2>Pokémon Search</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {pokemonData ? (
                <div>
                    <h3>{pokemonData.name}</h3>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                    <p>Forms: {pokemonData.forms.name}</p>
                    <p>Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
                </div>
            ) : (
                <p>No Pokémon found.</p>
            )}
        </div>
    );
}

export default PokemonSearch;
