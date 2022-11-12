import './Pokecard.css'

interface PokecardProps {
    spriteUrl?: string,
    name: string
}

 const Pokecard = ({spriteUrl, name}: PokecardProps) => {
    return (
        <div className="pokecard">
            <img className="pokemon-sprite" src={spriteUrl} alt="pokemon" />
            <p>{ name }</p>
        </div>
    );
}

export default Pokecard;