import { useAllPokemon } from "../api/allPokemon"
import { Navbar } from "../components/Navbar"
import { PageContent } from "../components/PageContent"
import { PageTitle } from "../components/PageTitle"
import { PokeCard } from "../components/PokeCard"
import { PokelistContainer } from "../components/PokelistContainer"

export const ListAllPokemonPage = () => {
  const data = useAllPokemon()
  return (
    <>
      <Navbar />
      <PageContent>
        <PageTitle>List all Pokemon</PageTitle>
        <PokelistContainer>
          {data &&
            data.map((pokemon) => (
              <PokeCard pokemon={pokemon} key={pokemon.name} />
            ))}
        </PokelistContainer>
        {/* <pre>{JSON.stringify(bulba, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </PageContent>
    </>
  )
}
