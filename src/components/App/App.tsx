import React from 'react';
import Pokedex from '../Pokedex/Pokedex';
import './App.css';
import { pokemonData } from '../../data/pokemonData';
import { PokemonSchema, PokemonSpritesSchema, UnparsedPokemonSchema } from '../../types/PokemonSchema';

interface AppState {
    searchField: string;
    allPokemon: PokemonSchema[];
    searchPokemon:PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemon: [],
        searchPokemon: [],
        selectedPokemon: undefined
    }

    parsePokemonData = (pokemons: UnparsedPokemonSchema[]) => {
        const parsedPokemons = pokemons.map(pokemon => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined
            };

            try {
                // If pokemon.sprites is not null, parse and assign the sprite
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (error) {
                console.log("Error occurred while parsing sprites", error)
            }

            const parsedPokemon: PokemonSchema = {
                // Spreading the pokemon object, meaning to assign all values unparsedPokemonSchema
                // to PokemonSchema and assign the new sprites value
                ...pokemon,
                sprites: parsedSprites
            }

            return parsedPokemon;
        })

        return parsedPokemons;
    }

    componentDidMount() {
        // Parse pokemon sprites
        const parsedPokemon: PokemonSchema[] = this.parsePokemonData(pokemonData)
        // Update component state with parsed pokemons
        this.setState({
            allPokemon: parsedPokemon,
            searchPokemon: parsedPokemon
        })
    }

    render() {
        return <div className='App'>
            <h1>Pokedex</h1>
            <Pokedex
                searchPokemons={ this.state.searchPokemon }
            />
        </div>;
    }
}

export default App;