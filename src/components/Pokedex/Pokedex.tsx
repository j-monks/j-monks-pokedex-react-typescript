import React from 'react';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import "./Pokedex.css";

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
            </div>
            <div className="pokesearch-result-container">
                <PokeSearchResult />
            </div>
        </div>
    )
}

export default Pokedex;