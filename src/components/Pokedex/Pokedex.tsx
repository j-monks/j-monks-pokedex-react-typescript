import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import Pokelist from '../App/Pokelist/Pokelist';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import "./Pokedex.css";

interface PokedexProps {
    searchPokemons: PokemonSchema[],
    selectedPokemon: PokemonSchema | undefined,
    onClickPokemon: (pokemonName: string) => void,
    onInputChange: (inputValue: string) => void
}

const Pokedex = ({ searchPokemons, selectedPokemon, onInputChange, onClickPokemon }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox
                    onInputChange={onInputChange}
                />
                <Pokelist
                    searchPokemons={searchPokemons}
                    onClickPokemon={onClickPokemon}
                />
            </div>
            <div className="pokesearch-result-container">
                <PokeSearchResult
                    selectedPokemon={selectedPokemon}
                />
            </div>
        </div>
    )
}

export default Pokedex;