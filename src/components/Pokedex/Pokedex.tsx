import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import Pokelist from '../App/Pokelist/Pokelist';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import "./Pokedex.css";

interface PokedexProps {
    searchPokemons: PokemonSchema[],
    onInputChange: (inputValue: string) => void
}

const Pokedex = ({ searchPokemons, onInputChange }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox
                    onInputChange={onInputChange}
                />
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