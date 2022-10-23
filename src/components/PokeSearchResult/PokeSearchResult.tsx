import React from 'react';
import './PokeSearchResult.css';
const PokeSearchResult = () => {
    const selectedPokemon = true;
    return (
        <div className="poke-result-card">
            {
                selectedPokemon
                ? (
                    <div>
                       {/* Add the image here */}
                       <p>Name: Pokename</p>
                       <p>Id: 1</p>
                       <p>Height: 12</p>
                       <p>Based Exp: 100xp</p>
                    </div>
                ) : (
                    <h2>Welcome to the Pokedex</h2>
                )
            }
        </div>
    )
}

export default PokeSearchResult;