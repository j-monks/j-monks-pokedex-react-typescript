import React from 'react';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import "./Pokedex.css";

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <p>List of pokemon</p>
            </div>
            <div className="pokesearch-result-container">
                <PokeSearchResult />
            </div>
        </div>
    )
}

export default Pokedex;