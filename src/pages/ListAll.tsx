import { useAllPokemon } from "../api/allPokemon"
import { usePokemon } from "../api/fetchPokemonInfo"

export const ListAllPokemonPage = () => {
  const data = useAllPokemon()
  const bulba = usePokemon(1)
  return (
    <>
      <h1>bulba</h1>
      <pre>{JSON.stringify(bulba, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
