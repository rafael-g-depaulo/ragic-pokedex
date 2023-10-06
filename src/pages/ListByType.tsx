import { usePokemonByType } from "../api/fetchPokemonByType"
import { Loading } from "../components/Loading"
import { Navbar } from "../components/Navbar"
import { PageContent } from "../components/PageContent"
import { PageTitle } from "../components/PageTitle"
import { PokeCard } from "../components/PokeCard"
import { PokelistContainer } from "../components/PokelistContainer"
import { TypeBadge } from "../components/TypeBadge"

export const ListPokemonByTypePage = () => {
  // get id of type being viewd from route
  // get id of type being viewd from route
  const typeId = 3
  // get id of type being viewd from route
  // get id of type being viewd from route

  const { name, pokemon } = usePokemonByType(typeId)

  return (
    <>
      <Navbar />
      <PageContent>
        <PageTitle>
          {!name ? <Loading /> : <TypeBadge name={name!}>{name}</TypeBadge>}{" "}
          Pokemon
        </PageTitle>
        <PokelistContainer>
          {!pokemon ? (
            <Loading />
          ) : (
            pokemon.map((pokemon) => (
              <PokeCard pokemon={pokemon} key={pokemon.name} />
            ))
          )}
        </PokelistContainer>
      </PageContent>
    </>
  )
}
