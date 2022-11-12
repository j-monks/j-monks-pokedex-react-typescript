import { PokemonSchema } from '../../../types/PokemonSchema';
import Pokecard from '../../Pokecard/Pokecard';
import './Pokelist.css'

interface PokelistProps {
    searchPokemons: PokemonSchema[],
    onClickPokemon: (pokemonName: string) => void
}


const Pokelist = ({ searchPokemons, onClickPokemon }: PokelistProps) => {
    return (
        <div className="pokelist">
            {
                searchPokemons.map(pokemon => {
                    return (
                        // If pokemon.name is present return pokeCard
                        pokemon.name && (
                            <Pokecard
                                onClickPokemon={onClickPokemon}
                                key={pokemon.id}
                                name={pokemon.name}
                                spriteUrl={pokemon.sprites.normal}
                            />
                        )
                    )
                })
            }
        </div>
    );
}

export default Pokelist;