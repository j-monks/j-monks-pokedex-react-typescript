import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
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

test('matches snapshot', () => {
    const pokecard = {
        spriteUrl: 'http://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',
        name: 'bulbasaur'
    }
    const tree = renderer.create(<Pokecard name={pokecard.name} spriteUrl={pokecard.spriteUrl}/>).toJSON()
    expect(tree).toMatchSnapshot()
})

test('should call the onClick when pokecard is clicked', () => {
    const onClickPokemon = jest.fn()
    const pokecard = {
        spriteUrl: 'http://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',
        name: 'bulbasaur'

    }
    render(<Pokecard name={pokecard.name} onClickPokemon={onClickPokemon} spriteUrl={pokecard.spriteUrl}/>)
    const pokecardElement = screen.getByTestId('pokecard-bulbasaur')
    userEvent.click(pokecardElement)
    expect(onClickPokemon).toBeCalled()
})