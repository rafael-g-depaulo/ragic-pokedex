import styled from "styled-components"
import { useAllPokemon } from "../api/allPokemon"
import { usePokemon } from "../api/fetchPokemonInfo"
import { PokeCard } from "../components/PokeCard"

const PokelistContainer = styled.main`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	gap: 0.8rem;

	border-radius: 0.5rem;
	background-color: #b8e3d7;
	padding: 1.6rem 0.2rem;
	justify-content: center;
`

export const ListAllPokemonPage = () => {
  const data = useAllPokemon()
  // const bulba = usePokemon(1)
  return (
    <>
      <h1>List all Pokemon</h1>
      <PokelistContainer>
        {data && data.map(pokemon => <PokeCard pokemon={pokemon} key={pokemon.name} />)}
      </PokelistContainer>
      {/* <pre>{JSON.stringify(bulba, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}
