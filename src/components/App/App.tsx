import React from 'react';
import Pokedex from '../Pokedex/Pokedex';
import './App.css';
import { pokemonData } from '../../data/pokemonData';

interface AppState {
    searchField: string;
    allPokemon: any;
    searchPokemon: any;
    selectedPokemon: any;
}

class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemon: [],
        searchPokemon: [],
        selectedPokemon: null
    }

    componentDidMount(): void {
        const pokeData = pokemonData;
    }

    render() {
        return <div className='App'>
            <h1>Pokedex</h1>
            <Pokedex />
            </div>;
    }
}

export default App;