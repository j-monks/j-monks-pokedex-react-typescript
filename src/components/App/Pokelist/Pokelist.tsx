import { PokemonSchema } from '../../../types/PokemonSchema';
import Pokecard from '../../Pokecard/Pokecard';
import './Pokelist.css'

interface PokelistProps {
    searchPokemons: PokemonSchema[]
}


const Pokelist = ({ searchPokemons }: PokelistProps) => {
    return (
        <div className="pokelist">
            {
                searchPokemons.map(pokemon => {
                    return (
                        // If pokemon.name is present return pokeCard
                        pokemon.name && (
                            <Pokecard
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