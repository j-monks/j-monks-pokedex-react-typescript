import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import Pokelist from '../App/Pokelist/Pokelist';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import "./Pokedex.css";

interface PokedexProps {
    searchPokemons: PokemonSchema[]
}

const Pokedex = ({ searchPokemons }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
                <Pokelist
                    searchPokemons={searchPokemons}
                />
            </div>
            <div className="pokesearch-result-container">
                <PokeSearchResult />
            </div>
        </div>
    )
}

export default Pokedex;