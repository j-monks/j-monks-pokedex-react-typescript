import './Pokecard.css'

interface PokecardProps {
    spriteUrl?: string,
    name: string,
    onClickPokemon: (pokemonName: string) => void
}

 const Pokecard = ({spriteUrl, name, onClickPokemon}: PokecardProps) => {
    return (
        <div onClick={() => onClickPokemon(name)} className="pokecard">
            <img className="pokemon-sprite" src={spriteUrl} alt="pokemon" />
            <p>{ name }</p>
        </div>
    );
}

export default Pokecard;