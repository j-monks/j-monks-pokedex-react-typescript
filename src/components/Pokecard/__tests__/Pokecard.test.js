import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pokecard from '../Pokecard'

afterEach(() => {
    cleanup()
})

test('should render pokecard component', () => {
    const pokecard = {
        spriteUrl: 'http://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',
        name: 'bulbasaur'
    }
    render(<Pokecard name={pokecard.name} spriteUrl={pokecard.spriteUrl}/>)
    const pokecardElement = screen.getByTestId('pokecard-bulbasaur')
    expect(pokecardElement).toBeInTheDocument()
    expect(pokecardElement).toHaveTextContent('bulbasaur')
})