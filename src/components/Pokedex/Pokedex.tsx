import React from 'react';
import "./Pokedex.css";

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <p>List of pokemon</p>
            </div>
            <div className="pokesearch-result-container">
                <p>Pokemon search results</p>
            </div>
        </div>
    )
}

export default Pokedex;