import { FC } from "react"
import { usePokemon } from "../api/fetchPokemonInfo"
import { Loading } from "../components/Loading"
import { Navbar } from "../components/Navbar"
import { PageContent } from "../components/PageContent"
import { PageTitle } from "../components/PageTitle"
import { PokeInfoCard } from "../components/PokeInfoCard"

export const ShowPokemonPage: FC = () => {
  // get current pokemon id from route
  // get current pokemon id from route
  const pokemon_id = 1
  // get current pokemon id from route
  // get current pokemon id from route

  const pokemon = usePokemon(pokemon_id)

  return (
    <>
      <Navbar />
      <PageContent>
        {!pokemon ? (
          <Loading />
        ) : (
          <>
            <PageTitle>Showing {pokemon.name}</PageTitle>
            <PokeInfoCard pokemon={pokemon} />
          </>
        )}
      </PageContent>
    </>
  )
}
