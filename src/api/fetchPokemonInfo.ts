import { useQuery } from "react-query"
import { pokeApi } from "."
import { getPokemonInfo } from "../logic/getPokemonInfo"

const fetchPokemonInfo = (pokemonId: number) =>
  pokeApi
    .get(`/pokemon/${pokemonId}`)
    .then((response) => response.data)
    .then(getPokemonInfo)

export const usePokemon = (pokemonId: number) =>
  useQuery(`/pokemon/${pokemonId}`, () => fetchPokemonInfo(pokemonId))?.data
