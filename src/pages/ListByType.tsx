import { usePokemonByType } from "../api/fetchPokemonByType"
import { Loading } from "../components/Loading"
import { Navbar } from "../components/Navbar"
import { PageContent } from "../components/PageContent"
import { PageTitle } from "../components/PageTitle"
import { PokeCard } from "../components/PokeCard"
import { PokelistContainer } from "../components/PokelistContainer"
import { TypeBadge } from "../components/TypeBadge"
import { Link, useRouteParams } from "../routes"

export const ListPokemonByTypePage = () => {
  const { type_id } = useRouteParams("/type/:type_id" as any) as any

  const { name, pokemon } = usePokemonByType(type_id)

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
              <Link
                to="/pokemon/:pokemon_id"
                params={{ pokemon_id: pokemon.id }}
              >
                <PokeCard pokemon={pokemon} key={pokemon.name} />
              </Link>
            ))
          )}
        </PokelistContainer>
      </PageContent>
    </>
  )
}
