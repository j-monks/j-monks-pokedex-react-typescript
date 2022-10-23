import React from 'react';
import Pokedex from '../Pokedex/Pokedex';
import './App.css';
import { pokemonData } from './data/pokemonData';

class App extends React.Component {
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