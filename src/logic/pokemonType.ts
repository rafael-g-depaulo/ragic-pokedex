import { pokeApiType } from "../api/fetchPokemonByType"
import {
  getPokemonIdFromUrl,
  PokemonLink,
  spriteUrlfromPokemonId,
  Type,
} from "./getPokemonInfo"

export interface Poketype {
  name: Type["name"]
  pokemon: PokemonLink[]
}

export const parseType = (apiType: pokeApiType): Poketype => ({
  name: apiType.name,
  pokemon: apiType.pokemon.map(({ pokemon }) => {
    const id = getPokemonIdFromUrl(pokemon.url)
    return {
      id,
      name: pokemon.name,
      spriteUrl: spriteUrlfromPokemonId(id),
    }
  }),
})
