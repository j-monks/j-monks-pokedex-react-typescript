import Pokecard from '../../Pokecard/Pokecard';
import './Pokelist.css'

const Pokelist = () => {
    return (
        <div className="pokelist">
            <Pokecard name="Pikachu" />
            <Pokecard name="Bulbasaur" />
            <Pokecard name="Ivysaur" />
            <Pokecard name="Venasaur" />
            <Pokecard name="Charizard" />
        </div>
    );
}

export default Pokelist;